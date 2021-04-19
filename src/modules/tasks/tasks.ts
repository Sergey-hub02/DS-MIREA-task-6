import ListNode from "../node/ListNode";

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


/**
 * Удаляет все вхождения элемента в списке
 * @param node      головной элемент списка
 * @param element   информационная часть удаляемого элемента
 */
export const removeAllElements = <T>(node: ListNode<T> | undefined, element: T): void => {
  if (node === undefined || (node.next === undefined && node.value !== element)) { // нельзя удалить элемент со значением undefined, либо функция дошла до последнего элемента, и его не нужно удалять
    return;
  }

  if (node.next === undefined && node.value === element) {
    node = undefined;
    return;
  }

  if (node.value === element) { // нужно удалить головной элемент
    // казалось бы
    // node = node.next   должно сработать
    // но TypeScript решил иначе))

    node.value = node.next!.value;  // обмен информационными частями со следующим элементом
    node.next = node.next!.next;
    removeAllElements(node, element);
    return;
  }

  if (node.next!.value === element) {  // нужно удалить элемент после текущего
    // node.next - удаляемый узел в списке
    // node - элемент, который находится перед удаляемым
    node.next = node.next!.next;
    removeAllElements(node, element);
    return;
  }

  removeAllElements(node.next, element);
}
