export function prettyText(text: string): string {
  return nonBreakingHyphen(finalNonBreakingSpace(text));
}

function nonBreakingHyphen(text: string): string {
  return text.replace(/-/g, '\u2011');
}

function finalNonBreakingSpace(text: string): string {
  const lastSpaceIndex = text.lastIndexOf(' ');
  const lastHyphenIndex = text.lastIndexOf('-');

  // No spaces
  if (lastSpaceIndex === -1) {
    return text;
  }

  // Final word is hyphenated, probs don't need the nbsp
  if (lastHyphenIndex > lastSpaceIndex) {
    return text;
  }

  return text.substring(0, lastSpaceIndex) + '\xa0' + text.substring(lastSpaceIndex + 1);
}
