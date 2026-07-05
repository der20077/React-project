export const validatePassword = (password) => {
  const paswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return paswordRegex.test(password);
};

export const checkPasswordMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};

export const checkRequired = (fields) => {
  return fields.every((field) => field.trim());
};
