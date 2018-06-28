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
//    轮播图
    let banner = document.querySelector(".banner");
    let imgs = banner.querySelector(".imgs");
    let imgss = imgs.querySelectorAll("li");
    let lis = banner.querySelector(".lis");
    let dian = lis.querySelectorAll("li");
    let widih = parseInt(getComputedStyle(imgs, null).width);
    console.log(banner,imgss,dian,widih);
    let current = 0, next = 0;
    imgss[0].style.left = "0";
    dian[0].classList.add("hot");
    let t = setInterval(move, 2000);
    let flag = true;
    banner.onmouseenter = function () {
        clearInterval(t);
    }
    banner.onmouseleave = function () {
        t = setInterval(move, 2000);
    }

    function move() {
        next++;
        //找元素找不到
        if (next == imgss.length) {
            next = 0;
        }
        dian[current].classList.remove("hot");
        dian[next].classList.add("hot");
        imgss[next].style.left = `${widih}px`;
        animate(imgss[current], {left: -widih});
        animate(imgss[next], {left: 0}, function () {
            flag = true;
        })
        current = next;
    }
    dian.forEach(function (element,index,) {
        dian[index].onclick=function () {
            dian[current].classList.remove("hot");
            dian[index].classList.add("hot");
            if(index<current){
                imgss[index].style.left=-width+"px";
                animate(imgss[current],{left:width});
                animate(imgss[index],{left:0});
            }
            if(index>current){
                imgss[index].style.left=width+"px";
                animate(imgss[current],{left:-width});
                animate(imgss[index],{left:0});
            }
            next=current=index;
        }
    })

//    平移轮播点
    let bannertop = document.querySelector(".banner-top");
    let banneranniu = bannertop.querySelectorAll(".banner-anniu a");
    let bottombox = document.querySelector(".bottombox");
    let width = parseInt(getComputedStyle(bottombox, null).width) / 3;
    // console.log(banneranniu,bottombox,width);
    let times = 0;
    banneranniu[1].onclick = function () {
        times++;
        if (times == 3) {
            times = 2;
        }
        bottombox.style.transform = `translateX(${-width * times}px)`;
    }
    banneranniu[0].onclick = function () {
        times--;
        if (times < 0) {
            times = 0;
            return;
        }
        bottombox.style.transform = `translateX(${-width * times}px)`;
    }
//    楼层事件
    let wh = innerHeight;
    let bannerlast = document.querySelectorAll(".banner-last");
    let footernaniu = document.querySelector(".footer-naniu");
    let dianjibox=document.querySelector(".dianjibox");
    // console.log(dianjibox);
    let arr = [];
    bannerlast.forEach(function (element) {
        arr.push(element.offsetTop)
    })
    // console.log(arr)
    window.onscroll = function () {
        let st = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(st)
        arr.forEach(function (element,index) {
            if (wh+st>element+300){
                let imgs=bannerlast[index].querySelectorAll("img");
                imgs.forEach((value)=>{
                    value.src=value.getAttribute("imgurl");
                })
            }

        })
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