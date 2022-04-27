const Alert = ({ message, show }) => {
  return (
    <div
      style={{
        background: "var(--color-danger)",
        border: "var(--color-dark-danger)",
        color: "var(--color-light)",
        padding: "1rem",
        borderRadius: "5px",
        position: "relative",
        display: `${show ? "block" : "none"}`,
        width: "100%",
        marginBottom: "1.8rem",
      }}
      role="alert"
    >
      <span className="text-center">{message}</span>
    </div>
  );
};

export default Alert;
