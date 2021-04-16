// import * as tasks from "./modules/tasks/tasks";
import * as consts from "./constants";
import * as fs from "fs";

// подобие потока ввода
const STDIN: string = fs.readFileSync(consts.PATH_TO_INPUT_FILES + consts.INPUT_FILE_NAME, "utf-8");


/**
 * Возвращает строку, в которой удалены все пробелы, и все буквы в нижнем регистре
 * @param str         нормализуемая строка
 */
const normalizeString = (str: string): string => {
  return str.split("").filter((char: string) => !(char === " ")).join("").toLowerCase();
}


/**
 * Основная программа
 */
const main = async (): Promise<void> => {
  STDIN.split("\n").forEach((line: string) => {
    line = normalizeString(line);
    console.log(line);
  });
}


// запуск функции с отловом ошибок
main()
  .catch((err: Error) => {
    console.error("[ERROR]:", err.message);
  });
