type Props = {
  label: string;
};

export function Tile(props: Props) {
  const { label } = props;
  return <div className="tile">{label}</div>;
}
