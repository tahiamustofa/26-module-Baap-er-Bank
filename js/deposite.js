
// practice
// document.getElementById('btn-deposite').addEventListener('click',function() {
//   const newDepo = document.getElementById('deposite-felid').value;
//   const prevDepo=  document.getElementById('total-depo').innerText ;
// //   step=4
//   const  currentUpdateDepo =  parseFloat(prevDepo)  + parseFloat(newDepo);

//   document.getElementById('total-depo').innerText = currentUpdateDepo ;
  
// //   step-5
//   const balanceEle = document.getElementById('balanceEle');
//  const prevBalance= parseFloat(balanceEle.innerText);

// //  step-6
// const currentBalance = prevBalance + parseFloat(newDepo);
// balanceEle.innerText = currentBalance;



// //   step-7
// document.getElementById('deposite-felid').value= '';
// })

document.getElementById('btn-deposite').addEventListener('click',function() {
    const depositeFelid= document.getElementById('deposite-felid');
    const depositeFelidvalue = depositeFelid.value;

    // step 2
    const currentDepo = document.getElementById('total-depo');
    const currentDepovalue = currentDepo.innerText;

    currentDepo.innerText = parseFloat(currentDepovalue) + parseFloat(depositeFelidvalue);

    // step-3
    const balanceEle = document.getElementById('balanceEle');
    const currentBalance=balanceEle.innerText;
     
    
    balanceEle.innerText = parseFloat(depositeFelidvalue) + parseFloat(currentBalance);
    depositeFelid.value= '';
})