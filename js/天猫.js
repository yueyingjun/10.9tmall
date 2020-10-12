
window.onload=function() {
    var imgArr = document.querySelectorAll("bigbanner-img");
    var headerOne = document.querySelector(".header-one");
    var brand = document.querySelector("div.brand");
    var lefts=document.querySelector(".lefts");
    console.log()

    window.onscroll = function () {

        if (document.documentElement.scrollTop >= brand.offsetTop) {
            headerOne.style.top = 0 + "px";
        } else {
            headerOne.style.top = -50 + "px";
        }
        if (document.documentElement.scrollTop < 1000) {
            animation(lefts,{
                display:'none',
                opacity:0,
                transform:'scale(0,0)'
            },300,Tween.Linear)
        }else{
            animation(lefts,{
                display:'block',
                opacity:1,
                transform:'scale(1,1)'
            },300,Tween.Linear)   
        }
        var floorTop=document.querySelector("floor");
        
    }

    var bannerBox=document.querySelector(".bigbanner-body")
    var bigBanner=document.querySelector(".bigbanner-banner")
    var bannerImg=document.querySelectorAll(".bigbanner-img li")
    var num=0;
    bigBanner.onfocus=bigBanner.onmouseout=function () {
        t=setInterval(move,3000);
    }
    bigBanner.onblur=bigBanner.onmouseover=function () {
        clearInterval(t);
    }


    function move(){
        num++
        for (var i=0;i<bannerImg.length;i++){
            if(num==bannerImg.length){
                num=0
            }
            animation(bannerImg[i],{
                opacity:0,
                zIndex:0
            },500,Tween.Linear,function () {
                flag=true;
            })
        }

        animation(bannerImg[num],{
            opacity:1,
            zIndex:1
        },500,Tween.Linear,function () {
            flag=true;
        })

        bannerBox.style.background=bannerImg[num].getAttribute('backColor');


    }
    var t=setInterval(move,3000);


}