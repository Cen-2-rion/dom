import image from "../img/goblin.png";

document.addEventListener("DOMContentLoaded", () => {
  // создаём игровое поле 4x4
  const field = document.createElement("div");
  field.classList.add("field");

  for (let i = 0; i < 16; i++) {
    const fieldCell = document.createElement("div");
    fieldCell.classList.add("field-cell");
    field.append(fieldCell);
  }
  document.body.append(field);

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
