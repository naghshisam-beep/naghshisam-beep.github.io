let turn = true;

$("td").click(function () {
  if ($(this).text() != "") {
    return;
  }

  if (turn) {
    $(this).text("X");
    $(this).css("color", "red");
  } else {
    $(this).text("O");
    $(this).css("color", "blue");
  }

  turn = !turn;

  let a = $("#td1").text();
  let b = $("#td2").text();
  let c = $("#td3").text();

  let d = $("#td4").text();
  let e = $("#td5").text();
  let f = $("#td6").text();

  let g = $("#td7").text();
  let h = $("#td8").text();
  let i = $("#td9").text();

  let red = "X";
  let blue = "O";

  if (a === red && b === red && c === red) {
    let name = $("#name").val();
    alert(name + " WINNER");
  } else if (d === red && e === red && f === red) {
    let name = $("#name").val();
    alert(name + " WINNER");
  } else if (g === red && h === red && i === red) {
    let name = $("#name").val();
    alert(name + " WINNER");
  } else if (a === red && d === red && g === red) {
    let name = $("#name").val();
    alert(name + " WINNER");
  } else if (b === red && e === red && h === red) {
    let name = $("#name").val();
    alert(name + " WINNER");
  } else if (c === red && f === red && i === red) {
    let name = $("#name").val();
    alert(name + " WINNER");
  } else if (a === red && e === red && i === red) {
    let name = $("#name").val();
    alert(name + " WINNER");
  } else if (c === red && e === red && g === red) {
    let name = $("#name").val();
    alert(name + " WINNER");
  } else if (a === blue && b === blue && c === blue) {
    let name1 = $("#name2").val();
    alert(name1 + " WINNER");
  } else if (d === blue && e === blue && f === blue) {
    let name1 = $("#name2").val();
    alert(name1 + " WINNER");
  } else if (g === blue && h === blue && i === blue) {
    let name1 = $("#name2").val();
    alert(name1 + " WINNER");
  } else if (a === blue && d === blue && g === blue) {
    let name1 = $("#name2").val();
    alert(name1 + " WINNER");
  } else if (b === blue && e === blue && h === blue) {
    let name1 = $("#name2").val();
    alert(name1 + " WINNER");
  } else if (c === blue && f === blue && i === blue) {
    let name1 = $("#name2").val();
    alert(name1 + " WINNER");
  } else if (a === blue && e === blue && i === blue) {
    let name1 = $("#name2").val();
    alert(name1 + " WINNER");
  } else if (c === blue && e === blue && g === blue) {
    let name1 = $("#name2").val();
    alert(name1 + " WINNER");
  } else if (
    a !== "" &&
    b !== "" &&
    c !== "" &&
    d !== "" &&
    e !== "" &&
    f !== "" &&
    g !== "" &&
    h !== "" &&
    i !== ""
  ) {
    alert("DRAW!");
  }
});
let h = document.getElementsByClassName("h")[0];

function randomColor() {
  let color =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";

  return color;
}

function changecolor() {
  let color = randomColor();
  h.style.color = color;
}

setInterval(changecolor, 500);
