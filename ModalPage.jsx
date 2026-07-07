import { useState } from "react";
import Modal from "./Modal";
import "./ModalPage.scss";

const ModalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const togalModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="modal-page">
      <button onClick={togalModal} className="open-button">
        Открыть модальное окно
      </button>
      {isModalOpen && (
        <Modal OnClose={togalModal}>
          <h2>Заголовок Модального окна</h2>
          <p>Это текст модального окна</p>
        </Modal>
      )}
    </div>
  );
};

export default ModalPage;
