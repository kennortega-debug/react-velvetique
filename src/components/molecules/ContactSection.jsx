import ContactInformation from "../ContactInformation/ContactInformation";
import ContactForm from "../../molecules/ContactForm/ContactForm";

const ContactSection = () => {
  return (
    <main className="container">
      <div className="pre-footer">
        <ContactInformation />
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactSection;
