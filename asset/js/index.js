let mainMenu = document.getElementById('main_menu');
let mainBtn = document.getElementById('main_btn');

mainBtn.addEventListener('click', function() {
    mainMenu.classList.toggle('d-none');
});


// video
let myVideo = document.getElementById("myvideo")
let myVideo2 = document.getElementById("myvideo2")
let myVideo3 = document.getElementById("myvideo3")
let btnClick = document.getElementById("mybtn")
let btnClick2 = document.getElementById("mybtn2")
let btnClick3 = document.getElementById("mybtn3")
let videoText = document.getElementById('videoText')
let videoText2 = document.getElementById('videoText2')
let videoText3 = document.getElementById('videoText3')

function videoPlay(btn, vid,Text) {
    btn.addEventListener("click", function(e) {
        if (vid.paused == false) {
            vid.pause();
            vid.firstChild.nodeValue = 'Play';
            btn.style.display = "none";
            Text.classList.toggle('d-none')
        } else {
            vid.play();
            vid.firstChild.nodeValue = 'Pause';
            btn.style.display = "none";
            Text.classList.toggle('d-none')
            vid.setAttribute("controls", "true")
        }
    });
}
videoPlay(btnClick, myVideo,videoText)
videoPlay(btnClick2, myVideo2,videoText2)
videoPlay(btnClick3, myVideo3,videoText3)