import { useParams } from "react-router-dom";
import { useState } from "react";
import taskService from "../../../services/taskService";
import "./taskItem.css";

export default function TaskItem({ task, fetchTaskList }) {
  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
  });
  const [update, setUpdate] = useState(false);
  const { userId, projectId } = useParams();

  const handleDelete = async () => {
    try {
      await taskService.deleteTask(userId, projectId, task._id);
      await fetchTaskList();
    } catch (error) {
      console.log("Error deleting task:", error);
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const updatedFormData = {
        title: formData.title,
        description: formData.description,
        status: task.status,
      };
      await taskService.updateTask(
        userId,
        projectId,
        task._id,
        updatedFormData,
      );
      await fetchTaskList();
      setUpdate(false);
    } catch (error) {
      console.log("Error updating task:", error);
    }
  };

  const handleStatusUpdate = async (updatedStatus) => {
    try {
      const updatedFormData = {
        title: formData.title,
        description: formData.description,
        status: updatedStatus,
      };
      await taskService.updateTask(
        userId,
        projectId,
        task._id,
        updatedFormData,
      );
      await fetchTaskList();
    } catch (error) {
      console.log("Error updating task status:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStyle = () => {
    if (task.status === "complete") {
      return { backgroundColor: "#32CD32" };
    } else if (task.status === "inprogress") {
      return { backgroundColor: "yellow" };
    } else if (task.status === "pending") {
      return { backgroundColor: "red" };
    }
    return {};
  };

  const saveButtonStyle = {
    backgroundColor: '#32CD32',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    fontWeight: 'bold',
    marginTop: '20px',
    outline: 'none',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className="Task-list-cards-contener">
      <div className="Task-list-cards" style={handleStyle()}>
        <div className="status-buttons">
          <button onClick={() => handleStatusUpdate("complete")}>🟢</button>
          <button onClick={() => handleStatusUpdate("inprogress")}>🟡</button>
          <button onClick={() => handleStatusUpdate("pending")}>🔴</button>
        </div>
        <form onSubmit={handleUpdate}>
          <h2>
            {update ? (
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            ) : (
              task.title
            )}
          </h2>
          <p>
            {update ? (
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            ) : (
              task.description
            )}
          </p>
          {update ? <button type="submit" style={saveButtonStyle}>Save</button> : null}
        </form>
        <p>{task.status}</p>
        <div className="class-but-delet-update">
          <button className="but-delet" onClick={handleDelete}>
            <img
              className="delet-img"
              src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
              alt="delet-alt"
            />
          </button>
          <button className="but-update" onClick={() => setUpdate(!update)}>
            <img
              className="img-edit"
              src="https://margin.finideas.com/img/edit.png"
              alt="edit-alt"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
