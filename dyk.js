let facts = [
    "Polar bears can swim for days without resting.",
    "A tiger’s roar can be heard from 3 km away.",
    "Cheetahs can accelerate faster than most sports cars.",
    "Blue whales have hearts the size of a small car.",
    "Elephants can recognize themselves in mirrors.",
    "Amur leopards are one of the rarest big cats in the world.",
    "Penguins can drink seawater safely.",
    "Javan rhinos live only in one single forest on Earth.",
    "Orangutans share 97% of their DNA with humans.",
    "A hummingbird’s heart beats more than 1,000 times per minute.",
    "Owls can rotate their heads 270 degrees.",
    "Snow leopards cannot roar.",
    "Dolphins give each other names using whistles.",
    "A group of flamingos is called a flamboyance.",
    "African elephants are the largest land animals.",
    "Koalas sleep up to 20 hours a day.",
    "Sharks are older than trees.",
    "Gorillas catch human illnesses like the flu.",
    "Octopuses have three hearts.",
    "Frogs can freeze themselves and survive."
];

let index = 0;

function showNextFact() {
    document.getElementById("fact-text").textContent = facts[index];
    index++;

    if (index >= facts.length) {
        index = 0; 
    }
}
