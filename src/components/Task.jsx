import React, { useState } from "react";

//
const Task = ({ id, text, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleDeleteClick = () => {
    onDelete(id);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(id, editedText);
    setEditing(false);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setEditedText(text);
  };

  const handleEditedTextChange = (event) => {
    setEditedText(event.target.value);
  };

  return (
    <div>
      {editing ? (
        <div className="saveEditBtns">
          <input
            type="text"
            value={editedText}
            onChange={handleEditedTextChange}
          />
          <button onClick={handleSaveClick} className="saveBtn btn">
            Save
          </button>
          <button onClick={handleCancelClick} className="cancelBtn btn">
            Cancel
          </button>
        </div>
      ) : (
        <div className="EditDeleteBtns ">
          <span>{text}</span>
          <div className="btns">
            <button onClick={handleEditClick} className="editBtn btn">
              Edit
            </button>
            <button onClick={handleDeleteClick} className="deleteBtn btn">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Task;
