import PostalValidator from './src/PostalCodeSchema.js';
import IpValidator from './src/IpAddressSchema.js';
import UserValidator from './src/UserSchema.js';

class Validator {
  postalCode() {
    return new PostalValidator();
  }

  ipAddress() {
    return new IpValidator();
  }

  user() {
    return new UserValidator();
  }
}

// const v = new Validator();
// const postalCodeSchema = v.postalCode();
// console.log(postalCodeSchema);

// console.log(postalCodeSchema.isValid('ZIP_12345')); // true
// postalCodeSchema.isValid('ZIP_67890'); // true
// postalCodeSchema.isValid('ZIP_54321'); // true
// postalCodeSchema.isValid('invalid-postal-code'); // false
// console.log(postalCodeSchema.isValid(1234567890)); // false

const v = new Validator();

const userSchema = v.user().shape({
  postalCode: v.postalCode().setPostalCodeLengthConstraint(7),
  ipAddress: v.ipAddress().ipAddressValues(),
});
// console.log(userSchema);
console.log(userSchema.isValid({
  postalCode: 'ZIP_6789056889',
  ipAddress: '27.16.0.55',
})); // true

console.log(userSchema.isValid({
  postalCode: '56121',
  ipAddress: '10.0.0.1',
})); // false
export default Validator;
