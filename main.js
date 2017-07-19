let searchBar = document.querySelector('#searchBar');
let submitButton = document.querySelector('#submitButton');
let searchResults = document.querySelector('.searchResults')

submitButton.addEventListener('click', function() {
  searchResults.innerHTML = ""
  fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?q=${searchBar.value}`)
    .then(function(response) {
      response.json().then(function(data) {
        // console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          searchResults.innerHTML += `
          <div class="result">
            <h3>${data.results[i].title}</h3>
            <a href="${data.results[i].href}"><img src="${data.results[i].thumbnail}"></a>
          </div>
          `
        } // belongs to first then
      }) // belong to function(data)
    }) // Belongs to .json().then
}) // Belongs to event listener





// fetch('https://api.github.com/users/showeimer', {mode:'cors'})
//   .then(function(response) {
//     console.log(response)
//     response.json().then(function(data) {
//     console.log(data)
//   })
// })

// fetch('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3', {mode:'no-cors'})
//   .then(function(response) {
//     console.log(response)
//     response.json().then(function(data) {
//     console.log(data)
//   })
// })
