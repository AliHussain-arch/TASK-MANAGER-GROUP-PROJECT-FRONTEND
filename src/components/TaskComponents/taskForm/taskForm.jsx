import { useState } from "react";
import { useParams } from "react-router-dom";
import taskService from "../../../services/taskService";
import '../taskForm/taskForm.css'

export default function TaskForm({fetchTaskList}) {
  const { projectId, userId } = useParams(); 
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'Pending',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    try {
      await taskService.createTask(userId, projectId, formData); 
      setSuccess("Task created successfully!");
      setFormData({
        title: '',
        description: '',
        status: 'Pending',
      });
      fetchTaskList();
      setError(null);
    } catch (err) {
      console.log("Error:", err);
      setError("Failed to create task. Please try again.");
      setSuccess(null);
    }
  }

  return (
    <>
      <section id="TaskForm" className="TaskForm-card">
      <h1>Create Task</h1>
      <form onSubmit={handleFormSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            name="title"
            placeholder="Title"
            onChange={handleFormData}
            value={formData.title}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            onChange={handleFormData}
            value={formData.description}
          />
        </div>
        <div>
          <button type="submit">Add Task</button>
        </div>
      </form>
      </section>
      
    </>

  );
}
