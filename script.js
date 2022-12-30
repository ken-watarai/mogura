const score_span = document.getElementById("score");
let score = 0;

const message = document.getElementById("message");

const mogura1 = document.getElementById("mogura1");
const mogura2 = document.getElementById("mogura2");
const mogura3 = document.getElementById("mogura3");
const mogura4 = document.getElementById("mogura4");

const ary = [mogura1, mogura2, mogura3, mogura4];

function OnButtonClick1() { hit_mogura(mogura1) }
function OnButtonClick2() { hit_mogura(mogura2) }
function OnButtonClick3() { hit_mogura(mogura3) }
function OnButtonClick4() { hit_mogura(mogura4) }

function apper_mogura(mogura) {
  let random = Math.floor( Math.random() * ary.length );
  ary[random].classList.add("appear");
  ary.splice(random, 1);
  if (mogura != "") {ary.push(mogura)};
}

function hit_mogura(mogura) {
  mogura.classList.remove("appear");
  score += 100;
  score_span.innerText = score;
  if (score >= 100){
    message.classList.add("message_appear");
  } else {
    apper_mogura(mogura);
  }
}

function reload() {
  window.location.reload();
}

apper_mogura("");
