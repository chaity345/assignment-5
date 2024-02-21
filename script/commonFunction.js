//function for seat button click




// function logButtonClick(event) {
//    const buttonText= event.target.innerText;
//   // console.log(buttonText)
//  const currentScore=event.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes
//  console.log(currentScore)




//}

///get the all button by same class name

const allBtn = document.getElementsByClassName('all-btn');
//console.log(allBtn)
let count = 0;
let sum=0;

for (const btn of allBtn) {
    let click = 0;
    
    btn.addEventListener('click', function (e) {
        click = click + 1;


        btn.classList.add('bg-lime-500');
        count = count + 1;
        //set the count 
        const seatNum = document.getElementById('seat-count');
        let seat = seatNum.innerText = count;
        seatNum.classList.add('bg-lime-500', 'btn', 'text-white')

        //remove background if double clicked on a button
        if (click == 2) {
            btn.classList.remove('bg-lime-500');
        }

        if (click >= 2) {

            const seatNum = document.getElementById('seat-count');
            const update = seatNum.innerText = seat - 2;
            seatNum.innerText = update;
            //count -- because we have to reduce also the count number
            count--;



        }
        
        // total seat reduced if seat clicked
        const totalSeat = document.getElementById('current-seat');
        const SeatText = totalSeat.innerText;
        const seatInt = parseInt(SeatText);
        const remainSeat = seatInt - 1;
        /* set the current seat number */
        totalSeat.innerText = remainSeat;
        

        if (remainSeat == 0) {
            console.log(" Seat is not available Now");
        }
        //if double click on same seat then seat don't reduced;
        if (click >1 ) {
            const update = remainSeat + 1;
            totalSeat.innerText = update;
        }
        if (count == 4 && click <= 1) {
            const button = document.getElementById('apply-btn');
            //remove the disable attribute
            //enable the button
            button.removeAttribute('disabled')
            console.log('You select 4 seat, we have a cupon for you')
        }
        if (count > 4) {
            const button = document.getElementById('apply-btn');
            /* enable the disable button */
            button.disabled = true;

        }






        if (click == 1) {
            //append the click one selected button
            const containerId = document.getElementById('add-container');
            //create a div
            //const div=document.createElement('div');
            //containerId.appendChild(div);


            const p = document.createElement('p');
            p.innerText = e.target.innerText;

            //get the id of container

            //div.appendChild(p);
            containerId.appendChild(p)



            const pr = document.createElement('p')

            pr.innerText = 'Economy';
            //div.appendChild(pr);
            containerId.appendChild(pr)
            prr = document.createElement('p')

            prr.innerText = 550;
            //div.appendChild(prr);

            containerId.appendChild(prr);
            

        }
        

        //total price count and get the id
        const priceId=document.getElementById('price');
        //const priceText=priceId.innerText;
        //const priceInteger=parseInt(priceText);
         sum= sum+550;
        priceId.innerText=sum;





        
        













    });
    






}
//SCROLL DOWN TOP TO DOWN
const fromDiv=document.getElementById('buy-button');
const toDiv=document.getElementById('ticket-div');
//Add a score event listener formDiv to toDiv

fromDiv.addEventListener('scroll',function(){
    toDiv.scrollTop=fromDiv.scrollTop;
});

function scrollActive(){
    const toDiv=document.getElementById('ticket-div');
    toDiv.scrollIntoView({behavior:'smooth'});
}
