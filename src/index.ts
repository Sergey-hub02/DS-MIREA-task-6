import * as fs from "fs";

import * as consts from "./constants";
import List from "./modules/list/List";

// подобие потока ввода
const STDIN: string = fs.readFileSync(consts.PATH_TO_INPUT_FILES + consts.INPUT_FILE_NAME, "utf-8");


/**
 * Основная программа
 */
const main = async (): Promise<void> => {
  let list: List<number> = new List();

  list.add(...STDIN.split(" ").map((num: string) => +num));

  console.log(list.toString());
}


// запуск функции с отловом ошибок
main()
  .catch((err: Error) => {
    console.error("[ERROR]:", err.message);
  });
