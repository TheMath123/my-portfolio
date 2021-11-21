let spanNumber = document.getElementById('number');
let count = 5; //contador

function changeNumber(){ // Altera número no contator
  spanNumber.innerHTML = `${count}`;
}

function redirect(){ // Redirecionamento
  window.location.href = "https://github.com/TheMath123";
}

changeNumber();

// Temporizador bem improvisado
setTimeout(()=>{
  console.log(count);
  changeNumber();
  count--;
}, 1000);
setTimeout(()=>{
  changeNumber();
  count--;
}, 2000);
setTimeout(()=>{
  changeNumber();
  count--;
}, 3000);
setTimeout(()=>{
  changeNumber();
  count--;
}, 4000);
setTimeout(()=>{
  changeNumber();
  count--;
}, 5000);
setTimeout(()=>{
  changeNumber();
  count--;
  redirect();
}, 6000);