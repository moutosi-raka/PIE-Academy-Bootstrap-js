const reviews = [
  {
    id: 1,
    name: "susan smith 1",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
  {
    id: 2,
    name: "anna johnson 2",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
  },
  {
    id: 3,
    name: "peter jones 3 ",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 4,
    name: "bill anderson 4",
    job: "the boss",
    img: "images/student/student-4.png",
  },
  {
    id: 5,
    name: "bill anderson 5 ",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: 6,
    name: "bill anderson 6",
    job: "the boss",
    img: "images/student/student-2.png",
  },
  {
    id: 7,
    name: "bill anderson 7",
    job: "the boss",
    img: "images/student/student-1.png",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");

//select btn
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

const imagesContainer = document.getElementById("images-container");
const image = document.getElementById("image");

let firstIndex= 0;
let lastIndex = 4;
let sliceArray = reviews.slice(firstIndex, lastIndex);

let personShow = function()
{
  imagesContainer.innerHTML='';
  for (let i = 0; i < sliceArray.length; i++) {
    let clone = image.cloneNode(true);
    clone.querySelector('#person-img').src = sliceArray[i].img;
    clone.querySelector('#author').textContent = sliceArray[i].name;
    clone.querySelector('#job').textContent = sliceArray[i].job;
    imagesContainer.appendChild(clone)
  }
}
window.addEventListener("DOMContentLoaded",  personShow());


function printPerson()
{
  sliceArray = reviews.slice(firstIndex,lastIndex);
  personShow();
}


nextBtn.addEventListener('click', function()
{
 firstIndex++;
 lastIndex++;
 if(lastIndex<= reviews.length)
 {
  printPerson();
 }
 else{
  firstIndex=firstIndex-1;
  lastIndex=lastIndex-1;
 }

})
prevBtn.addEventListener('click', function()
{
 firstIndex--;
 lastIndex--;
 if(firstIndex >= 0 ){
  printPerson();
 }
else{
  firstIndex=0;
  lastIndex=4;
}
})

