import { useState } from "react";
import '../projectForm/projectForm.css';
import projectService from "../../../services/projectService";

export default function ProjectForm({userId, refetchProjectList}) {
  const [formData, setFormData] = useState({
    name: '',
  });

  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    await projectService.createProject(userId, formData);
    refetchProjectList();
  }

  return (
    <div className="inner-body">
      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <div>
            {/* <label htmlFor="name">Project Name :</label> */}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Project Name"
              onChange={handleFormData}
              value={formData.name}
              className="input-Project-Name"
            />
          </div>
          <button className="Add-proj-but" type="submit">Add Project</button>
        </form>
      </div>
    </div>
  );
}