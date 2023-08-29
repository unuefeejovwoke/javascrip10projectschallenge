const accessKey = 'BSnxh0crNbRZ1ybSeMHESjB7EQe7DKrAtgDfwxqLxso'

const formEl = document.querySelector('form')
const inputEl = document.getElementById('search-input')
const searchResults = document.querySelector('.search-results')
const showMore = document.getElementById('show-more-button')

let inputData = ''
let page =2;

const searchImages = async ()=>{
    inputData = inputEl.value;
    const url = `https://unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const response = await fetch(url)
    const data = await response.json()
}