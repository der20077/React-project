import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import useForm from "../../hooks/useForm";

function App() {
  const loginData = useForm({});
  const registerData = useForm({});

  const handleSubmit = (e, formType) => {
    e.preventDefault();
    if (formType === "login") {
      console.log("Данные авторизации", loginData.formData);
    } else if (formType === "register") {
      console.log("Данные регистрации", registerData.formData);
    }
  };

  return (
    <div>
      <h1>Авторизация</h1>
      <LoginForm
        handleChange={loginData.handleChange}
        handleSubmit={(e) => {
          handleSubmit(e, "login");
        }}
        formData={loginData.formData}
      />
      <h1>Регистрация</h1>
      <RegisterForm
        handleChange={registerData.handleChange}
        handleSubmit={(e) => {
          handleSubmit(e, "register");
        }}
        formData={registerData.formData}
      />
    </div>
  );
}

export default App;
