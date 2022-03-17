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
    if (arrayIndex > arrayHTML.length+1) {
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
