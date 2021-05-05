
const init = () => {
    const inputForm = document.querySelector('form')
    const input = document.querySelector('input#searchByID');
    const title = document.querySelector('#movieDetails h4')
    const details = document.querySelector('#movieDetails p')
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault()
        //console.log(event.target.children[1].value)
        //console.log(input.value)

        fetch(`http://localhost:3000/movies/${event.target.searchByID.value}`)
        .then(res => res.json())
        //.then(console.log)
        .then((movie) => {
            title.innerText = movie.title
            details.innerText = movie.summary})
    })
}

document.addEventListener('DOMContentLoaded', init);