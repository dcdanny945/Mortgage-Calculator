





// show result on below & right





// input $ amount
// input years
// input Rate

const form = document.querySelector(`form`);
const amount = document.querySelector(`#money-amount`);
const years = document.querySelector(`#years`);
const rate = document.querySelector(`#percentage`);
const rightCard = document.querySelector(`.right-card`);
// const calculationResult = document.querySelector(`.calculation-result`);
const monthlyPayment = document.querySelector(`.monthly-payment`);
const leftoverPayment = document.querySelector(`.leftover-payment`);
const clear = document.querySelector(`.clear`);








    function repayment(e){

        e.preventDefault();

        const calculationResult = document.querySelector(`.calculation-result`);
        // select Mortgage Type
        // const selectedType = document.querySelector(`input[name=mortgage-type]:checked`).value;


        let  userInput = true;

        if (!amount.value){       // 如果amout.value 空白字串為false 那這裡不是為true嗎?
            document.querySelector(`#money-amount-input-wrap .off`).classList.add(`error`);    //-input-wrap ????
            document.querySelector(`#money-amount-input-wrap .off`).classList.remove(`off`);
            
            userInput = false;
        }

        if(!years.value){                //if it's empety string, in JS sees as false
            document.querySelector(`#term-rate-input-wrap .off`).classList.add(`error`);
            document.querySelector(`#term-rate-input-wrap .off`).classList.remove(`off`);

            userInput = false;
        }

        if (!rate.value){ 

            document.querySelector(`#term-rate-input-wrap .percentage`).classList.add(`error`);
            document.querySelector(`#term-rate-input-wrap .percentage`).classList.remove(`off`);

            userInput = false;
        }

        const selectedTypeElement = document.querySelector(`input[name="mortgage-type"]:checked`);
        if (!document.querySelector(`input[name="mortgage-type"]:checked`)){

            document.querySelector(`.type .off`).classList.add(`error`);
            document.querySelector(`.type .off`).classList.remove(`off`);
            
            userInput = false;
        }
        console.log(document.querySelector(`.type .off`));


        // when all inputs are be filled 
        if (userInput){

        // when submit form change display on right card
        rightCard.classList.remove(`right-card`);
        rightCard.classList.add(`off`);
        // console.log(rightCard);
        calculationResult.classList.remove(`off`);




        // getting user input from $, rate , and term
        const dollorAmount = parseFloat (amount.value);
        const percentage = parseFloat (rate.value);
        const p = percentage / 100;

        // select Mortgage Type
        const selectedType = selectedTypeElement.value;

        // console.log(selectedType);
        


        


        if (selectedType === `interest`){

            const montlyInterest = parseFloat((p*dollorAmount)/12);
            console.log(`Interest only total is  $${montlyInterest} per month`);
            

            // changing text after user submit the form 
            monthlyPayment.innerHTML = `$${montlyInterest.toFixed(2)}`;

            // total repayment 
            const yearsInDebt= parseFloat(years.value);
            const r = p/12;
            const n = yearsInDebt*12;
            const m = ( dollorAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            const totalRepayment = (m*n);
            leftoverPayment.innerHTML = `$${totalRepayment.toFixed(2)}`;
        
        }else{
            
            const yearsInDebt= parseFloat(years.value);
            const r = p/12;
            const n = yearsInDebt*12;

            const m = ( dollorAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

            console.log(`Repayment total is $${m} per month`);

            const totalRepayment = (m*n);
            console.log(`Total repyment is $${totalRepayment.toFixed(2)}`);



            // changing text after user submit the form 
            monthlyPayment.innerHTML = `$${m.toFixed(2)} `;
            leftoverPayment.innerHTML = `$${totalRepayment.toFixed(2)}`;

        }


}
}


//  clear btm to reset all input 

function restForm(e){

    e.preventDefault()

    form.reset();

// bring back right card 
    rightCard.classList.remove(`off`);
    rightCard.classList.add(`right-card`);
    console.log(rightCard);
    calculationResult.classList.add(`off`);


}




// submit form
form.addEventListener(`submit`,repayment);

// clear btn be clicked
clear.addEventListener(`click`, restForm);