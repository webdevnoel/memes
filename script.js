// api = https://v2.jokeapi.dev/joke/Dark,Spooky
// https://official-joke-api.appspot.com/random_joke
let joke = {
    comedy : "",
    question : "" ,
    answer : "",
};
const btn = document.querySelector("#btn");
let meme = document.querySelector("#meme");
let meme2 = document.querySelector("#meme2");


async function jokeCaller() {
    // let response = await fetch("https://v2.jokeapi.dev/joke/Dark,Spooky")
    // response = await response.json(); 
    // joke.comedy = response.setup;
    // joke.reply = response.delivery;
    joke.comedy = await fetch("https://official-joke-api.appspot.com/random_joke")
    joke.comedy = await joke.comedy.json();
    joke.question = joke.comedy.setup;
    joke.answer = joke.comedy.punchline;
    console.log(joke.comedy);
    console.log(joke.question);
    console.log(joke.answer);
    meme.innerHTML = joke.question;
    meme2.innerHTML = joke.answer;
}


btn.addEventListener("click", () => {
    jokeCaller();
});


// jokeCaller();
