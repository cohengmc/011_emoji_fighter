// Fighters chosen by CHATGPT
let creatureEmojis = [
    "🐬", // Dolphin
    "🐘", // Elephant
    "🐢", // Turtle
    "🦄", // Unicorn
    "🦔", // Hedgehog
    "🦒", // Giraffe
    "🦓", // Zebra
    "🐧", // Penguin
    "🐝", // Bee
    "🐞", // Ladybug
    "🦋", // Butterfly
    "🦥", // Sloth
    "🐙", // Octopus
    "🦀", // Crab
    "🐍", // Snake
    "🦎", // Lizard
    "🦖", // T-Rex
    "🐊", // Crocodile
    "🦕", // Sauropod
    "🦑" // Squid
];

let fighterEl = document.querySelector("#fighters")
let usernameEl = document.querySelector("#username")
let creditsEl = document.querySelector("#credits")

const player = {
    username: "geotank",
    credits: 12
}

creditsEl.textContent = player.credits
usernameEl.textContent = player.username

function newFighters() {
    if (player.credits > 0) {
        player.credits--
        let random1 = Math.floor(Math.random() * 20)
        let random2 = Math.floor(Math.random() * 20)

        fighterEl.textContent = creatureEmojis[random1] + " vs " + creatureEmojis[random2]
        creditsEl.textContent = player.credits
    }
}