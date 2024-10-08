let closePlayer = document.querySelector('#close-player');
let musicPlayer = document.querySelector('.music-player');
let boxContainer = document.querySelector('.container .box-container');

closePlayer.onclick = () =>{
    closePlayer.classList.toggle('fa-times');
    musicPlayer.classList.toggle('active');
    boxContainer.classList.toggle('active');


}

let boxes = document.querySelectorAll('.container.container .box-container .box:hover');


boxes.forEach(box =>{

    box.onclick = () =>{
        let src = box.getAttribute('data-src');
        let text = box.querySelector('.content h3').innerText;
        closePlayer.classList.toggle('fa-times');
        musicPlayer.classList.toggle('active');
        boxContainer.classList.toggle('active');
        musicPlayer.querySelector('h3').innerText = text;
        musicPlayer.querySelector('audio').src = src;
        musicPlayer.querySelector('audio').play();

    }
});