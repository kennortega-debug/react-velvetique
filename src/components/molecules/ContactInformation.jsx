import ContactInfoItem from "../../molecules/ContactInfoItem/ContactInfoItem";

const ContactInformation = () => {
  return (
    <section className="info">
      <h3>Our Contact Information</h3>

      <ContactInfoItem icon="bi bi-telephone" title="Phone">
        <p>+569 111111111</p>
      </ContactInfoItem>

      <ContactInfoItem icon="bi bi-envelope" title="Email">
        <p>support@velvetique.com</p>
        <p>We'll get back to you within 24 hours.</p>
      </ContactInfoItem>

      <ContactInfoItem icon="bi bi-geo-alt" title="Visit us">
        <p>1234 Velvetique, Maipú, Región Metropolitana</p>
        <p>By appointment or during business hours.</p>
      </ContactInfoItem>
    </section>
  );
};

export default ContactInformation;
