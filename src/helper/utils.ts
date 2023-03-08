const validateLogin = (email: string) => {
  const validEmails = [
    "yliu@hotmail.com",
    "sshah@gmail.com",
    "ryamada@gmail.com",
  ];

  return validEmails.includes(email);
};

export { validateLogin };
