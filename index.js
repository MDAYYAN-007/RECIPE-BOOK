const prevBtn=document.querySelector("#prev");
const nextBtn=document.querySelector("#next");
const homeBtn=document.querySelector("#home");
const contentBtn=document.querySelector("#content");
const book=document.querySelector(".book");
const page2Btn = document.querySelector("#page2");
const page3Btn = document.querySelector("#page3");
const page4Btn = document.querySelector("#page4");
const page5Btn = document.querySelector("#page5");
const page6Btn = document.querySelector("#page6");
const page7Btn = document.querySelector("#page7");
const page8Btn = document.querySelector("#page8");
const page9Btn = document.querySelector("#page9");

const paper1=document.querySelector("#p1");
const paper2=document.querySelector("#p2");
const paper3=document.querySelector("#p3");
const paper4=document.querySelector("#p4");
const paper5=document.querySelector("#p5");
const paper6=document.querySelector("#p6");
const paper7=document.querySelector("#p7");
const paper8=document.querySelector("#p8");
const paper9=document.querySelector("#p9");
const paper10=document.querySelector("#p10");

var frontPaper= document.getElementsByClassName("front");

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
homeBtn.addEventListener("click", goToHome);
contentBtn.addEventListener("click", goToContent);

page2Btn.addEventListener("click", goToPage2);
page3Btn.addEventListener("click", goToPage3);
page4Btn.addEventListener("click", goToPage4);
page5Btn.addEventListener("click", goToPage5);
page6Btn.addEventListener("click", goToPage6);
page7Btn.addEventListener("click", goToPage7);
page8Btn.addEventListener("click", goToPage8);
page9Btn.addEventListener("click", goToPage9);


window.addEventListener(
    "keydown",
    (event) => {
      switch (event.code) {
        case "KeyA":
        case "ArrowLeft":
        case "PageDown":
            prevBtn.click();
            break;
        case "KeyD":
        case "ArrowRight":
        case"PageUp":
            nextBtn.click();  
            break;
        case "Home":
            homeBtn.click();
            break;
        case "Escape":
            contentBtn.click();
            break;
      }
    }
);

let currentLocation = 1;
let numOfPapers = 10;
let maxLocation = 11;

function openBook(){
    book.style.transform="translateX(50%)";
    prevBtn.style.transform="translateX(-220px)";
    nextBtn.style.transform="translateX(220px)";
    homeBtn.style.transform="translateX(-220px)";
    contentBtn.style.transform="translateX(-220px)";
    // setTimeout(function(){
    //     for (var i = 0; i < frontPaper.length; i++) {
    //         frontPaper[i].style.borderLeft = "3px solid black";
    //     }
    // },500)
}

function closeBook(isAtBeginning){
    if(isAtBeginning){
        book.style.transform="translateX(0%)";

    }
    else{
        book.style.transform="translateX(100%)";
    }    
    prevBtn.style.transform="translateX(0px)";
    nextBtn.style.transform="translateX(0px)";
    prevBtn.style.transition = 'transform 1.5s';
    nextBtn.style.transition = 'transform 1.5s';
    homeBtn.style.transform="translateX(0px)";
    contentBtn.style.transform="translateX(0px)";
    homeBtn.style.transition = 'transform 1.5s';
    contentBtn.style.transition = 'transform 1.5s';
    // setTimeout(function(){
    //     for (var i = 0; i < frontPaper.length; i++) {
    //         frontPaper[i].style.borderLeft = "none";
    //     }
    // },500)
}

function goNextPage(){
    if (currentLocation<maxLocation) {  
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                setTimeout(function() {
                    paper1.style.zIndex = 1;
                },500);
                break;
            case 2:
                paper2.classList.add("flipped");
                setTimeout(function() {
                    paper2.style.zIndex = 2;
                },500);
                break;
            case 3:
                paper3.classList.add("flipped");
                setTimeout(function() {
                    paper3.style.zIndex = 3;
                },500);
                break;
            case 4:
                paper4.classList.add("flipped");
                setTimeout(function() {
                    paper4.style.zIndex = 4;
                },500);
                break;
            case 5:
                paper5.classList.add("flipped");
                setTimeout(function() {
                    paper5.style.zIndex = 5;
                },500);
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                break;
            case 7:
                paper7.classList.add("flipped");
                paper7.style.zIndex = 7;
                break;
            case 8:
                paper8.classList.add("flipped");
                paper8.style.zIndex = 8;
                break;
            case 9:
                paper9.classList.add("flipped");
                paper9.style.zIndex = 9;
                break;
            case 10:
                paper10.classList.add("flipped");
                paper10.style.zIndex = 10;
                closeBook(false);
                break;
            default:
                throw new Error("unknown state");
                break;
        }
        
        currentLocation++;
    }
}

function goPrevPage(){
    if (currentLocation>1) {
        
        switch (currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 10;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 9;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 8;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 7;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 6;
                break;
            case 7:
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 5;
                break;
            case 8:
                    paper7.classList.remove("flipped");
                    setTimeout(function() {
                        paper7.style.zIndex = 4;
                    }, 500);
                    break;
            case 9:
                    paper8.classList.remove("flipped");
                    setTimeout(function() {
                        paper8.style.zIndex = 3;
                    }, 500);
                    break;
            case 10:
                    paper9.classList.remove("flipped");
                    setTimeout(function() {
                        paper9.style.zIndex = 2;
                    }, 500);
                    break;
            case 11:
                    openBook();
                    paper10.classList.remove("flipped");
                    setTimeout(function() {
                        paper10.style.zIndex = 1;
                    }, 500);
                    break;
            default:
                throw new Error("unknown state");
                break;
        }
        
          
        currentLocation--;
    }

}

function goToHome(){
    if (currentLocation===1){
        return
    }
    else{
        if(currentLocation===11){
            openBook();
        }
        const contFlip = document.querySelectorAll(".flipped");
        contFlip.forEach(function(element, index) {
                setTimeout(function() {
                    element.classList.remove("flipped");
                  }, ((contFlip.length - index) * 300));
        });
        setTimeout(function(){
            closeBook(true);
            book.style.transition="transform .5s";
        },currentLocation*300)

        setTimeout(function(){
            paper1.style.zIndex = 10;
        },(currentLocation-1)*300);

        setTimeout(function(){
            paper2.style.zIndex = 9;
        },(currentLocation-2)*300);

        setTimeout(function() {
        paper3.style.zIndex = 8;
        },(currentLocation-3)*300);

        setTimeout(function() {
        paper4.style.zIndex = 7;
        },(currentLocation-4)*300);

        setTimeout(function() {
        paper5.style.zIndex = 6;
        },(currentLocation-5)*300);

        setTimeout(function() {
        paper6.style.zIndex = 5;
        },(currentLocation-6)*300);

        setTimeout(function() {
        paper7.style.zIndex = 4;
        },((currentLocation-7)*300)+500);

        setTimeout(function() {
        paper8.style.zIndex = 3;
        },((currentLocation-8)*300)+500);

        setTimeout(function() {
        paper9.style.zIndex = 2;
        },((currentLocation-9)*300)+500);

        setTimeout(function() {
        paper10.style.zIndex = 1;
        },((currentLocation-10)*300)+500);


        setTimeout(function(){
            // for (var i = 0; i < frontPaper.length; i++) {
            //     frontPaper[i].style.borderLeft = "none";
            // }
            book.style.transition = ''
        },currentLocation*300);
        currentLocation=1;
    }
}

function goToContent() {
    if (currentLocation===1) {
        openBook();
        paper1.classList.add("flipped");
        setTimeout(function() {
            paper1.style.zIndex = 1;
        }, 1000);
        
    }else if (currentLocation===2) {
        console.log(currentLocation);
    }else{
        const contFlip = document.querySelectorAll(".flipped");
        contFlip.forEach(function(element, index) {
            if (index !== 0) {
                setTimeout(function() {
                    element.classList.remove("flipped");
                  }, (contFlip.length - index) * 300);
            }
        });
        setTimeout(function(){
            paper2.style.zIndex = 9;
        },(currentLocation-2)*300);

        setTimeout(function() {
        paper3.style.zIndex = 8;
        }, (currentLocation-3)*300);

        setTimeout(function() {
        paper4.style.zIndex = 7;
        }, (currentLocation-4)*300);

        setTimeout(function() {
        paper5.style.zIndex = 6;
        }, (currentLocation-5)*300);

        setTimeout(function() {
        paper6.style.zIndex = 5;
        }, (currentLocation-6)*300);

        setTimeout(function() {
        paper7.style.zIndex = 4;
        }, ((currentLocation-7)*300)+500);

        setTimeout(function() {
        paper8.style.zIndex = 3;
        }, ((currentLocation-8)*300)+500);

        setTimeout(function() {
        paper9.style.zIndex = 2;
        }, ((currentLocation-9)*300)+500);

        setTimeout(function() {
        paper10.style.zIndex = 1;
        }, ((currentLocation-10)*300)+500);

        // setTimeout(function(){
        //     for (var i = 0; i < frontPaper.length; i++) {
        //         frontPaper[i].style.borderLeft = "3px solid black";
        //     }
        // },500)

        if(currentLocation===11){
            openBook();
        }
    }
    currentLocation=2;
}

function goToPage2() {
    paper2.classList.add("flipped");
    setTimeout(function() {
        paper2.style.zIndex = 2;
    },500);
    currentLocation=3;
}

function goToPage3(){
    setTimeout(function(){
        paper2.classList.add("flipped");
    },100);
    setTimeout(function() {
        paper2.style.zIndex = 2;
    },600);
    setTimeout(function(){
        paper3.classList.add("flipped");
    },900);
    setTimeout(function() {
        paper3.style.zIndex = 3;
    },1200);
    currentLocation=4;
}

function goToPage4() {
    setTimeout(function(){
        paper2.classList.add("flipped");
    },200);
    setTimeout(function() {
        paper2.style.zIndex = 2;
    },600);
    setTimeout(function(){
        paper3.classList.add("flipped");
    },900);
    setTimeout(function() {
        paper3.style.zIndex = 3;
    },1200);
    setTimeout(function(){
        paper4.classList.add("flipped");
    },1500);
    setTimeout(function() {
        paper4.style.zIndex = 4;
    },1800);
    currentLocation=5;
}

function goToPage5() {
    setTimeout(function(){
        paper2.classList.add("flipped");
    },200);
    setTimeout(function() {
        paper2.style.zIndex = 2;
    },500);
    setTimeout(function(){
        paper3.classList.add("flipped");
    },600);
    setTimeout(function() {
        paper3.style.zIndex = 3;
    },800);
    setTimeout(function(){
        paper4.classList.add("flipped");
    },1000);
    setTimeout(function() {
        paper4.style.zIndex = 4;
    },1200);
    setTimeout(function(){
        paper5.classList.add("flipped");
    },1400);
    setTimeout(function() {
        paper5.style.zIndex = 5;
    },1600);
    currentLocation=6;
}

function goToPage6() {
    setTimeout(function(){
        paper2.classList.add("flipped");
    },200);
    setTimeout(function() {
        paper2.style.zIndex = 2;
    },500);
    setTimeout(function(){
        paper3.classList.add("flipped");
    },600);
    setTimeout(function() {
        paper3.style.zIndex = 3;
    },800);
    setTimeout(function(){
        paper4.classList.add("flipped");
    },1000);
    setTimeout(function() {
        paper4.style.zIndex = 4;
    },1200);
    setTimeout(function(){
        paper5.classList.add("flipped");
    },1400);
    setTimeout(function() {
        paper5.style.zIndex = 5;
    },1600);
    setTimeout(function(){
        paper6.classList.add("flipped");
    },1800);
    setTimeout(function() {
        paper6.style.zIndex = 6;
    },2000);
    currentLocation=7;
}

function goToPage7() {
    setTimeout(function(){
        paper2.classList.add("flipped");
    }, 200);
    setTimeout(function() {
        paper2.style.zIndex = 2;
    }, 500);
    setTimeout(function(){
        paper3.classList.add("flipped");
    }, 600);
    setTimeout(function() {
        paper3.style.zIndex = 3;
    }, 800);
    setTimeout(function(){
        paper4.classList.add("flipped");
    },1000);
    setTimeout(function() {
        paper4.style.zIndex = 4;
    },1200);
    setTimeout(function(){
        paper5.classList.add("flipped");
    },1400);
    setTimeout(function() {
        paper5.style.zIndex = 5;
    },1600);
    setTimeout(function(){
        paper6.classList.add("flipped");
    },1800);
    setTimeout(function() {
        paper6.style.zIndex = 6;
    },2000);
    setTimeout(function(){
        paper7.classList.add("flipped");
    },2200);
    setTimeout(function() {
        paper7.style.zIndex = 7;
    },2400);
    currentLocation=8;
}

function goToPage8() {
    setTimeout(function(){
        paper2.classList.add("flipped");
    },200);
    setTimeout(function() {
        paper2.style.zIndex = 2;
    },500);
    setTimeout(function(){
        paper3.classList.add("flipped");
    },600);
    setTimeout(function() {
        paper3.style.zIndex = 3;
    },800);
    setTimeout(function(){
        paper4.classList.add("flipped");
    },1000);
    setTimeout(function() {
        paper4.style.zIndex = 4;
    },1200);
    setTimeout(function(){
        paper5.classList.add("flipped");
    },1400);
    setTimeout(function() {
        paper5.style.zIndex = 5;
    },1600);
    setTimeout(function(){
        paper6.classList.add("flipped");
    },1800);
    setTimeout(function() {
        paper6.style.zIndex = 6;
    },2000);
    setTimeout(function(){
        paper7.classList.add("flipped");
    },2200);
    setTimeout(function() {
        paper7.style.zIndex = 7;
    },2400);
    setTimeout(function(){
        paper8.classList.add("flipped");
    },2600);
    setTimeout(function() {
        paper8.style.zIndex = 8;
    },2800);
    currentLocation=9;
}

function goToPage9() {
    setTimeout(function(){
        paper2.classList.add("flipped");
    },200);
    setTimeout(function() {
        paper2.style.zIndex = 2;
    },400);
    setTimeout(function(){
        paper3.classList.add("flipped");
    },600);
    setTimeout(function() {
        paper3.style.zIndex = 3;
    },800);
    setTimeout(function(){
        paper4.classList.add("flipped");
    },1000);
    setTimeout(function() {
        paper4.style.zIndex = 4;
    },1200);
    setTimeout(function(){
        paper5.classList.add("flipped");
    },1400);
    setTimeout(function() {
        paper5.style.zIndex = 5;
    },1600);
    setTimeout(function(){
        paper6.classList.add("flipped");
    },1800);
    setTimeout(function() {
        paper6.style.zIndex = 6;
    },2000);
    setTimeout(function(){
        paper7.classList.add("flipped");
    },2200);
    setTimeout(function() {
        paper7.style.zIndex = 7;
    },2400);
    setTimeout(function(){
        paper8.classList.add("flipped");
    },2600);
    setTimeout(function() {
        paper8.style.zIndex = 8;
    },2800);
    setTimeout(function(){
        paper9.classList.add("flipped");
    },3000);
    setTimeout(function() {
        paper9.style.zIndex = 9;
    },3200);
    currentLocation=10;
}