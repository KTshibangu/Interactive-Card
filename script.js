const cardNumberEl = document.getElementById('card-number-el');
const cardHolderEl = document.getElementById('card-holder-el');
const dateEl = document.getElementById('date-el');
const cicEl = document.getElementById('cic-el');

const submitBtn = document.getElementById('submit-btn');
const continueBtn = document.getElementById('continue-btn');

const invalidName = document.getElementById('invalid-name');
const invalidNumber = document.getElementById('invalid-number');
const invalidMonth = document.getElementById('invalid-month');
const invalidYear = document.getElementById('invalid-year');
const invalidCvc = document.getElementById('invalid-cvc');

const spaceEl = document.querySelector('.space');

function validateName(cardName) {
    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    return nameRegex.test(cardName);
}

function validateNumber(cardNumber) {
    const numberRegex = /^[0-9]+$/;
    return numberRegex.test(cardNumber);
}

function validateMonth(cardMonth){
    const numberRegex = /^\d{2}$/;
    return numberRegex.test(cardMonth);
} 

function validateYear(cardYear){
    const numberRegex = /^\d{2}$/;
    return numberRegex.test(cardYear);
} 

function validateCvc(cardCvc){
    const numberRegex = /^\d{3}$/;
    return numberRegex.test(cardCvc);
} 

submitBtn.addEventListener('click', (e) => {
    const cardName = document.getElementById('card-name').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const cardMonth = document.getElementById('card-month').value.trim();
    const cardYear = document.getElementById('card-year').value.trim();
    const cardCvc = document.getElementById('card-cvc').value.trim();
    e.preventDefault();

    document.querySelectorAll('.form-item').forEach(el => {
        el.classList.remove('error');
    })
    
    isValid = true;

    if(!validateName(cardName)) {
        invalidName.classList.add('error');
        document.querySelector('.card-name').classList.add('error');
        isValid = false;
    } else {
        invalidName.classList.remove('error');
        document.querySelector('.card-name').classList.remove('error');
    }

    if(!validateNumber(cardNumber)) {
        invalidNumber.classList.add('error');
        document.querySelector('.card-number').classList.add('error');
        isValid = false;
    } else {
        invalidNumber.classList.remove('error');
        document.querySelector('.card-number').classList.remove('error');
    }

    if(!validateMonth(cardMonth)) {
        invalidMonth.classList.add('error');
        document.querySelector('.card-month').classList.add('error');
        isValid = false;
    } else {
        invalidMonth.classList.remove('error');
        document.querySelector('.card-month').classList.remove('error');
    }

    if(!validateYear(cardYear)) {
        invalidYear.classList.add('error');
        document.querySelector('.card-year').classList.add('error');
        isValid = false;
    } else {
        invalidYear.classList.remove('error');
        document.querySelector('.card-year').classList.remove('error');
    }

    if(!validateCvc(cardCvc)) {
        invalidCvc.classList.add('error');
        document.querySelector('.card-cvc').classList.add('error');
        isValid = false;
    } else {
        invalidCvc.classList.remove('error');
        document.querySelector('.card-cvc').classList.remove('error');
    }

    if(isValid) {
        document.querySelector('.form').classList.add('complete');
        document.querySelector('.complete-form').classList.add('complete');

        cardHolderEl.innerHTML = cardName;
        cardNumberEl.innerHTML = cardNumber;
        dateEl.innerHTML = `${cardMonth}/${cardYear}`;
        cicEl.innerHTML = cardCvc;
    }
}) 


continueBtn.addEventListener('click', () => {
    document.querySelector('.form').reset();
    document.querySelector('.form').classList.remove('complete');
    document.querySelector('.complete-form').classList.remove('complete');
    cardHolderEl.innerHTML = 'Kevin Samuels';
    cardNumberEl.innerHTML = `0000 0000 0000 0000`;
    dateEl.innerHTML = '00/00';
    cicEl.innerHTML = '000';
})



