( function(){
  
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    for(let btn of buttons){
        btn.addEventListener('click', (e)=>{
            let value = e.target.dataset.num;
            screen.value += value;
        })
    };

    equal.addEventListener('click', (e)=>{
        if (screen.value === ''){
            screen.value = "Please enter";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', (e)=>{
        screen.value = "";
    })
}) ();