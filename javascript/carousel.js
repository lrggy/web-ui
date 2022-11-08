let arra = ["jju_5.jpg","jju_6.jpg","jju_7.jpg","jju_9.jpg","jju_10.jpg","jjxy_12.jpeg"];
let arra1 = ["jju_7.jpg","jju_6.jpg","jju_5.jpg","jjxy_12.jpeg","jju_9.jpg","jju_10.jpg"];
var count=0;
var forword = document.getElementById("forword");
var back = document.getElementById("back");
var im = document.getElementById("ig");
var bg = document.getElementById("bg");
forword.addEventListener("click",function(){
    if(count<5){
        count++;
    }else{
        count=0;
    }
    im.src="image/"+arra[count];
    bg.style.backgroundImage = 'url('+"image/"+arra1[count]+')';});

back.addEventListener("click",function(){
    if(count==5){
        count=0;
    }else{
        count++;
    }
    im.src="image/"+arra[count];
    bg.style.backgroundImage = 'url('+"image/"+arra1[count]+')';
});

setInterval(() => {
    if(count==5){
        count=0;
    }else{
        count++;
    }
    bg.style.backgroundImage = 'url('+"image/"+arra1[count]+')';
    im.src="image/"+arra[count];
}, 3000);