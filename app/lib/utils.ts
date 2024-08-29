export function generateRandomString(length = 8) {
  const charSet =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let result = '';
  while (length > 0) {
    result += charSet.charAt(Math.floor(Math.random() * charSet.length));
    length -= 1;
  }
  return result;
}
