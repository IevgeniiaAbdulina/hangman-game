export const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export const quizData = [
    {
        question: 'What do you call a baby cat?',
        answer: 'Kitten'
    },
    {
        question: 'Which animal is known for its long neck?',
        answer: 'Giraffe'
    },
    {
        question: 'What do bees make?',
        answer: 'Honey'
    },
    {
        question: 'What’s a group of lions called?',
        answer: 'Pride'
    },
    {
        question: 'Which animal is famous for its slow pace?',
        answer: 'Sloth'
    },
    {
        question: 'What do you call a baby dog?',
        answer: 'Puppy'
    },
    {
        question: 'Which animal has a pouch for its young?',
        answer: 'Kangaroo'
    },
    {
        question: 'What is the largest mammal in the ocean?',
        answer: 'Whale'
    },
    {
        question: 'What do you call a female deer?',
        answer: 'Doe'
    },
    {
        question: 'Which bird can mimic human speech?',
        answer: 'Parrot'
    },
    {
        question: 'What is the fastest land animal?',
        answer: 'Cheetah'
    },
    {
        question: 'What do you call a baby sheep?',
        answer: 'Lamb'
    },
    {
        question: 'Which animal has stripes and roars?',
        answer: 'Tiger'
    },
    {
        question: 'What do turtles carry on their back?',
        answer: 'Shell'
    },
    {
        question: 'What’s the largest land animal?',
        answer: 'Elephant'
    },
    {
        question: 'Which insect is known for its ability to lift many times its weight?',
        answer: 'Ant'
    },
    {
        question: 'Which animal is often associated with wisdom in folklore?',
        answer: 'Owl'
    },
    {
        question: 'What’s a common pet that purrs?',
        answer: 'Cat'
    },
    {
        question: 'Which animal can regrow its limbs?',
        answer: 'Axolotl'
    },
    {
        question: 'What type of bear loves honey?',
        answer: 'Panda'
    },
    {
        question: 'Which flying mammal uses echolocation?',
        answer: 'Bat'
    },
    {
        question: 'What’s the only bird that can’t fly?',
        answer: 'Ostrich'
    },
    {
        question: 'What do you call a male horse?',
        answer: 'Stallion'
    },
    {
        question: 'What’s the largest rodent in the world?',
        answer: 'Capybara'
    },
    {
        question: 'Which sea creature has tentacles and ink for defense?',
        answer: 'Squid'
    },
    {
        question: 'What’s an animal that can live both in water and on land called?',
        answer: 'Amphibian'
    },
    {
        question: 'Which reptile is known for changing colors to blend in with its surroundings?',
        answer: 'Chameleon'
    },
    {
        question: 'What’s the name of the large, flightless bird native to Australia?',
        answer: 'Emu'
    },
    {
        question: 'What’s an animal known for building dams in rivers?',
        answer: 'Beaver'
    },
    {
        question: 'What’s the name of the furry animal that likes to collect shiny objects?',
        answer: 'Magpie'
    },
    {
        question: 'What’s an aquatic mammal that barks and has whiskers?',
        answer: 'Seal'
    },
    {
        question: 'What\'s an animal known for having long ears and hopping around?',
        answer: 'Rabbit'
    },
    {
        question: 'What’s an insect that spins silk to make webs?',
        answer: 'Spider'
    },
    {
        question: 'What animal is known as man’s best friend?',
        answer: 'Dog'
    },
    {
        question: 'What do you call a group of wolves?',
        answer: 'Pack'
    },
    {
        question: 'Which creature has scales and lives in water?',
        answer: 'Fish'
    },
    {
        question: 'What’s an animal that loves to roll in mud?',
        answer: 'Pig'
    },
    {
        question: 'What’s an insect known for its bright colors and fluttering wings?',
        answer: 'Butterfly'
    },
    {
        question: 'What small rodent is famous for storing food in its cheeks?',
        answer: 'Hamster'
    },
]

export const generateIndexes = () => {
    const questionsIndexes = [...Array(quizData.length).keys()];
    questionsIndexes.sort(() => Math.random() - 0.5);

    return questionsIndexes;
}

export const getUniqueQuestion = (index) => {
    const randomQuestion = quizData[index];
    const secretWord = randomQuestion.answer;
    console.log(`The secret word is: ${secretWord}`);

    return randomQuestion;
}
