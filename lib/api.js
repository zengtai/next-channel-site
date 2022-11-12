import { SELECTED_GAMES } from "./constants";

import * as fs from "fs";
import path from "path";

/* 数据抓取 */

export const UPTAP_API = `https://uptapapi.uptap.com/h5Game/?type=GameList&platform=uptapgame0120&token=dXB0YXBnYW1l572R56uZ55So`; // GET

// Basic fetcher
async function fetcher(URL) {
  const res = await fetch(URL)
    .then((res) => res.json())
    .catch((e) => {
      console.error(`Error: `, e);
    });

  return res;
}

// 一些字符处理函数

export function toTitle(appid) {
  return appid
    .replace(/([A-Z])/g, " $1")
    .trim()
    .replace(/3 D/g, " 3D")
    .replace(/([A-Za-z])([0-9])/g, "$1 $2");
}

export function toSlug(title) {
  return title.replace(/\s+/g, "-").replace(/\./g, "").toLowerCase();
}

// 1. 从原始API抓取数据,按日期保存?

export async function getData(type) {
  const original_data = await fetcher(UPTAP_API).then((res) => res.gamelist);

  let games = [];
  let categories = [];
  let searchData = [];

  // 打印错误名称
  SELECTED_GAMES.forEach((i) =>
    !original_data.find((g) => g.name === i) ? console.log(i) : null
  );

  let tmpData =
    SELECTED_GAMES.length !== 0
      ? original_data.filter((i) => SELECTED_GAMES.includes(i.name))
      : original_data;

  tmpData.sort((a, b) => (new Date(a.time) < new Date(b.time) ? 1 : -1));
  tmpData.forEach((game) => {
    // 修复原分类命名错误（拼写、大小写、前后空格）
    let category = game.category.trim().toLowerCase();

    if (category === "gril") {
      category = "Girl";
    } else if (category === "io") {
      category = ".IO";
    } else if (category === "match3") {
      category = "Match 3";
    } else if (category === "sport") {
      category = "Sports";
    }

    let appid = game.name === "LittelBoxer" ? "LittleBoxer" : game.name;

    category = category.replace(/^\S/, (s) => s.toUpperCase());

    switch (type) {
      case `games`: {
        // 写入游戏数组
        games.push({
          id: game.id,
          appid: appid,
          slug: toSlug(toTitle(appid)),
          title: toTitle(appid),
          category: category,
          description: game.description,
          creation_date: new Date(game.time).toISOString(),
          rating: getStars(),
          played: getCount(),
        });
      }

      case `category`: {
        // 写入分类数组
        categories.includes(category) ? null : categories.push(category);
      }

      case `search`: {
        // 写入搜索数据
        searchData.push({
          id: game.id,
          appid: appid,
          slug: toSlug(toTitle(appid)),
          title: toTitle(appid),
          category: category,
        });
      }

      default:
        return;
    }
  });

  switch (type) {
    case `games`:
      return games;
    case `category`:
      return categories;

    case `search`:
      return searchData;
    default:
      return tmpData;
  }
}

// 一些模拟数据

function getRange(m, n, o) {
  let min = m;
  let max = n;
  let range = max - min;
  return o
    ? ((Math.random() * range + min) * o).toFixed(1)
    : (Math.random() * range + min).toFixed(1);
}

function getStars(level) {
  if (level !== undefined) {
    if (level == "latest") return getRange(4, 4.8);
    else if (level == "featured") return getRange(4.5, 5);
  } else return getRange(4.1, 4.5);
}

function getCount(level) {
  let latest = 1;
  let normal = 2;
  let featured = 3;
  if (level !== undefined) {
    if (level == "latest") {
      return getRange(1, 5, latest) + `k`;
    } else if (level == "featured") {
      return getRange(11, 20, featured) + `k`;
    }
  } else {
    return getRange(6, 10, normal) + `k`;
  }
}
