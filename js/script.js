const submitBtn = document.querySelector('.form-submit')
const percentage = document.querySelector('.percentage')
const earned = document.querySelector('.earned')
const moneyLeft = document.querySelector('.money-left')
const peopleDonated = document.querySelector('.people-donated')
const amounts = document.querySelectorAll('.amount')
const number = document.querySelector('.amount-number')
const anonymous = document.querySelector('.anonymous')
const nameSurename = document.querySelector('.surename')
const customAmount = document.querySelector('.custom-amount')
const overallMoney = document.querySelector('.overall-money')
const goalLine = document.querySelector('.goal-line')
anonymous.addEventListener('change', ()=>{
    if(anonymous.checked){
        nameSurename.disabled = true;
    }else{
        nameSurename.disabled = false;
    }
})

amounts.forEach(item => {
    item.addEventListener('click', (e) => {
        amounts.forEach(item => {
            item.classList.remove('active')
        })
        e.target.classList.add('active')
        if(e.target.textContent != "Inna kwota"){
            customAmount.style.display = 'none'
        }else{
            customAmount.style.display = 'flex'
        }
    })
})

submitBtn.addEventListener('click', ()=>{
    const actualAmount = document.querySelector('.amount.active')
    let value
    let earnedAmount = parseInt(earned.textContent)
    console.log(earnedAmount);
    let neededAmount = parseInt(moneyLeft.textContent)
    let entireAmount = parseInt(overallMoney.textContent)
    let peopleAmount = parseInt(peopleDonated.textContent)
    if(actualAmount.textContent == "Inna kwota"){
        value = parseInt(number.value)
    }else{
        value = parseInt(actualAmount.dataset.price)
    }
    peopleAmount += 1 
    earnedAmount += value
    neededAmount -= value
    let percentageAmount = Math.floor((earnedAmount / entireAmount) * 100)

    console.log(peopleAmount);
    console.log(earnedAmount);
    console.log(neededAmount);
    earned.textContent = `${earnedAmount} zł`
    moneyLeft.textContent = `${neededAmount} zł`
    goalLine.innerHTML = `.goal-line::before { width: ${percentageAmount}%; }`
    peopleDonated.textContent = peopleAmount
    percentage.textContent = `${percentageAmount}%`
})