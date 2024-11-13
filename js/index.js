
//   document.getElementById("buyTicket").addEventListener("click", function () {
//     const show = document.getElementById("show");
//     show.style.display = "block";
//     show.scrollIntoView({ behavior: "smooth", block: "start" });
//     //show.scrollIntoView();
//   });
   


//i can also do it by using onclick()
function sami(){
   const show = document.getElementById('show');
   show.style.display='block';
   show.scrollIntoView({ behavior: "smooth"});
}

// seats color and text
 let count = 0;
function seatColor(event){
const seat = document.getElementById(event);
seat.addEventListener('click',function(){
  count=count + 1;
  if(count>4){
  return('you can not select more');
  }
seat.style.backgroundColor='#1DD100';
seat.style.color='white';
this.disabled = true;

  const addSeatNames = document.getElementById('addSeatName');
  const ul = document.createElement('ul');
  ul.classList.add('flex','gap-[5.5rem]','mb-4');
  const li = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  li.innerText=event;
  li2.innerText='ECONOMY';
  li3.innerText='550';
  addSeatNames.appendChild(ul);
  ul.appendChild(li);
  ul.appendChild(li2);
  ul.appendChild(li3);


 let totalprice = 0;
 const price = parseInt(li3.innerText);
 const totalTaka = price * count;
  const totalPrices = document.getElementById('totalPrice');
  totalPrices.innerText=totalTaka;
  

    const reduceSeats = document.getElementById('reduce-seat');
    const seats = reduceSeats.innerText;
    const newSeatNumber = parseInt(seats);
    const newSeats = newSeatNumber - 1;
    reduceSeats.innerText=newSeats;
  
    const totalSeats = document.getElementById('seatCount');
    const seatSa = totalSeats.innerText;
    const newSeatNumbers = parseInt(seatSa);
    const newSeatSam = newSeatNumbers + 1;
    totalSeats.innerText=newSeatSam;
    if(count<4){
    return('can not select more');
    }

 });
};


const applyButton= document.getElementById('apply');
  applyButton.addEventListener('click',function(){
    const inputButton=document.getElementById('input-Button').value;
    const coupon = inputButton.split(' ').join('').toUpperCase();
    //const li3 = document.createElement('li');
    const price =550;        //add
    const count=4;           //add
    const totalTaka = price * count;
    
    if(count>=4){
      //applyButton.removeAttribute('disabled');
      
     if(coupon==='COUPLE20'){
    const discount = document.getElementById('discount');
    const discountValue = totalTaka * 0.15;
    discount.innerText=discountValue;
    const grandTotal= document.getElementById('grand-Total');
    grandTotal.innerText= totalTaka-discountValue;
    
    }
     else if(coupon==='NEW15'){
      const discount=document.getElementById('discount');
      const discountValue=totalTaka * 0.2;
      discount.innerText=discountValue;
      const grandTotal=document.getElementById('grand-Total');
      grandTotal.innerText=totalTaka-discountValue;
      
     }
     else{
      alert('invalid coupon');
     }
    }
    else{
      alert('2200 koros koran bhai');
    }
    
  })


seatColor('A3');
seatColor('A4');
seatColor('B1');
seatColor('B2');
seatColor('A2');
seatColor('B4');
seatColor('C1');
seatColor('C2');
seatColor('A1');
seatColor('C3');
seatColor('B3');
seatColor('C4');
seatColor('D1');
seatColor('D2');
seatColor('D3');
seatColor('D4');

const popup=document.getElementById('popup');
function openpopup(){
  popup.classList.add('scale-125');
  popup.classList.remove('hidden');
}
function closepopup(){
  popup.classList.remove('scale-125');
  popup.classList.add('hidden');
}