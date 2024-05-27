const LOWER_A_CODE = "a".charCodeAt(0);
const LOWER_Z_CODE = "z".charCodeAt(0);
const UPPER_A_CODE = "A".charCodeAt(0);
const UPPER_Z_CODE = "Z".charCodeAt(0);
const ALPHABET_LEN = 26;

const caesarCipher = (message, shift) => {
  let encryptedMessage = "";
  for (let i = 0; i < message.length; i++) {
    encryptedMessage += getShiftedChar(message.charAt(i), shift);
  }
  return encryptedMessage;
};

const getShiftedChar = (char, shift) => {
  const charCode = char.charCodeAt(0);

  const shiftedCode = (() => {
    if (charCode >= LOWER_A_CODE && charCode <= LOWER_Z_CODE)
      return ((charCode + shift - LOWER_A_CODE) % ALPHABET_LEN) + LOWER_A_CODE;
    else if (charCode >= UPPER_A_CODE && charCode <= UPPER_Z_CODE)
      return ((charCode + shift - UPPER_A_CODE) % ALPHABET_LEN) + UPPER_A_CODE;
    else return charCode;
  })();

  return String.fromCharCode(shiftedCode);
};

export { caesarCipher, getShiftedChar };
