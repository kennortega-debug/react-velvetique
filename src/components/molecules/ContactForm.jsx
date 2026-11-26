import { Button } from "../../atoms/Button";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("¡Gracias por contactarnos!");
  };

  return (
    <section className="message">
      <h3>Send Us a Message</h3>
      <p>------</p>

      <form onSubmit={handleSubmit}>
        <div className="name-mail">
          <div id="name">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Your name"
              required
            />
          </div>

          <div id="email">
            <label htmlFor="emailAddress">Email Address</label>
            <input
              type="email"
              id="emailAddress"
              name="email"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        <div className="comment">
          <div className="msg">
            <label htmlFor="subject">Subject</label>
          </div>

          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Write your subject"
            required
          />

          <div className="msg">
            <label htmlFor="message">Message</label>
          </div>

          <textarea
            id="message"
            name="message"
            placeholder="How can we help you?"
            rows="5"
            required
          />

          <Button variant="primary" type="submit">
            Enviar un mensaje
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
