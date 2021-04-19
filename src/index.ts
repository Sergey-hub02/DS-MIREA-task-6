import * as fs from "fs";

import * as consts from "./constants";
import List from "./modules/list/List";
import { removeAllElements } from "./modules/tasks/tasks";

// подобие потока ввода
const STDIN: string = fs.readFileSync(consts.PATH_TO_INPUT_FILES + consts.INPUT_FILE_NAME, "utf-8");


/**
 * Основная программа
 */
const main = async (): Promise<void> => {
  let list: List<number> = new List();

  const addingElements: Array<number> = STDIN.split("\n")[0].split(" ").map((num: string) => +num);
  const deletingElement: number = +STDIN.split("\n")[1];

  list.add(...addingElements);

  console.log(`Элемент, который нужно удалить: ${deletingElement}`)
  console.log();

  console.log(`До удаления: ${list.toString()}`);
  removeAllElements(list.header, deletingElement);

  console.log(`После удаления: ${list.toString()}`);
  console.log();
}


// запуск функции с отловом ошибок
main()
  .catch((err: Error) => {
    console.error("[ERROR]:", err.message);
  });
