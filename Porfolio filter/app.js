(() => {
    const buttons = document.querySelectorAll('.btn')
    const storeImages = document.querySelectorAll('.store-item')

    for(let button of buttons){
        button.addEventListener('click',(e) =>{
            e.preventDefault();
            const filter = e.target.dataset.filter

            for(let item of storeImages){
                if(filter === 'all'){
                    item.style.display = 'block'
                } else{
                    if(item.classList.contains(filter)){
                        item.style.display = 'block'
                    } else{
                        item.style.display = 'none'
                    }
                }
            }
        })
    }
}) ();