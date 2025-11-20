const questions = [
    { q: "Which animal is known as the fastest land animal?", options: ["Cheetah", "Lion", "Leopard", "Tiger"], answer: "Cheetah" },
    { q: "How many hearts does an octopus have?", options: ["1", "2", "3", "5"], answer: "3" },
    { q: "What is the largest living animal on Earth?", options: ["Blue Whale", "Elephant", "Giraffe", "Great White Shark"], answer: "Blue Whale" },
    { q: "Which bird is flightless?", options: ["Penguin", "Eagle", "Sparrow", "Parrot"], answer: "Penguin" },
    { q: "The only mammal capable of true flight is?", options: ["Bat", "Flying Squirrel", "Colugo", "Sugar Glider"], answer: "Bat" },
    { q: "What animal is famous for changing its color?", options: ["Chameleon", "Frog", "Snake", "Lizard"], answer: "Chameleon" },
    { q: "Which animal has black skin under its fur?", options: ["Polar Bear", "Panda", "White Tiger", "Sheep"], answer: "Polar Bear" },
    { q: "Which animal has the longest lifespan?", options: ["Bowhead Whale", "Elephant", "Tortoise", "Parrot"], answer: "Bowhead Whale" },
    { q: "Which animal can sleep while standing?", options: ["Horse", "Dog", "Cat", "Rabbit"], answer: "Horse" },
    { q: "What is the tallest land animal?", options: ["Giraffe", "Elephant", "Camel", "Okapi"], answer: "Giraffe" },
    { q: "Which animal has the strongest bite force?", options: ["Crocodile", "Tiger", "Hyena", "Shark"], answer: "Crocodile" },
    { q: "What endangered cat has only around 100 left in the wild?", options: ["Amur Leopard", "Cheetah", "Jaguar", "Snow Leopard"], answer: "Amur Leopard" },
    { q: "Which animal can live without water the longest?", options: ["Camel", "Kangaroo Rat", "Elephant", "Fennec Fox"], answer: "Kangaroo Rat" },
    { q: "The Komodo Dragon is a type of?", options: ["Lizard", "Snake", "Crocodile", "Turtle"], answer: "Lizard" },
    { q: "Which creature has 3 hearts?", options: ["Octopus", "Shark", "Starfish", "Jellyfish"], answer: "Octopus" },
    { q: "Which animal is known as the ‘Ship of the Desert’?", options: ["Camel", "Donkey", "Horse", "Yak"], answer: "Camel" },
    { q: "What do pandas mainly eat?", options: ["Bamboo", "Meat", "Leaves", "Fish"], answer: "Bamboo" },
    { q: "What is the largest species of big cat?", options: ["Tiger", "Lion", "Jaguar", "Leopard"], answer: "Tiger" },
    { q: "Which bird can run faster than a horse?", options: ["Ostrich", "Emu", "Cassowary", "Rhea"], answer: "Ostrich" },
    { q: "Which animal has fingerprints almost identical to humans?", options: ["Koala", "Gorilla", "Chimpanzee", "Sloth"], answer: "Koala" },
];

let current = 0;
let score = 0;

function showQuestion() {
    const q = questions[current];
    document.getElementById("question").textContent = q.q;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.className = "option-btn";
        btn.onclick = () => checkAnswer(opt);
        optionsDiv.appendChild(btn);
    });

    document.getElementById("result").textContent = "";
    document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer(selected) {
    const allBtns = document.querySelectorAll(".option-btn");

  
    allBtns.forEach(btn => (btn.disabled = true));

    if (selected === questions[current].answer) {
        score++;
        document.getElementById("result").textContent = "Correct! ✔️";
    } else {
        document.getElementById("result").textContent = "Wrong ❌";
    }

    document.getElementById("nextBtn").style.display = "block";
}

function nextQuestion() {
    current++;

    if (current >= questions.length) {
        document.querySelector(".quiz-container").innerHTML =
            `<h2>Your Score: ${score}/${questions.length}</h2>`;
        return;
    }

    showQuestion();
}

showQuestion();
