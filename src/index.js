const init = () => {
    const inputForm = document.querySelector('form')

    inputForm.addEventListener('submit',(e) => {
        e.preventDefault();
    const input = document.querySelector('input#searchByID')
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then((res) => res.json())
    .then((data=> {
        const title = document.querySelector('#movieDetails h4')
        const description = document.querySelector('#movieDetails p')

        title.textContent = data.title;
        description.textContent = data.summary;
    })
     )
    })}
  


document.addEventListener('DOMContentLoaded', init);