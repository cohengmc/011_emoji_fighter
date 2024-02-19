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

function newFighters() {
    let random1 = Math.floor(Math.random() * 20)
    let random2 = Math.floor(Math.random() * 20)

    fighterEl.textContent = creatureEmojis[random1] + " vs " + creatureEmojis[random2]
}