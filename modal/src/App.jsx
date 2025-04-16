import React, { useState } from "react";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div className="app">
      <button onClick={openModal} className="modal-button" type="button">
        ✨ Открыть окно
      </button>
      <Modal className={`${open ? "show" : ""}`} onClose={closeModal} />
    </div>
  );
};

export default App;
