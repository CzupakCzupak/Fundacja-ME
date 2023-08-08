const submitBtn = document.querySelector(".form-submit");
const percentage = document.querySelector(".percentage");
const earned = document.querySelector(".earned");
const moneyLeft = document.querySelector(".money-left");
const peopleDonated = document.querySelector(".people-donated");
const amounts = document.querySelectorAll(".amount");
const number = document.querySelector(".amount-number");
const anonymous = document.querySelector(".actual-checkbox.anonymous");
const nameSurename = document.querySelector(".surename");
const customAmount = document.querySelector(".custom-amount");
const overallMoney = document.querySelector(".overall-money");
const goalLine = document.querySelector(".actual-line");
const needed = document.querySelector(".needed");
const email = document.querySelector("#email");
const invalidEmail = document.querySelector(".invalid-feedback.email");
const invalidAmount = document.querySelector(".invalid-feedback.amount-feedback");
const termsofservice = document.querySelector("#termsofservice");
const invalidTerms = document.querySelector(".terms");
anonymous.addEventListener("click", () => {
  if (anonymous.classList.contains("checked")) {
    nameSurename.disabled = false;
  } else {
    nameSurename.disabled = true;
  }
});

amounts.forEach((item) => {
  item.addEventListener("click", (e) => {
    amounts.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.innerHTML != "Inna&nbsp;kwota") {
      slideUp(customAmount);
      // customAmount.style.display = 'none'
    } else {
      slideDown(customAmount);
      // customAmount.style.display = 'flex'
    }
  });
});

submitBtn.addEventListener("click", () => {
  number.classList.remove("red-border");
  invalidAmount.classList.remove("active");
  invalidTerms.classList.remove("active");
  termsofservice.classList.remove("red-border");
  email.classList.remove("red-border");
  invalidEmail.classList.remove("active");
  let flag = 0;
  if (!termsofservice.checked) {
    invalidTerms.classList.add("active");
    termsofservice.classList.add("red-border");
    flag += 1;
  }
  const actualAmount = document.querySelector(".amount.active");
  let value;
  let earnedAmount = parseInt(earned.textContent);
  let emailValue = email.value;
  let numberValue = number.value;
  let neededAmount = parseInt(moneyLeft.textContent);
  let entireAmount = parseInt(overallMoney.textContent);
  let peopleAmount = parseInt(peopleDonated.textContent);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };
  console.log(validateEmail(emailValue));
  if (!validateEmail(emailValue)) {
    email.classList.add("red-border");
    invalidEmail.classList.add("active");
    flag += 1;
  }
  if (actualAmount.innerHTML == "Inna&nbsp;kwota") {
    if (numberValue == "" || numberValue == "0" || /^-\d+$/.test(numberValue)) {
      number.classList.add("red-border");
      invalidAmount.classList.add("active");
      flag += 1;
    } else {
      value = parseInt(number.value);
    }
  } else {
    value = parseInt(actualAmount.dataset.price);
  }
  if (flag == 0) {
    peopleAmount += 1;
    earnedAmount += value;
    neededAmount -= value;
    let percentageAmount = Math.floor((earnedAmount / entireAmount) * 100);
    if (earnedAmount >= entireAmount) {
      needed.style.display = `none`;
      goalLine.style.width = `100%`;
    } else {
      moneyLeft.textContent = `${neededAmount} zł`;
      goalLine.style.width = `${percentageAmount}%`;
    }
    peopleDonated.textContent = peopleAmount;
    percentage.textContent = `${percentageAmount}%`;
    earned.textContent = `${earnedAmount} zł`;
  }
});

let slideUp = (target, duration = 300) => {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

let slideDown = (target, duration = 300) => {
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "block";
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

const allChecks = document.querySelectorAll(".actual-checkbox");
allChecks.forEach((item) => {
  item.addEventListener("click", (e) => {
    const ParentEl = e.target.closest(".gap-13");
    const currentCheck = ParentEl.querySelector(".actual-checkbox");
    const checkbox = ParentEl.querySelector("input[type=checkbox]");
    currentCheck.classList.toggle("checked");
    if (currentCheck.classList.contains("checked")) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  });
});
