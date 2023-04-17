const displayJoke = document.querySelector('.displayJoke');
const randomJokeButton = document.querySelector('.randomJokeButton');

class JokeGenerator {
    constructor(url) {
        this.url = url;
    }

async getJoke(category) {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
            const data = await response.json();
            return `Question: ${data.setup} Answer:${data.punchline}`;

        } catch (error) {
            console.error(error);
        }
    }
}
const gettingJoke = new JokeGenerator();

randomJokeButton.addEventListener('click', async function() {
    const joke = await gettingJoke.getJoke();
    displayJoke.textContent = joke;
})