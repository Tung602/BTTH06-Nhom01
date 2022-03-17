// ============== Get element ==============

let createButton = document.querySelector(".create-button");
let array = document.querySelector("#array");
let sortedArray = document.querySelector("#sorted-array");
let increaseSort = document.querySelector("#increase-sort");
let decreaseSort = document.querySelector("#decrease-sort");
let index = document.querySelector("#add-index");
let value = document.querySelector("#add-value");
let isValid = document.querySelector("#isValid");
let addButton = document.querySelector(".add-button");
let arrayHTML = [];

let randomNumber = () => {
  while (true) {
    let num = Math.floor(Math.random() * 101);
    if (num >= 10) return num;
  }
};

let sortArray = () => {
  let copyArrayHTML = [...arrayHTML];
  if (increaseSort.checked)
    sortedArray.value = copyArrayHTML.sort((a, b) => a - b).join(", ");
  if (decreaseSort.checked)
    sortedArray.value = copyArrayHTML.sort((a, b) => b - a).join(", ");
};

// ============== generate random array ==============

createButton.addEventListener("click", (e) => {
  let arrayLength = Math.floor(Math.random() * 11) + 10;
  arrayHTML = [];
  for (let i = 0; i < arrayLength; i++) {
    arrayHTML.push(randomNumber());
  }
  array.innerHTML = arrayHTML.join(", ");
  sortArray();
});

// ============== Sort array ==============

increaseSort.addEventListener("change", (e) => {
  let copyArrayHTML = [...arrayHTML];
  sortedArray.value = copyArrayHTML.sort((a, b) => a - b).join(", ");
});
decreaseSort.addEventListener("change", (e) => {
  let copyArrayHTML = [...arrayHTML];
  sortedArray.value = copyArrayHTML.sort((a, b) => b - a).join(", ");
});

// ============== Add number ==============

addButton.addEventListener("click", (e) => {
  let arrayIndex = index.value;
  let arrayValue = value.value;
  if (arrayIndex == "" || arrayValue == "") {
    isValid.style.color = "red";
    isValid.textContent = "Nhập vị trí và giá trị cần thêm!";
  } else if (
    isNaN(arrayIndex) ||
    isNaN(arrayValue) ||
    arrayIndex <= 0 ||
    arrayIndex > 20 ||
    arrayValue < 10 ||
    arrayValue > 100
  ) {
    isValid.style.color = "red";
    isValid.textContent = "Giá trị không hợp lệ!";
  } else {
    if (arrayHTML.length === 20) arrayHTML.pop();
    if (arrayIndex > arrayHTML.length + 1) {
      arrayIndex = arrayHTML.length + 1;
      isValid.style.color = "#FFAA46";
      isValid.textContent = `Vị trí bạn nhập vượt quá độ dài của mảng. Tự động thêm giá trị vào cuối.`;
    } else {
      isValid.style.color = "green";
      isValid.textContent = `Thêm thành công ${arrayValue} vào vị trí ${arrayIndex}.`;
    }
    arrayHTML.splice(arrayIndex - 1, 0, arrayValue);
    array.innerHTML = arrayHTML.join(", ");
    sortArray();
  }
});

// =============== Clock ================

let hourHand1 = document.querySelector("#hour-hand1");
let hourHand2 = document.querySelector("#hour-hand2");
let minuteHand1 = document.querySelector("#minute-hand1");
let minuteHand2 = document.querySelector("#minute-hand2");
let secondHand1 = document.querySelector("#second-hand1");
let secondHand2 = document.querySelector("#second-hand2");
let greating = document.querySelector(".clock-greating");
let clock = document.querySelector(".clock-time");
let setTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hourHand1.src = `./assets/images/0${Math.floor(hours / 10)}.gif`;
  hourHand2.src = `./assets/images/0${hours % 10}.gif`;
  minuteHand1.src = `./assets/images/0${Math.floor(minutes / 10)}.gif`;
  minuteHand2.src = `./assets/images/0${minutes % 10}.gif`;
  secondHand1.src = `./assets/images/0${Math.floor(seconds / 10)}.gif`;
  secondHand2.src = `./assets/images/0${seconds % 10}.gif`;
  if (hours >= 0 && hours < 12) {
    greating.textContent = "Chào buổi sáng";
  } else if (hours >= 12 && hours < 17) {
    greating.textContent = "Chào buổi chiều";
  } else {
    greating.textContent = "Chào buổi tối";
  }
};
clock.addEventListener("click", e => {
  greating.classList.add("blink");
})
greating.addEventListener("click", e => {
  e.target.classList.add("blink");
})
window.onload = () => {
  setInterval(setTime, 1000);
};
