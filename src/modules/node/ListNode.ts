/**
 * Представляет элемент однонаправленного списка
 */
class ListNode<T> {
  private _value: T;
  private _next: ListNode<T> | undefined;


  /**
   * Создаёт элемент списка
   * @param value         значение информационной части
   * @param next          ссылка на следующий элемент списка
   */
  public constructor(value: T, next?: ListNode<T>) {
    this._value = value;
    this._next = next;
  }


  /**
   * Возвращает значение информационной части элемента списка
   */
  public get value(): T {
    return this._value;
  }


  /**
   * Устанавливает новое значение информационной части элемента списка
   * @param value         новой значение информационной части
   */
  public set value(value: T) {
    this._value = value;
  }


  /**
   * Возвращает ссылку на следующий элемент списка
   */
  public get next(): ListNode<T> | undefined {
    return this._next;
  }


  /**
   * Устанавливает новую ссылку на следующий элемент списка
   * @param next        новая ссылка на следующий элемент списка
   */
  public set next(next: ListNode<T> | undefined) {
    this._next = next;
  }
}


/* Экспорт для использования класса в других файлах */
export default ListNode;
