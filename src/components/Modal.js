const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  ...props
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <ModalOverlay isOpen={isOpen} onClick={handleClose} />
      <ModalContent isOpen={isOpen} {...props}>
        <ModalHeader>
          {title}
          <ModalCloseButton onClick={handleClose} />
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </div>
  );
}