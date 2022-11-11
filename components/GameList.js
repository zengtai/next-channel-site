import ListItem from "./ListItem";

export default function GameList({ items, className }) {
  return (
    <ul className={`game-list` + (className ? ` ${className}` : ``)}>
      {items.map((i) => (
        <ListItem key={i.id} item={i} />
      ))}
    </ul>
  );
}
