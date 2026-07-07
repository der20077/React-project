import { Children } from "react";
import "./ModalPage.scss";

const Modal = ({ OnClose, children }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <button onClick={OnClose} className="close-button">&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
