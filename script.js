function generateRandomJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var joke = data.value;
    console.log("JOKE:", joke);
    const q = document.querySelector(".q");
    q.innerHTML= "";
    const h4 = document.createElement("h4");
    h4.classList.add("card-title");
    h4.classList.add("display-4");
    const jokeText = document.createTextNode(joke);
    h4.appendChild(jokeText);
    q.appendChild(h4);
  })
  .catch();
}


const btn = document.querySelector("#generate");
btn.addEventListener("click", () =>{
  generateRandomJoke();
})

const clr = document.querySelector("#clear");
clr.addEventListener("click", () => {
  const q = document.querySelector(".q");
  q.innerHTML= "";
  const h4 = document.createElement("h4");
  h4.classList.add("card-title");
  h4.classList.add("display-4");
  const jokeText = document.createTextNode("Joke will be generated here!");
  h4.appendChild(jokeText);
  q.appendChild(h4);


})
