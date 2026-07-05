import { useState } from "react";
import {
  validatePassword,
  checkPasswordMatch,
  checkRequired,
} from "./validators";
import "./RegForm.scss";

const RegForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValide, setIsPasswordValide] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [selectedYear, setSelectedYear] = useState("");
  const [requiredFieldsError, setRequiredFieldsError] = useState(false);
  const [showSuccessMessage, setShowSeccessMessage] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValide(validatePassword(newPassword, confirmPassword));
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordMatch(checkPasswordMatch(password, newConfirmPassword));
  };

  const years = Array.from(
    { length: 40 },
    (_, i) => new Date().getFullYear() - i,
  );

  const handleReset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setIsPasswordValide(true);
    setConfirmPassword("");
    setPasswordMatch(true);
    setSelectedYear("");
    setRequiredFieldsError(false);
    setShowSeccessMessage(false);

    setTimeout(() => {
      setShowSeccessMessage(false);
    }, 3000);
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    const allFieldsFilled = checkRequired([
      name,
      email,
      password,
      confirmPassword,
      selectedYear,
    ]);

    const isFormValid = allFieldsFilled && isPasswordValide && passwordMatch;

    if (!isFormValid) {
      setRequiredFieldsError(true);
      setShowSeccessMessage(false);
      return;
    }

    setRequiredFieldsError(false);
    setShowSeccessMessage(true);

    const formData = {
      name,
      email,
      password,
      selectedYear,
    };

    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="section">
      <h1>Форма регистрации</h1>
      <form onSubmit={handlSubmit}>
        <input type="text" placeholder="Имя" onChange={handleNameChange} />
        <input type="email" placeholder="Email" onChange={handleEmailChange} />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={handlePasswordChange}
        />
        {!isPasswordValide && (
          <div className="error-message">
            Пароль должен состоять из латинских букв и цифр, а также быть не
            менее 8 символов
          </div>
        )}
        <input
          type="password"
          placeholder="Подтвердите пароль"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {!passwordMatch && (
          <div className="error-message">Пароли пока не совпадают</div>
        )}
        <select value={selectedYear} onChange={handleYearChange}>
          <option value={""}>Дата окончания учебного заведения</option>
          {years.map((year) => (
            <option value={year} key={year.toString()}>
              {year}
            </option>
          ))}
        </select>
        <button type="submit">Отправить</button>
        <button onClick={handleReset} type="reset">
          Очистить форму
        </button>
        {requiredFieldsError && (
          <div className="error-message">Проверьте заполнение полей формы</div>
        )}
        {showSuccessMessage && (
          <div className="success-message">Данные успешно отправлены</div>
        )}
      </form>
    </div>
  );
};
export default RegForm;
