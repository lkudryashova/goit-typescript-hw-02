import s from "./ErrorMessage.module.css";

type Props = {
  message: string;
};

const ErrorMessage: React.FC<Props> = ({ message }: Props) => {
  return <div className={s.message}>{message}</div>;
};

export default ErrorMessage;
