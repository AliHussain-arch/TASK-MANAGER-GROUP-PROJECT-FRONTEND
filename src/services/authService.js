const BACKEND_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

const signout = () => {
  window.localStorage.removeItem("token");
};

const getUser = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
        console.log('Invalid Token')
        return null
    };
    const rawPayload = token.split(".")[1];
    const jsonPayload = window.atob(rawPayload);
    const user = JSON.parse(jsonPayload);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const signup = async (formData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.message || "Something went wrong");
    }
    return json;
  } catch (error) {
    console.log("Signup error:", error);
    throw error;
  }
};

const signin = async (formData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const json = await res.json();
    if (json.error) {
      throw new Error(json.error);
    }
    if (json.token) {
      window.localStorage.setItem("token", json.token);
      const rawPayload = json.token.split(".")[1];
      const jsonPayload = window.atob(rawPayload);
      const user = JSON.parse(jsonPayload);
      return user;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default {
  signup,
  signin,
  getUser,
  signout,
};
