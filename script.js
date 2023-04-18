class JokeGenerator {
    constructor(url) {
        this.url = url;
    }

async getJoke(category) {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
            const data = await response.json();
            console.log(data);
            return data;
            // const result = `Question: ${data.setup}\nAnswer: ${data.punchline} `
            // return result;
        } catch (error) {
            console.error(error);
        }
    }
}


const gettingJoke = new JokeGenerator();
const randomJokeButton = document.querySelector('.randomJokeButton');
const endJokeButton = document.querySelector('.endJokeButton');
const displayJoke = document.querySelector('.displayJoke');
const startJoke = document.querySelector('.startJoke');
const endJoke = document.querySelector('.endJoke');

endJokeButton.style.display = "none";

let currentJoke;


randomJokeButton.addEventListener('click', async function() {
    const joke = await gettingJoke.getJoke();
    startJoke.textContent = joke.setup;
    currentJoke = joke.setup;
    endJoke.textContent = '';
    endJokeButton.style.display = 'block';
    // displayJoke.innerHTML = joke.replace('\n', '<br>');
    endJokeButton.addEventListener('click', async function() {
        if (currentJoke) {
            endJoke.textContent = joke.punchline;
        }
    });
})
