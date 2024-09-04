document.getElementById('btn-withdraw').addEventListener('click',function ( ) {
  const withdrawFeild = document.getElementById('withdrawFeild').value;
  const withdrawFeildNumber = parseFloat(withdrawFeild);

//   step-2
const totalWithdraw = document.getElementById('totalWithdraw').innerText;
const totalWithdrawNum = parseFloat(totalWithdraw);

document.getElementById('totalWithdraw').innerText = totalWithdrawNum+withdrawFeildNumber;

// step-3
const balanceEle = document.getElementById('balanceEle');
const prevbalanceEle = parseFloat(balanceEle.innerText);

balanceEle.innerText = prevbalanceEle - withdrawFeildNumber;
// step-7
document.getElementById('withdrawFeild').value = '';

})
