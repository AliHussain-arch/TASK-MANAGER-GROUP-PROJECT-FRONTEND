const BACKEND_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

const createProject = async (userId, formData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/${userId}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    });
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.message || "Something went wrong");
    }
    return json;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};

const listProjects = async (userId) => {
  try {
    const res = await fetch(`${BACKEND_URL}/${userId}/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.message || "Something went wrong");
    }
    return json;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};

const updateProject = async (userId, projectId, formData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/${userId}/projects/${projectId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    });
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.message || "Something went wrong");
    }
    return json;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};

const deleteProject = async (userId, projectId) => {
  try {
    const res = await fetch(`${BACKEND_URL}/${userId}/projects/${projectId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.message || "Something went wrong");
    }
    return json;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};

export default {
  createProject,
  listProjects,
  updateProject,
  deleteProject,
};
