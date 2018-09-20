const Validator = require('validator');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !Validator.isEmpty(data.email) ? data.email : '';
  data.password = !Validator.isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};