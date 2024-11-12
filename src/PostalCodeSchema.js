class PostalValidator {
  isCode(str) {
    return `${str}`.startsWith('ZIP');
  }

  setPostalCodeLengthConstraint(mn, mx = Infinity) {
    this.min = mn;
    this.max = mx;
    return this;
  }

  isNormLength(str) {
    if (!this.min) return true;
    const [, code] = str.split('_');
    return this.min <= code.length && this.max >= code.length;
  }

  isValid(str) {
    return this.isCode(str) && this.isNormLength(str);
  }
}

export default PostalValidator;
