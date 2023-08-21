const imageSlider = () =>{
    const images = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8'

    ]

    const buttons = document.querySelectorAll('.btn');
    const imgDiv = document.querySelector('.img-container');

    counter = 0;

    for(let button of buttons){
        button.addEventListener('click', (e) =>{
            if( button.classList.contains('btn-left')){
                counter--
                if(counter<0){
                    counter = images.length -1
                }
                imgDiv.style.background =`url('./images/${images[counter]}.jpg')`
            }

            if( button.classList.contains('btn-right')){
                counter++
                if(counter>images.length -1){
                    counter = 0
                }
                imgDiv.style.background =`url('./images/${images[counter]}.jpg')`
            }
        })
    }
}

imageSlider();