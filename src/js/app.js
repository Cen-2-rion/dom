import image from "../img/goblin.png";

document.addEventListener("DOMContentLoaded", () => {
  // создаём персонаж goblin
  const goblin = document.createElement("img");
  goblin.src = image;

  // добавляем персонаж на игровое поле в рандомную ячейку
  function moveGoblin() {
    const field = document.querySelector(".field");
    const randomCell =
      field.children[Math.floor(Math.random() * field.children.length)];
    randomCell.append(goblin);
  }

  // перемещаем персонажа по полю каждую секунду
  setInterval(moveGoblin, 1000);
});
