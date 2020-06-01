export function pluralize(string: string) {
  const isLastLetterS = string.charAt(string.length - 1) === 's';
  return isLastLetterS ? `${string}'` : `${string}'s`;
}

export function getInitials(firstName: string, lastName: string) {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`;
}
