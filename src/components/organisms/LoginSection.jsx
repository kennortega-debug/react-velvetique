import LoginHeader from "../../molecules/LoginHeader/LoginHeader";
import LoginForm from "../../molecules/LoginForm/LoginForm";

const LoginSection = ({
  email,
  setEmail,
  password,
  setPassword,
  error,
  manejarSubmit,
}) => {
  return (
    <div className="register">
      <LoginHeader />

      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        error={error}
        manejarSubmit={manejarSubmit}
      />
    </div>
  );
};

export default LoginSection;
