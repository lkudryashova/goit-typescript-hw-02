import s from "./ErrorMessage.module.css";

export default function ErrorMessage({ message }) {
  return <div className={s.message}>{message}</div>;
}
