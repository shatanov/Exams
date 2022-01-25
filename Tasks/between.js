// Extract substring between prefix and suffix

getvaluebetween = (str, prefix, suffix) => {
  const prefixIdx = str.indexOf(prefix);
  if (prefixIdx === -1) return '';
  const k = prefixIdx + prefix.length;
  str = str.substring(k);
  if (suffix) {
    const suffixIdx = str.indexOf(suffix);
    if (suffixIdx === -1) return '';
    str = str.substring(0, suffixIdx);
  }
  return str;
};

const result = getvaluebetween('Hello <username> and bye!', '<', '>');
console.log(result);
