/**
 * Возвращает true, если строка, переданная в качестве аргумента, является палиндромом
 * @param str         исследуемая строка
 * @param start       начальная позиция исследуемой подстроки
 * @param end         конечная позиция исследуемой подстроки (не включая эту позицию)
 */
export const isPalindromeRecursive = (str: string, start: number, end: number): boolean => {
  --end;

  if (start >= end) {     // строка закончилась
    return (
      (start === end)     // середина строки
        ? true
        : (str[start] === str[end])
    );
  }

  if (str[start] !== str[end]) {
    return false;
  }

  return (true && isPalindromeRecursive(str, start + 1, end));
}


/**
 * Возвращает true, если строка, переданная в качестве аргумента, является палиндромом
 * @param str         исследуемая строка
 */
export const isPalindromeIterative = (str: string): boolean => {
  let left: number = 0;
  let right: number = str.length - 1;

  while (left < right) {
    if (str[left++] !== str[right--]) {
      return false;
    }
  }

  return true;
}
