function caesarCipher(str, shift) {
  const shiftMod = shift % 26;
  return str
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt();
        let shiftedCode = code + shiftMod;
        if (char >= "a" && char <= "z") {
          if (shiftedCode > "z".charCodeAt()) {
            shiftedCode -= 26;
          } else if (shiftedCode < "a".charCodeAt()) {
            shiftedCode += 26;
          }
        } else if (char >= "A" && char <= "Z") {
          if (shiftedCode > "Z".charCodeAt()) {
            shiftedCode -= 26;
          } else if (shiftedCode < "A".charCodeAt()) {
            shiftedCode += 26;
          }
        }
        return String.fromCharCode(shiftedCode);
      }
      return char;
    })
    .join("");
}

module.exports = caesarCipher;
