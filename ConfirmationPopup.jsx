import React from "react";

function ConfirmationPopup({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="confirmation-popup">
      <p>Are you sure you want to delete this item?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onClose}>No</button>
    </div>
  );
}

export default ConfirmationPopup;
