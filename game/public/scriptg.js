// console.log("hi")
// const { JSDOM } = require('jsdom');
// const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
// const document = dom.window.document;

// const signInBtnLink = document.querySelector('.signInBtn-link');
// const signUpBtnLink = document.querySelector('.signUpBtn-link');

// const wrapper = document.querySelector('.wrapper');
// signUpBtnLink.addEventListener('click',()=>{
//     wrapper.classList.toggle('active');
// });

let img_change  = document.getElementById('img_change');
const change_img_data =()=>{
    setTimeout(()=>{
        img_change.style.background = " url('/game/public/images/ll.png') no-repeat center center/cover";
    },0000);

    setTimeout(()=>{
        img_change.style.background = " url('/game/public/images/lol4.jpg') no-repeat center center/cover";
    },3000);

    setTimeout(()=>{
        img_change.style.background = " url('/game/public/images/lol5.jpg') no-repeat center center/cover";
    },6000);
}

setInterval(change_img_data, 9000);
change_img_data();


let play = document.getElementById('play');
let video = document.getElementById('video');

play.addEventListener('click',()=>{
    if (video.paused || video.currentTime <= 0) {
        video.play();
        video.style.display = "flex";
        img_change.style.display = "none";
        play.innerHTML = '<i class="bi bi-pause-fill"></i>Pause'
    } else {
        video.pause();
        video.style.display = '';
        img_change.style.display = '';
        play.innerHTML = '<i class="bi bi-play-fill"></i>Play'
        
    }
});

video.addEventListener('ended',()=>{
    video.pause();
    video.style.display = '';
    img_change.style.display = '';
    play.innerHTML = '<i class="bi bi-play-fill"></i>Play'
        
});

const JoinData = [
    {
        name: "Gia Rozel",
        game:" Grand Theft Auto V",
        img:"/game/public/images/Gia.jpg",
        price:"$800"


    },

    {
        name: "Peter Clavin",
        game:"Sniper 2 Ghost warrior",
        img:"/game/public/images/peter.jpg",
        price:"$600"


    },

    {
        name: "Siman disuza",
        game:"War Face",
        img:"/game/public/images/simon.jpg",
        price:"$60"


    },

    {
        name: "Arya Milton",
        game:"Call of Duty Mobile",
        img:"/game/public/images/arya.jpg",
        price:"$550"


    },

    
    {
        name: "Ali Mahmood",
        game:"Bgmi",
        img:"/game/public/images/ali.jpg",
        price:"$400"


    },


]

let index =0;
let join_new_member = document.getElementsByClassName('join_new_member')[0];

function UpdateDiv() {
    setInterval(()=>{
        let card = document.createElement('div');
        card.classList.add('card');

        if (index==JoinData.length) {
            index=0;
        } else {
            index++;
        }
        const{name,game,img,price} = JoinData[index-1];
        card.innerHTML = ` <img src="${img}" alt="">
        <div class="content">
            <div class="h6_price">
                <h5>
                    ${game}
                </h5>
                <span>
                    Just Join Now
                </span>
                <h6>${price}</h6>
            </div>
            <p>${name}</p>
        </div>
        `
        join_new_member.appendChild(card);
        join_new_member.scrollTop+=100;
    },1000);
};

document.addEventListener('DOMContentLoaded',()=>{
    UpdateDiv();
})