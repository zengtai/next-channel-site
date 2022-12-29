/* 网站基本信息 */
export const SITE_META = {
  NAME: `JoJoGames`, // 网站名称
  URL: `https://jojogames.top/`, // 网站主网址
  DOMAIN: `jojogames.top`, // 网站域名
};

/* 数据获取设置 */
export const RENEW_DATA = false; // 设置为 true 强制获取最新数据

/* 统计信息 */
export const GA_ID = ``; // Google Analytics ID

/* 广告信息 / 设置 */
export const DEV_MODE = false; // 开发环境下默认设置 data-adtest="on", 测试环境设置为 true, 生产环境设置为 false

export const ADSENSE_ID = `ca-pub-9867988711226783`; // Google AdSense ID,必须与域名匹配
export const ADS_SLOT_ID = {
  HOME: ``, // 首页广告ID
  CATEGORY: ``, // 分类页(含全部游戏页)广告ID
  DETAIL: ``, // 详情页广告ID
};

/* 游戏链接参数 */
export const CHANNEL = `jojogames`; // 渠道参数
export const GAME_DOMAIN = `https://cdn2.supereasygame.com`; // 游戏域名
export const GAME_PATH =
  GAME_DOMAIN + `/newgames/minigame.html?platform=` + CHANNEL + `&appid=`; // 游戏路径

/* 游戏图片参数 */
export const IMAGE_PATH = `https://cdn.iwantalipstick.com/gameicon2/`; // 图片基础域名+路径
export const IMAGE_FORMAT = `jpg`; // 图片默认格式,目前支持jpg/png/webp/avif

/* 游戏选项 */
export const SELECTED_GAMES = [
  "Knife",
  "JumpSmash",
  "CrazyMoto",
  "CrazyKart3D",
  "FireTheGun",
  "FeverRacing",
  "ColorBall3D",
  "CrazyKnife",
  "BoardTheTrain",
  "HiTaxi",
  "TrafficRun",
  "MrBullet",
  "LetMeIn",
  "BallIsComing",
  "ZombieSurvival",
  "EasyCharger",
  "LostInLust",
  "BattleBurger",
  "MyCat",
  "CleverJump",
  "BigEater",
  "WildRoll",
  "RoofRunner",
  "MadEraser",
  "FreeFall",
  "MyHome",
  "MagicWorm",
  "HelpTheSheep",
  "TrainIsComing",
  "SpinTheMaze",
  "CutMaster",
  "CleverRescue",
  "AttackHero",
  "NoneLess",
  "CrazyJump",
  "SuperArcher",
  "FutureWarrior",
  "SuperSoccer",
  "BestSniper",
  "SnakeHit",
  "BraveArcher",
  "PowerShooter",
  "GoldenBoot",
  "BoomingPlant",
]; // 选取游戏
export const EXCLUDED_GAMES = []; // 排除游戏
export const FEATURED_GAMES = []; // 推荐游戏
export const TOP_GAMES = [
  { appid: `JumpSmash`, order: 1 },
  { appid: `BoardTheTrain`, order: 2 },
  { appid: `TrafficRun`, order: 3 },
  { appid: `LostInLust`, order: 4 },
  { appid: `MyHome`, order: 5 },
  { appid: `CrazyKnife`, order: 6 },
  { appid: `RoofRunner`, order: 7 },
  { appid: `CrazyMoto`, order: 8 },
  { appid: `PowerShooter`, order: 9 },
  { appid: `FireTheGun`, order: 10 },
  { appid: `ZombieSurvival`, order: 11 },
  { appid: `ColorBall3D`, order: 12 },
  { appid: `FeverRacing`, order: 13 },
  { appid: `SpinTheMaze`, order: 14 },
  { appid: `MrBullet`, order: 15 },
]; // 首推游戏
