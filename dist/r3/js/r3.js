const r3 = {
    w1: document.getElementById('w1'),
    w2: document.getElementById('w2'),
    w3: document.getElementById('w3'),
    w4: document.getElementById('w4'),
    btn_calc: document.querySelector('.bereken'),
    btn_wis: document.querySelector('.cancel'),

    deel:document.querySelector('.deel'),

    to_one:document.querySelector('.to-one'),


}

r3.btn_calc.addEventListener('click', (e) => {
    e.preventDefault();
    let tss=0;
    let res=0;
    let deel='';

    let a = r3.w1.value;
    let b = r3.w2.value;
    let c = r3.w3.value;
    let d = r3.w4.value;
  

    let w1 = (a == '') ? 0 : 1;
    let w2 = (b == '') ? 0 : 1;
    let w3 = (c == '') ? 0 : 1;
    let w4 = (d == '') ? 0 : 1;

    if ((w1 + w2 + w3 + w4) < 3) {
        console.log('Er moeten 3 waarden ingevuld worden!!')
    }else{
      a=(a == '')?1:a;
      b=(b == '')?1:b;
      c=(c == '')?1:c;
      d=(d == '')?1:d;
     
       deel=b +' : ' + a;
       tss=komma(b/a);
       res= komma((c*b)/a);
        
       r3.to_one.innerHTML=tss;
       r3.deel.innerHTML=deel;
       r3.w4.value=res;

     

    }

});

const komma=function(getal){
return(Math.round (getal*100) / 100)
}