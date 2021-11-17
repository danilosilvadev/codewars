function consonantValue(s) {
  let biggest = 0;
  s.replace(/[aeiou]/gi, "")
    .split("")
    .forEach((item) => {
      const nums = "abcdefghijklmnopqrstuvwxyz".split("").indexOf(item) + 1;
      if (biggest < nums) biggest = nums;
    });
  return biggest;
}
// now check if has to or more consonants in sequence and sum
// its values

module.exports = {
  consonantValue
};
