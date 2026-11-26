const ContactInfoItem = ({ icon, title, children }) => {
  return (
    <div className="contact">
      <div className="contact-info">
        <i className={icon}></i>

        <div>
          <h5>{title}</h5>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoItem;
