// step-1
document.getElementById('btn-submit').addEventListener('click',function() {
  const usermail = document.getElementById('user-mail').value;

  const pass = document.getElementById('pass').value;

  if (usermail ==='sontan@gmail.com' && pass === 'secret') {
    window.location.href = "bank.html";
  } else{
    'tejjo sontan';
  }
})
