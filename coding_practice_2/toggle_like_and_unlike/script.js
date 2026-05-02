let puppyImage = document.getElementById("puppyImage");
let likeButton = document.getElementById("likeButton");
let likeSymbol = document.getElementById("likeIcon");
let likedButton = false;

function onClickLikeButton() {
    if (likedButton === false) {
        puppyImage.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeButton.style.backgroundColor = "#0967d2";
        likeButton.style.color = "#ffffff";
        likeSymbol.style.color = "#0967d2";
        likedButton = true;
    } else {
        puppyImage.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeButton.style.backgroundColor = "#cbd2d9";
        likeButton.style.color = "#9aa5b1";
        likeSymbol.style.color = "#cbd2d9";
        likedButton = false;
    }

}