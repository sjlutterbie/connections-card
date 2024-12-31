import { useMemo, useState } from 'react';

type Props = {
  // isSelected?: boolean;
  label: string;
};

export function Tile(props: Props) {
  const { label } = props;

  const [isSelected, setIsSelected] = useState(false);

  const classes = useMemo(() => {
    const longText = label.length >= 10;
    return ['tile', isSelected && 'selected', longText && 'long-text']
      .filter(Boolean)
      .join(' ');
  }, [isSelected, label]);

  const handleClick = () => setIsSelected((prev) => !prev);

  return (
    <button className={classes} onClick={handleClick}>
      {label}
    </button>
  );
}
