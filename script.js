let robotImgIndex = 0;
showImg(robotImgIndex);

function incrImg() {
    showImg(robotImgIndex += 1);
}

function showImg(n) {
    let imgs = document.getElementsByClassName("robot-img");
    let index = n % imgs.length;
    for (let i = 0; i < imgs.length; i++) 
        imgs[i].style.display = "none";
    imgs[index].style.display = "block";
}