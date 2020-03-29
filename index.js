let myBlock;
let myFunctionList;
let funList = [];
document.addEventListener('DOMContentLoaded', () => {

    console.log("Loaded and hi there");
    myBlock = document.createElement('div');
    myBlock.innerText = "hello World";
    document.body.appendChild(myBlock);
    styles();
    myFunctionList = document.createElement('div');
    document.body.appendChild(myFunctionList);
});

//Keyboard Events 
document.addEventListener('keydown', (e) => {
    let keyC = e.keyCode;
    if (keyC === 37) {
        addFun('left');
        myBlock.style.backgroundColor = randomColor();
    } else if (keyC === 38) {
        addFun('top');
        myBlock.style.backgroundColor = randomColor();
    } else if (keyC === 39) {
        addFun('right');
        myBlock.style.backgroundColor = randomColor();
    } else if (keyC === 40) {
        addFun('down');
        myBlock.style.backgroundColor = randomColor();
    } else if (keyC === 67 || keyC === 32) {
        myBlock.style.backgroundColor = randomColor();
    }

    //console.log(keyC);
});

//function which pushes the mover commands to the list

function addFun(val) {
    funList.push(val);
    //console.log(funList);
    let span = document.createElement('span');
    span.textContent = '+' + val;
    span.style.padding = '15px';
    span.style.border = '1px solid black';
    myFunctionList.appendChild(span);
    span.addEventListener('mouseover', () => {
        span.style.backgroundColor = "red";
        span.style.color = "white";
    })
    span.addEventListener('mouseout', () => {
        span.style.backgroundColor = "white";
        span.style.color = 'black';
    })
}


//Styles
function styles() {
    let S = myBlock.style;
    S.width = '150px';
    S.height = '150px';
    S.backgroundColor = 'red';
    S.borderRadius = '50%';
    S.position = 'absolute';
    S.textAlign = 'center';
    S.lineHeight = '150px';
    S.fontWeight = 'bold';
    S.top = '150px';
    S.left = '100px';
}

//Mover function

{
    let temp;

    function goLeft() {
        temp = myBlock.offsetLeft;
        temp -= 50;
        myBlock.style.left = temp + 'px';
    }

    function goRight() {
        temp = myBlock.offsetLeft;
        temp += 50;
        myBlock.style.left = temp + 'px';
    }

    function goTop() {
        temp = myBlock.offsetTop;
        temp -= 50;
        myBlock.style.top = temp + 'px';
    }

    function goDown() {
        temp = myBlock.offsetTop;
        temp += 50;
        myBlock.style.top = temp + 'px';
    }
}

//Random colors
function randomColor() {
    return '#' + Math.random().toString(16).substr(-6);
}