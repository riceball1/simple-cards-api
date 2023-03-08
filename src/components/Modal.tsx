import styles from "@/styles/Modal.module.css";
import { ReactChildren } from "@/types/typesHelper";

interface Props {
  onToggleModal: () => void;
  children: ReactChildren;
}

const Modal = ({ onToggleModal, children }: Props) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalOverlay} onClick={onToggleModal} />
      <div className={styles.modal}>
        <button className={styles.modalButton} onClick={onToggleModal}>
          x
        </button>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};

export { Modal };
