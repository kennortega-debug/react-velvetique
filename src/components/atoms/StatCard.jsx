const StatCard = ({ title, value }) => {
  return (
    <article>
      <span>{title}</span>
      <strong>{value}</strong>
    </article>
  );
};

export default StatCard;
