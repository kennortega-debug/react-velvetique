import RegisterHeader from "../../molecules/RegisterHeader/RegisterHeader";
import RegisterForm from "../../molecules/RegisterForm/RegisterForm";

const RegisterSection = (props) => {
  return (
    <div className="register">
      <RegisterHeader />

      <RegisterForm {...props} />
    </div>
  );
};

export default RegisterSection;
