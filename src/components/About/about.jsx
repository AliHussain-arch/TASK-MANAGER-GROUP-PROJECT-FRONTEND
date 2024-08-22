import '../About/about.css'
export default function About() {
  return (
    <section id="about-us">
      <h2>About Us</h2>
      <p>Welcome to our website. We are dedicated to providing the best service possible. Our team is passionate about what we do and we are always here to help you with any questions or concerns you may have.</p>
      <h3>Our Team</h3>
  <div className="team-container">
    <div className="team-member">
      <div className="pi-fadel">
      <img src="https://avatars.githubusercontent.com/u/148485362?s=64&v=4" alt="Team Member 1" />
    </div>
      <a href="https://github.com/Fadelm300"><h3>Fadel moussa</h3></a>
      <p>Member</p>
    </div>
    <div className="team-member">
      <img src="https://avatars.githubusercontent.com/u/172982681?s=48&v=4" alt="Team Member 2" />
      <a href="https://github.com/AliHussain-arch"><h3>Ali Hussain</h3></a>
      <p>Member</p>
    </div>
    <div className="team-member">
      <img src="https://avatars.githubusercontent.com/u/172836087?s=48&v=4" alt="Team Member 3" />
      <a href="https://github.com/Fadhel-SH"><h3>Fadhel SH</h3></a>
      <p>Member</p>
      </div>
  </div>
    </section>

  );
};