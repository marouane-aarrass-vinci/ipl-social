export function isValidEmail(email: string): boolean {
  // Pas d'espaces
  if (email.includes(" ")) {
    return false;
  }

  // Doit contenir un @
  const atIndex = email.indexOf("@");
  if (atIndex === -1) {
    return false;
  }

  // Texte avant et après le @
  const beforeAt = email.substring(0, atIndex);
  const afterAt = email.substring(atIndex + 1);

  if (beforeAt.length === 0 || afterAt.length === 0) {
    return false;
  }

  // Le domaine doit contenir un point
  const dotIndex = afterAt.indexOf(".");
  if (dotIndex === -1) {
    return false;
  }

  // Le point ne peut pas être le dernier caractère
  if (dotIndex === afterAt.length - 1) {
    return false;
  }

  return true;
}
