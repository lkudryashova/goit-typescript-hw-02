import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <div>
      <button className={s.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
