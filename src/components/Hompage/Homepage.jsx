import '../Hompage/Homepage.css'; 

const Home = () => {
  return (
    <div className="homeContainer">
      <header className="homeeHeader">
        <h1>Welcome to the Task Manager</h1>
        <p>Organize your projects and manage your tasks efficiently.</p>
      </header>
      
      <section className="homeSection">
        <h2>Why Use Our Task Manager?</h2>
        <p>Our platform offers a simple and intuitive interface to help you keep track of your projects. Sign up now to start organizing your work, prioritize tasks, and manage your workload effectively.</p>
      </section>
      
      <section className="homeSection">
        <h2>Features</h2>
        <ul>
          <li>Create and manage projects</li>
          <li>Add, edit, and delete tasks</li>
          <li>Prioritize tasks to stay focused</li>
          <li>Mark tasks as completed</li>
          <li>Secure access to your account</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;