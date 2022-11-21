const arr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function generateHexCode() {
  let hexCode = "";

  let inverthexCode = "";

  for (let i = 0; i < 6; i++) {
    //делаем цикл с 5тью итерациями
    const randomNumber = Math.floor(Math.random() * 16); //получаем рандомное число от 0 до 15

    const element = arr[randomNumber]; //присваеваем шестнадцатиричное значение

    hexCode = hexCode + element; //в эту переменную собираем все получившиеся значения для 5ти значного шестнадцатиричного кода
    const invertElement = arr[15 - randomNumber]; //присваеваем  обратное шестнадцатиричное значение

    inverthexCode += invertElement; // собираем сюда обратные значения чтобы получить инвертированный код
  }
  document.getElementById("hexCode").innerHTML = hexCode; //выводим хеш-код цвета в заголовок
  document.body.style.background = `#${hexCode}`; // задаем body цвет

  document.getElementById("hone").style.color = `#${inverthexCode}`; // задаем загаловкам инвертированный цвет
  document.getElementById("htwo").style.color = `#${inverthexCode}`;
}

// function invert(hex) {
//   return hex.forEach((element) => {
//     console.log(element);
//   });
// }

// document.getElementById("hexCode").innerHTML = hexCode;

// console.log(Math.floor(Math.random() * 16));

// 000 -> fff arr[0] -> arr [16]
// 111 -> eee arr[1] -> arr [15]
