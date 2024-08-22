import { useEffect, useState } from "react";
import ProjectItem from '../projectItem/projectItem';
import '../projectList/projectList.css';
import ProjectForm from "../projectForm/projectForm";
import projectService from "../../../services/projectService";
import { useParams } from "react-router-dom";

export default function ProjectList() {
  const [projectList, setProjectList] = useState([]);
  const params = useParams();
  const { userId } = params;
  useEffect(() => {
    async function fetchProjectList() {
      try {
        const projectsData = await projectService.listProjects(userId);
        setProjectList(projectsData.projects || []);
      } catch (error) {
        console.log("Error:", error);
      }
    }
    fetchProjectList();
  }, [userId, setProjectList]);
  
  async function refetchProjectList() {
    try {
      const projectsData = await projectService.listProjects(userId);
      setProjectList(projectsData.projects || []);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  if (!Array.isArray(projectList) || projectList.length === 0) {
    return (
      <>
        <ProjectForm userId={userId} refetchProjectList={refetchProjectList} />
        <h1>No Projects Found</h1>
      </>
    );
  }

  return (
    <>
      <ProjectForm userId={userId} refetchProjectList={refetchProjectList} />
      <h1>Projects list</h1>
      <ul>
        <div className="Projects-list-cards-contener">
          {projectList.map((project) => (
            <div className="Projects-list-cards" key={project._id}>
              <ProjectItem 
                projectId={project._id} 
                projectName={project.name} 
                userId={userId} 
                refetchProjectList={refetchProjectList} 
              />
            </div>
          ))}
        </div>
      </ul>
    </>
  );
}