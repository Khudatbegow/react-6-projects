import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ className, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={`${styles.modalOverlay} ${styles[className]}`}></div>
      <div className={`${styles.modalBody} ${styles[className]}`}>
        <button className={styles.modalButton} onClick={onClose} type="button">
          <svg height="24" viewBox="0 0 200 200" width="24">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
        </button>
        <div className={styles.modalContent}>
          <img className={styles.modalImage} src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
