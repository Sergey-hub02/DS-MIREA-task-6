import ListNode from "../node/ListNode";
import { cloneDeep } from "lodash";

/**
 * Представляет структуру данных однонаправленный список
 */
class List<T> {
  private _size: number;
  private _header: ListNode<T> | undefined;


  /**
   * Создаёт пустой список
   */
  public constructor() {
    this._size = 0;
    this._header = undefined;
  }


  /**
   * Возвращает количество элементов, которые содержит список
   */
  public get size(): number {
    return this._size;
  }


  /**
   * Возвращает ссылку на головной элемент списка
   */
  public get header(): ListNode<T> | undefined {
    return this._header;
  }


  /**
   * Устанавливает новую ссылку на головной элемент списка
   * @param header        новая ссылка на головной элемент списка
   */
  public set header(header: ListNode<T> | undefined) {
    this._header = header;
  }


  /**
   * Добавляет элемент или элементы в начало списка
   * @param elements        добавляемый(е) элемент(ы)
   */
  public add(...elements: Array<T>): void {
    this._size += elements.length;

    elements.forEach((element: T) => {
      let tempNode: ListNode<T> = new ListNode(element);

      if (this._header === undefined) {   // список является пустым
        this._header = tempNode;
        this._header.next = undefined;
        return;
      }

      // this._header на данном этапе не может быть равен undefined
      [this._header!.value, tempNode.value] = [tempNode.value, this._header!.value];

      tempNode.next = this._header!.next;
      this._header!.next = tempNode;
    });
  }


  /**
   * Возвращает строковое представление однонаправленного списка
   */
  public toString(): string {
    if (this._size === 0) { // список пуст
      return "[]";
    }

    let copyHeader: ListNode<T> | undefined = cloneDeep(this._header);
    let strList: string = `[${copyHeader!.value}`;

    copyHeader = copyHeader!.next;

    while (copyHeader !== undefined) {
      strList += `, ${copyHeader.value}`;
      copyHeader = copyHeader.next;
    }

    strList += `]`;
    return strList;
  }
}


/* Экспорт для использования структуры в других файлах */
export default List;
