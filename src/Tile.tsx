import { useMemo } from 'react';
import { useGameContext } from './game.context';

type Props = {
  // isSelected?: boolean;
  label: string;
};

export function Tile(props: Props) {
  const { label } = props;

  const { canSelectItem, handleToggleItem, isItemSelected } = useGameContext();

  const isSelected = isItemSelected(label);

  const classes = useMemo(() => {
    const longText = label.length >= 10;
    return ['tile', isSelected && 'selected', longText && 'long-text']
      .filter(Boolean)
      .join(' ');
  }, [isSelected, label]);

  const handleClick = () => {
    if (!isSelected && !canSelectItem) {
      return;
    }
    handleToggleItem(label);
  };

  return (
    <button className={classes} onClick={handleClick}>
      {label}
    </button>
  );
}
