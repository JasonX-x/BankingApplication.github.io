function validateForm() {
  // Example for Name validation in Create Account form
  let name = document.forms["createAccountForm"]["name"].value;
  if (name === "") {
    alert("Name must be filled out");
    return false;
  }
  // Add similar validations for Email, Password, Deposit, and Withdraw
}
