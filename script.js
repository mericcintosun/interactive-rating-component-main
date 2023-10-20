const rateOne = document.getElementById("number-1");
const rateTwo = document.getElementById("number-2");
const rateThree = document.getElementById("number-3");
const rateFour = document.getElementById("number-4");
const rateFive = document.getElementById("number-5");

const numberCount = document.querySelector(".number");
const buttonElement = document.querySelector(".submit-button");


function numberClick(num1, num2, num3, num4, num5) {
  if (num1.classList == "number") {
    num1.classList.add("color-orange");
    num2.classList.remove('color-orange');
    num3.classList.remove('color-orange');
    num4.classList.remove('color-orange');
    num5.classList.remove('color-orange');
  } else if (num2.classList == "number") {
    num2.classList.add("color-orange");
    num1.classList.remove('color-orange');
    num3.classList.remove('color-orange');
    num4.classList.remove('color-orange');
    num5.classList.remove('color-orange');
  }
  else if (num3.classList == "number") {
    num3.classList.add("color-orange");
    num1.classList.remove('color-orange');
    num2.classList.remove('color-orange');
    num4.classList.remove('color-orange');
    num5.classList.remove('color-orange');
  }
  else if (num4.classList == "number") {
    num4.classList.add("color-orange");
    num1.classList.remove('color-orange');
    num2.classList.remove('color-orange');
    num3.classList.remove('color-orange');
    num5.classList.remove('color-orange');
  }
  else if (num5.classList == "number") {
    num5.classList.add("color-orange");
    num1.classList.remove('color-orange');
    num2.classList.remove('color-orange');
    num3.classList.remove('color-orange');
    num4.classList.remove('color-orange');
  }
}

// function button (number) {
//   document.querySelector('.result-paragraph').innerHTML = `You selected ${number}`;
// }

function castVote(vote) {
  localStorage.setItem('userVote' , vote);
}

function submitFunction() {
  window.location.href = 'thanks.html';
}



