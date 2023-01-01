const scrollSession = document.querySelector(".session");
const root = document.querySelector(":root");
const session1 = document.querySelector(".session1");
const session2 = document.querySelector(".session2");
const session3 = document.querySelector(".session3");
const session4 = document.querySelector(".session4");
let pagePosition = 0

const checkPage = () => {
    if(pagePosition <= 0)
    {
        pagePosition = 0
    }
    else if(pagePosition >= 3)
    {
        pagePosition = 3
    }
}

//execute cooldown for function
const RECHARGE_TIME = 1000;

const changeSession = () => {
    let offSet = 0;
    //when scrollup
    if (event.deltaY < 0) {
        console.log("scroll up")
        //check pagePosition section
        pagePosition--
        checkPage()
        switch(pagePosition) {
            case 0:
                offSet = 0;
                scrollSession.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
                break;
            case 1:
                offSet = scrollSession.offsetHeight;
                scrollSession.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
                break;
            case 2:
                offSet = scrollSession.offsetHeight*2;
                scrollSession.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
                break;   
        }
    } 
    //when scrolldown
    else 
    {
        console.log("scroll down")
        pagePosition++
        checkPage()
        switch(pagePosition) {
            case 1:
                offSet = scrollSession.offsetHeight;
                scrollSession.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
                break;
            case 2:
                offSet = scrollSession.offsetHeight*2;
                scrollSession.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
                break;
            case 3:
                offSet = scrollSession.offsetHeight*3;
                scrollSession.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
                break;
        }
    }
}

function throttle(func, delay){
    var func = func.bind(func),
        last = Date.now();
    return function(){
        if(Date.now() - last > delay){
            func();
            last = Date.now();
        }
    }
}

var throttledListener = throttle(changeSession, RECHARGE_TIME)
window.addEventListener('wheel', throttledListener)

//responsive when changing window size
window.onresize = () => {
    let yOffSet = scrollSession.offsetHeight / 100;

    let offSet = 0;
    root.style = `--vh:${yOffSet}px`;
    //responsive for translate3d
    switch(pagePosition){
        case 0:
            offSet = 0;
            scrollSession.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
            break
        case 1:
            offSet = scrollSession.offsetHeight;
            scrollSession.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
            break    
        case 2:
            offSet = scrollSession.offsetHeight*2;
            scrollSession.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
            break  
        case 3:
            offSet = scrollSession.offsetHeight*3;
            scrollSession.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
            break 
    }
};
