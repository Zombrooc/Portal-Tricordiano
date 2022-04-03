import { XIcon } from "@heroicons/react/outline";
import { ModalContainer, ModalContent } from "./styles";

const Modal = ({ open, children, handleModal }) => {
  return (
    <ModalContainer open={open}>
      <XIcon
        style={{
          width: "3rem",
          height: "3rem",
          position: "absolute",
          top: "15px",
          right: "15px",
          color: "var(--color-light)",
        }}
        onClick={handleModal}
      />
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
};

export default Modal;
