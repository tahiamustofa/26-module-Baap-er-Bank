
document.getElementById('btn-deposite').addEventListener('click',function( ){
    const depositeFelid= document.getElementById('deposite-felid');
    const depositeFelidValue =  parseFloat(depositeFelid.value);

    // step-7
    depositeFelid.value = '';

    if (isNaN(depositeFelidValue)) {
        alert('please enter a number');
        return;
    }

    const totalDepo = document.getElementById('total-depo');
    const totalDepoValue = parseFloat(totalDepo.innerText);

 totalDepo.innerText = totalDepoValue + depositeFelidValue ;

 const balanceEle = document.getElementById('balanceEle');
 const balanceElePrev = parseFloat(balanceEle.innerText);


 balanceEle.innerText = balanceElePrev + depositeFelidValue;
 
})
