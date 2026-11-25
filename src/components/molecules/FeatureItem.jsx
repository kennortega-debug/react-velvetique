import FeatureInfo from "../atoms/FeatureInfo";

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <i className={icon}></i>
      <FeatureInfo title={title} description={description} />
    </div>
  );
};

export default FeatureItem;
