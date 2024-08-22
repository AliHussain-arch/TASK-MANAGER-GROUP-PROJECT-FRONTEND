import '../Contact/contact.css'
export default function Contact() {
    return (
        <section id="contact-us" className="contact-card">
        <h2>Contact Us</h2>
        <form> 
        <label form='name'>Name:</label>
        <input type='text' id='name' name='name' required/>
        <label form='email'>Email:</label>
        <input type='email' id='email' name='email' required/>
        <label form='message'>Message:</label>
        <textarea id='message' name='message' required></textarea>
        <button type='submit'>Submit</button>
        </form>
        <p>Email: <a href="mailto:support@CodeTrio.com">support@CodeTrio.com</a></p>
        <p>GitHub: <a href="https://github.com/AliHussain-arch/TASK-MANAGER-GROUP-PROJECT" target="_blank">github TASK-MANAGER-GROUP-PROJECT</a></p>
        </section>
    
    );
}