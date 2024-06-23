// Hours
(function() {
    var clock = document.getElementById("clock");
    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const hoursStr = hours < 10 ? "0" + hours : hours;
        const minutesStr = minutes < 10 ? "0" + minutes : minutes;
        const timeString = `${hoursStr}:${minutesStr}`;
        clock.innerHTML = timeString;
    }

    updateClock(); 
    setInterval(updateClock, 1000);
})();

// Date 
(function() {
    var date = document.getElementById("date");
    function updateDate() {
        const current = new Date();
        const dateNum = current.getDate();
        const dateText = current.getDay();
        const dateVar = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        const dayName = dateVar[dateText];
        const dateString = `${dayName} ${dateNum}`;
        date.innerHTML = dateString;
    }
    
    updateDate(); 
    setInterval(updateDate, 1000);
})();

// Image Changing
const img = document.getElementById("myImg");
const date = document.getElementById("date");
const hour = document.getElementById("clock") 

function displayImg() {
    if (img.src.endsWith("images/front-pic.jpg")) {
        img.src = "images/sec-pic.jpg";
        date.style.color = "white";
        hour.style.color = "white";
    }

    else {
        img.src = "images/front-pic.jpg";
        date.style.color = "var(--maincolor)";
        hour.style.color = "var(--maincolor)";
    }
}

setInterval(displayImg, 1500);

function hoverDisplay(displayId) {
    const id = document.getElementById(displayId);
    id.style.boxShadow = "0 0 5px rgb(207, 165, 247)";
    id.style.color = "white";
    id.style.opacity = "1";
}

function hoverRemove(displayId) {
    const id = document.getElementById(displayId);
    id.style.boxShadow = "0 0 0px rgb(207, 165, 247)";
    id.style.opacity = "0.2";
}

// Hover class display
function showDisplay(displayId) {
    var display = document.getElementById(displayId);
    display.style.display = "block";
    
    if (displayId === 'silent') {
        const box = document.getElementById("container");
        box.style.display = "block";
        box.style.opacity = 0;
        setTimeout(function () {
            box.style.opacity = 1;
            box.style.transition = "opacity 0.5s";
            hoverDisplay("SILENT");
        }, 0);  
    }

    else if (displayId === 'voice') {
        const box = document.getElementById("container2");
        box.style.display = "block";
        box.style.opacity = 0;
        setTimeout(function () {
            box.style.opacity = 1;
            box.style.transition = "opacity 0.5s";
            hoverDisplay("VOICE");
        }, 0);  
    }

    else if (displayId === 'translate') {
        const box = document.getElementById("container3");
        box.style.display = "block";
        box.style.opacity = 0;
        setTimeout(function () {
            box.style.opacity = 1;
            box.style.transition = "opacity 0.5s";
            hoverDisplay("TRANSLATE");
        }, 0);  
    }

    else if (displayId === 'shortcut') {
        const box = document.getElementById("container4");
        const box1 = document.getElementById("container1");
        box.style.display = "block";
        box1.style.display = "block";
        box1.style.opacity = 0;
        box.style.opacity = 0;
        
        setTimeout(function () {
            box.style.opacity = 0.7;
            box1.style.opacity = 1;
            box1.style.transition = "opacity 0.5s";
            box.style.transition = "opacity 0.5s";
            hoverDisplay("SHORTCUT");
        }, 0);  
    }

    else if (displayId === 'accessibility') {
        const box = document.getElementById("container5");
        const box1 = document.getElementById("container1");
        box.style.display = "block";
        box.style.opacity = 0;
        box1.style.display = "block";
        box1.style.opacity = 0;

        setTimeout(function () {
            box.style.opacity = 0.6;
            box.style.transition = "opacity 0.5s";
            box1.style.opacity = 1;
            box1.style.transition = "opacity 0.5s";
            hoverDisplay("ACCESSIBILITY");
        }, 0);  
    }

    else {
        const imgMag = document.getElementById("magImg");
        const box1 = document.getElementById("container1");
        imgMag.style.opacity = 0;
        box1.style.display = "block";
        box1.style.opacity = 0;
        setTimeout(function () {
            box1.style.opacity = 1;
            imgMag.style.opacity = 1;
            box1.style.transition = "opacity 0.5s";
            imgMag.style.transition = "opacity 0.5s, transform 3s";
            imgMag.style.transform = "scale(1.1)";
            if (displayId === 'focus') {
                hoverDisplay("FOCUS");
            }
            if (displayId === 'cam') {
                hoverDisplay("CAMERA");
            }
            if (displayId === 'flashlight') {
                hoverDisplay("FLASHLIGHT");
            }
            if (displayId === 'magnifier') {
                hoverDisplay("MAGNIFIER");
            }
        }, 0);    
    }
}

function hideDisplay(displayId) {
    var display = document.getElementById(displayId);
    display.style.display = "none";

    if (displayId === 'silent') {
        const box = document.getElementById("container");
        box.style.display = "none";
        hoverRemove("SILENT");
    }

    else if (displayId === 'voice') {
        const box = document.getElementById("container2");
        box.style.display = "none";
        hoverRemove("VOICE");
    }

    else if (displayId === 'translate') {
        const box = document.getElementById("container3");
        box.style.display = "none";
        hoverRemove("TRANSLATE");
    }

    else if (displayId === 'shortcut') {
        const box = document.getElementById("container4");
        const box1 = document.getElementById("container1");
        box1.style.display = "none";
        box.style.display = "none";
        hoverRemove("SHORTCUT");
    }

    else if (displayId === 'accessibility') {
        const box = document.getElementById("container5");
        box.style.display = "none";
        const box1 = document.getElementById("container1");
        box1.style.display = "none";
        hoverRemove("ACCESSIBILITY");
    } 

    else {
        const box1 = document.getElementById("container1");
        box1.style.display = "none";
        const imgMag = document.getElementById("magImg");
        imgMag.style.transform = "scale(1)";
        if (displayId === 'focus') {
            hoverRemove("FOCUS");
        }
        if (displayId === 'cam') {
            hoverRemove("CAMERA");
        }
        if (displayId === 'flashlight') {
            hoverRemove("FLASHLIGHT");
        }
        if (displayId === 'magnifier') {
            hoverRemove("MAGNIFIER");
        }
    }
}

// Automatically display the action element
var elements = ['accessibility', 'silent', 'focus', 'cam', 'flashlight', 'voice', 'translate', 'magnifier', 'shortcut'];
var currentIndex = 0;

function autoCycleAction() {
    hideDisplay(elements[currentIndex]);
    currentIndex = (currentIndex + 1) % elements.length;
    showDisplay(elements[currentIndex]);
}

setInterval(autoCycleAction, 1500);

// Media screen only
var menu = document.getElementById('sidemenu');
function openMenu() {
    menu.style.top = "-20px";
}

function closeMenu() {
    menu.style.top = "-60px";
}

