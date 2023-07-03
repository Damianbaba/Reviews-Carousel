const data = [
    {
        img: "david",
        name: "David",
        job: "web developer",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia perspiciatis expedita sit amet consectetur adipisicing ",
    },
    {
        img: "emma",
        name: "Emma",
        job: "Photographer",
        text: "Lorem ipsum dolor sit amet . Officia perspiciatis expedita sit amet consectetur adipisicing ",
    },
    {
        img: "bill",
        name: "Bill",
        job: "CGraphic designer",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia perspiciatis expedita sit amet consectetur adipisicing ",
    },
    {
        img: "mik",
        name: "Mikha",
        job: "Q&A testing",
        text: "Lorem ipsum dolor  consectetur adipisicing elit. Officia perspiciatis expedita sit amet consectetur adipisicing ",
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