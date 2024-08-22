import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../projectItem/projectItem.css";

// Importing Project Services
import projectService from "../../../services/projectService";

export default function ProjectItem({
  userId,
  projectName,
  projectId,
  refetchProjectList,
}) {
  const [update, setUpdate] = useState(false);
  const [formData, setFormData] = useState({ name: projectName });
  const navigate = useNavigate();

  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    await projectService.updateProject(userId, projectId, formData);
    setUpdate(false);
    refetchProjectList();
  }

  async function handleDeleteProject() {
    await projectService.deleteProject(userId, projectId);
    refetchProjectList();
  }

  function handleProjectClick() {
    navigate(`/${userId}/projects/${projectId}/tasks`);
  }

  return (
    <ul key={projectId}>
      {!update ? (
        <h2 onClick={handleProjectClick} style={{ cursor: "pointer" }}>
          {projectName}
        </h2>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormData}
            className="input-Project-Name"
          />

          <button className="but-save" type="submit">
            Save
          </button>
        </form>
      )}
      <div className="class-but-delet-update">
        <button
          className="but-delet"
          style={{ alignItems: update ? "cnter" : "" }}
          type="button"
          onClick={handleDeleteProject}
        >
          <img
            className="delet-img"
            src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
            alt="delet-alt"
            srcset=""
          />
        </button>
        {!update && (
          <button
            className="but-update"
            type="button"
            onClick={() => setUpdate(true)}
          >
            <img
              className="img-edit"
              src="https://margin.finideas.com/img/edit.png"
              alt="edit-alt"
              srcset=""
            />
          </button>
        )}
      </div>
    </ul>
  );
}
