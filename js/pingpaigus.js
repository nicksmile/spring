window.onload=function () {
    let gudi=document.querySelector(".gudi");
    let con=gudi.querySelectorAll(".content-nave li");
    console.log(con);
    let test =document.querySelector(".content-navebox1");
    let gushibaox =document.querySelector(".content-gushibox1");
    let hulibox =document.querySelector(".content-hulibox1");
    console.log(gushibaox);
    con[1].onmouseenter = function () {
        test.style.height = "92px";
        test.style.boxShadow = "0 5px 5px 5px rgba(162,162,162,0.2)";
    }
    con[1].onmouseleave = function () {
        test.style.height = "0";
        test.style.boxShadow = "none";
    }
    con[4].onmouseenter = function () {
        // gushibaox1.style.height = "172px";
        gushibaox.style.height="172px";
        gushibaox.style.boxShadow = "0 5px 5px 5px rgba(162,162,162,0.2)";
    }
    con[4].onmouseleave = function () {
        gushibaox.style.height = "0";
        gushibaox.style.boxShadow = "none"
    }
    con[9].onmouseenter = function () {
        hulibox.style.height = "172px";
        hulibox.style.boxShadow = "0 5px 5px 5px rgba(162,162,162,0.2)";
    }
    con[9].onmouseleave = function () {
        hulibox.style.height = "0";
        hulibox.style.boxShadow = "none"
    }

    let header=document.querySelector("header");
    let content = header.querySelector(".content-nave");
    let li = content.querySelectorAll(".content-nave li");
    let box = document.querySelector(".content-navebox");
    let gushi = document.querySelector(".content-gushibox");
    let huli = document.querySelector(".content-hulibox");
    // console.log(li);
    li[1].onmouseenter = function () {
        box.style.height = "92px";
        box.style.boxShadow = "0 5px 5px 5px rgba(162,162,162,0.2)";
    }
    li[1].onmouseleave = function () {
        box.style.height = "0";
        box.style.boxShadow = "none"
    }
    li[4].onmouseenter = function () {
        gushi.style.height = "172px";
        gushi.style.boxShadow = "0 5px 5px 5px rgba(162,162,162,0.2)";
    }
    li[4].onmouseleave = function () {
        gushi.style.height = "0";
        gushi.style.boxShadow = "none"
    }
    li[9].onmouseenter = function () {
        huli.style.height = "172px";
        huli.style.boxShadow = "0 5px 5px 5px rgba(162,162,162,0.2)";
    }
    li[9].onmouseleave = function () {
        huli.style.height = "0";
        huli.style.boxShadow = "none"
    }

    // footernaniu.onclick=function () {
    //     animate(document.documentElement,{scrollTop:0});
    //     animate(document.body,{scrollTop:0});
    // }
    let dongtai=document.querySelector(".dongtai");
    let speedX=20,speedY=10;
    let maxHeight=window.innerHeight-dongtai.offsetHeight;
    let maxWidth=innerWidth-dongtai.offsetWidth;
    setInterval(move,150);
    function move() {
        let tops=dongtai.offsetTop+speedY;
        let rights=dongtai.offsetLeft+speedX;
        if(tops>=maxHeight){
            tops=maxHeight;
            speedY*=-1;
        }
        if(rights>=maxWidth){
            rights=maxWidth;
            speedX*=-1;
        }
        if(tops<=0){
            tops=0;
            speedY*=-1;
        }
        if(rights<=0){
            rights=0;
            speedX*=-1;
        }
        dongtai.style.top=`${tops}px`;
        dongtai.style.left=`${rights}px`;
    }
    window.onresize=function () {
        maxHeight=window.innerHeight-dongtai.offsetHeight;
        maxWidth=innerWidth-dongtai.offsetWidth;
    }

    let footernaniu = document.querySelector(".footer-naniu");

    //滚轮事件
    window.onscroll=function () {
        let st = document.body.scrollTop || document.documentElement.scrollTop;
        if (st>100){
            animate(gudi,{top:0});
        }else {
            animate(gudi,{top:-62});
        }
        if (st>500){
            // animate(footernaniu,{bottom:0});
            footernaniu.style.display="block";
        }else {
            // animate(footernaniu,{bottom:-52});
            footernaniu.style.display="none";
        }
        footernaniu.onclick=function () {
            animate(document.documentElement,{scrollTop:0});
            animate(document.body,{scrollTop:0});
        }
    }
    let flagan = true;
    let an=document.querySelector(".foot-contarinerright");
    let dianjibox=document.querySelector(".dianjibox");
    an.onclick=function () {
        if(flagan){
            flagan = false;
            dianjibox.style.display="block"
        }else{
            flagan = true;
            dianjibox.style.display="none"
        }
    }
}