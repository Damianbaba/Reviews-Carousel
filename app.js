const data = [
    {
        img: "tara",
        name: "Tara",
        job: "London",
        text: "I have been having 1-2-1 yoga lessons with Kara for 6 months now. Kara is an inspiring, motivating yoga teacher. Her style is dynamic and energetic, and she carefully designs her classes to meet my goals, encouraging me to challenge myself and let go of my limiting beliefs around what my body can do. Indeed, Kara tells me 'flexible mind, flexible body' and I have felt myself shift both physically and mentally during the time that I have been working with her.",
    },
    {
        img: "emma",
        name: "Ela",
        job: "Poland",
        text: "Practice with Kara is very individual. She uses her fantastic knowledge of human body to tailored the way of getting fit to meet my needs. he has incredible memory of what we did  and what has to be touched and always pushes for more. Kara believes more in my abilities than I do and she is right! I love the way how she deconstructs asanas and makes me moving forward step by step. She is passionate and gentle the same time. I feel very comfortable and safe practicing on line. This allows me to safe a lot of time on commuting. Kara has fantastic sens of humour and I love the lightness of my practice with her. It's never the same, never boring.",
    },
    {
        img: "bill",
        name: "Celine",
        job: "Canada",
        text: "I highly recommend Kara. She is a dedicated and very professional massage therapist and yoga teacher. Her practice is advanced and therapeutic.",
    },
    {
        img: "emma",
        name: "Ania",
        job: "Poland",
        text: "I recommend Yoga with Kara to everyone. Simply because she can adjust the level to everyone, no matter how advance you are. Her passion and professionalism for Yoga turns out to be very contagious. I have been practicing yoga for many years with various teachers. Practising with Kara allowed me to discover a true approach to Yoga and brought me the best benefits so far in a fairly short time.Thanks to the practice with Kara, despite the fact I am getting older biologically, physically I feel better and fitter than 20 years ago. Namaste!",
    },
    {
        img: "emma",
        name: "Pam",
        job: "Thailand",
        text: "I have a private class with Kara. She comes to knock my door 2-3 times a week.  It’s super nice to start the day with her.  I have rheumatoid arthritis, yoga and stretching save my life. Also Kara. She helps me a lot, I really enjoy my time with her. She is always in a good mood, has Lots of energy and laughs. She puts emphasize on doing the asanas the correct way. She is patient and matches the lessons. She add some weight training exercises for me to build muscle (I lose a lot of muscle from avoiding to use the leg I have pain) As I’m a beginner i don’t know much about yoga but I can see my body stronger also my mind and I’m happy with my current progress.",
    },
    {
        img: "mik",
        name: "Aude",
        job: "France",
        text: "I struggled finding a guide with authentic and deep and solid yoga knowledge. Kara has all what looked for. She went deep enough in her own practice which makes me feel safe and inspired. Also she is very strong and offers a large range of possibilities, from slow Hatha to crazy had core sharp vinyasa. She is focused, generous and carrying. I highly recommend her.",
    }
];

const img = document.querySelector(".avatar");
const name = document.querySelector(".name");
const job = document.querySelector(".job");
const text = document.querySelector(".text");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let current = 0;

img.src = `img/${data[0].img}.png`;
name.textContent = `${data[0].name}`;
job.textContent = `${data[0].job}`;
text.textContent = `${data[0].text}`;

next.addEventListener('click', () => {
    current++;
    if (current >= data.length) {
        current = 0;
    }
    img.src = `img/${data[current].img}.png`;
    name.textContent = `${data[current].name}`;
    job.textContent = `${data[current].job}`;
    text.textContent = `${data[current].text}`;

});
prev.addEventListener('click', () => {
    current--;
    if (current < 0) {
        current = data.length - 1;
    }
    img.src = `img/${data[current].img}.png`;
    name.textContent = `${data[current].name}`;
    job.textContent = `${data[current].job}`;
    text.textContent = `${data[current].text}`;

});