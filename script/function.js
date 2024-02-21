/* For calculate discount of coupon card */

function calculateDiscount() {
    const inputFieldId = document.getElementById('input-field');
    const inputFieldText = inputFieldId.value;


    /* check the 15% cupon code */

    if (inputFieldText == 'NEW15') {
        //const perSeatAmountId=document.getElementById('per-seat-tk');
        //const perSeatAmount=perSeatAmountId.innerText;
        const discount = (550 * 4) * (15 / 100);
        const newDiscount = parseInt(discount);
        //console.log(discount)
        const totalAmountId = document.getElementById('cupon-dis');
        //const totalAmount=totalAmountId.innerText;
        //display the grand total after discount
        totalAmountId.innerText = newDiscount;



        //display the coupon code in the html file
        //get id for coupon code
        const cuponCodeId = document.getElementById('cupon-code');
        cuponCodeId.innerText = inputFieldText;

        //get discount coupon code id and show the coupon code
        const couponId = document.getElementById('dis-num');
        couponId.innerText = '15%';





    }

    //check the 20% cupon code

    else if (inputFieldText == 'Couple 20') {
        //const perSeatAmountId=document.getElementById('per-seat-tk');
        //const perSeatAmount=perSeatAmountId.innerText;
        const discount = (550 * 4) * (20 / 100);
        const newDiscount = parseInt(discount);
        //console.log(discount)
        const totalAmountId = document.getElementById('cupon-dis');
        //const totalAmount=totalAmountId.innerText;
        //display the grand total after discount
        totalAmountId.innerText = newDiscount;



        //display the coupon code in the html file
        //get id for coupon code
        const cuponCodeId = document.getElementById('cupon-code');
        cuponCodeId.innerText = inputFieldText;

        //get discount coupon code id and show the coupon code
        const couponId = document.getElementById('dis-num');
        couponId.innerText = '20%';





    }
    else {
        console.log('please enter the valid cupon')
    }

    const inputDiv = document.getElementById('input-div');
    inputDiv.style.display = 'none';



}


