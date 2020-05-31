export function pluralize(string: string) {
  const isLastLetterS = string.charAt(string.length - 1) === 's';
  return isLastLetterS ? `${string}'` : `${string}'s`;
}
