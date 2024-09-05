document.getElementById('btn-withdraw').addEventListener('click',function( ) {
  const withdrawFeild = document.getElementById('withdrawFeild');
  const withdrawFeildValue = parseFloat(withdrawFeild.value);

 
  withdrawFeild.value='';

  if (isNaN (withdrawFeildValue)) {
    alert('pls type a Number');
    return;
  }

  const totalWithdraw= document.getElementById('totalWithdraw');
  const totalWithdrawValue = parseFloat(totalWithdraw.innerText);


  const balanceEle= document.getElementById('balanceEle');
  const balanceElePrev = parseFloat(balanceEle.innerText);

  if (withdrawFeildValue>balanceElePrev) {
    alert('etu taka nai')
    return;
  }

  totalWithdraw.innerText = totalWithdrawValue+withdrawFeildValue;

balanceEle.innerText = balanceElePrev - withdrawFeildValue;
})