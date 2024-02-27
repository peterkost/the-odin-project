const passwordFields = [
  document.getElementById("password"),
  document.getElementById("passwordConfirm"),
];
const passwordMissmatchText = document.getElementById("passwords-missmatch");
console.log(passwordMissmatchText);

const validatePasswordInput = () => {
  if (!passwordFields.every((el) => el.value === passwordFields[0].value)) {
    passwordFields.forEach((el) =>
      el.setCustomValidity("Passwords do not match!"),
    );
    passwordMissmatchText.style.display = "block";
  } else {
    passwordFields.forEach((el) => el.setCustomValidity(""));
    passwordMissmatchText.style.display = "none";
  }
};

passwordFields.forEach((el) =>
  el.addEventListener("input", validatePasswordInput),
);
