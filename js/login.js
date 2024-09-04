// step-1
document.getElementById('btn-submit').addEventListener('click',function( ) {
    // console.log('submit info');
    // step-2
    // always remember to use .value to get text from input feild
    const mailField= document.getElementById('user-mail');
    const email =  mailField.value;
    // console.log(email);
    // step-3
    const passField = document.getElementById('pass');
    const pass= passField.value;
    // console.log(email,pass);

//     ---
      if (email=== 'sontan@gmail.com' && pass === 'secret') {
        window.location.href='bank.html';
      }
      else{
         alert('tejjoo shontan');
      }
})
