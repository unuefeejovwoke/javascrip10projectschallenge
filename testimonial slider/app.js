( ()=> {
    const customerImage = document.querySelector("#customer-img")
    const customerName = document.querySelector("#customer-name")
    const customerText = document.querySelector("#customer-text")

    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img, name, text){
        this.img =img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text){
        let Img = `./images/${img}.jpg`
        let customer = new Customer(Img, name , text)

        customers.push(customer)
    }

    createCustomer(1, 'Shem', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem debitis accusantium animi nesciunt beatae iusto incidunt veniam vitae voluptates, officiis excepturi corrupti porro quia dolorem, alias sunt laboriosam quae!')
    createCustomer(2,'Mateen','Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from …')
    createCustomer(3, 'Ejoke','In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum m…')
    createCustomer(4, 'Sigma','Lorem ipsum dolor sit amet is a dummy text without any sense used to fill spaces in web design and publishing. Learn the origin, meaning and versions of this Latin …')

    for(let button of btn){
        button.addEventListener('click', (e) =>{
            if(e.target.parentElement.classList.contains('prevBtn')){
                if(index === 0){
                    index = customers.length
                }
                index --
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if(e.target.parentElement.classList.contains('nextBtn')){
                index ++
                if(index === customers.length){
                    index = 0 
                }
                
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    }
}) ();