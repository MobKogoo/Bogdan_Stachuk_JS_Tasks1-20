/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

let myName = "irakli";
let mySurname = "Kogua";
let myProFession = "lawer";

const personInfo =
  "My Name Is" + " " + myName + " " + mySurname + " and I am " + myProFession;
console.log(personInfo);

const personInfo1 = `My Name Is ${myName}  ${mySurname} and I am ${myProFession}`;
console.log(personInfo1);
