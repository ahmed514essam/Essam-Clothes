interface AlertProps {
    setAlert: (arg0: boolean) => void; // Define the type for the setAlert prop
  }
  
  const Alert = ({ setAlert }: AlertProps) => {
    function closeAlert() {
      setAlert(false);
    }
  
    return (
      <div
        className="modal show"
        tabIndex={-1}
        style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login Failed</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeAlert}
              ></button>
            </div>
            <div className="modal-body">
              <p>Check your email and password!</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeAlert}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Alert;
  