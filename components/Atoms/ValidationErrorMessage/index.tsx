function ValidationErrorMessage() {
  return (
    <>
      <span className="error-message"></span>
      <style jsx>{`
        .error-message {
          font-size: 0.85rem;
          color: red;
        }
      `}</style>
    </>
  );
}

export default ValidationErrorMessage;
