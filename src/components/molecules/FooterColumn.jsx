const FooterColumn = ({ title, children }) => {
  return (
    <div className="footer-col">
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default FooterColumn;
