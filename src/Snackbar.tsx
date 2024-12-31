import './Snackbar.css';

type Props = {
  visible: boolean;
  message: string;
};

export function Snackbar(props: Props) {
  const { visible, message } = props;

  const classes = `snackbar ${visible ? 'visible' : ''}`;

  return <div className={classes}>{message}</div>;
}
