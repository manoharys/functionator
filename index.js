let myBlock;

document.addEventListener('DOMContentLoaded', () => {

    console.log("Loaded and hi there");
    myBlock = document.createElement('div');
    myBlock.innerText = "hello World";
    document.body.appendChild(myBlock);
    styles();

})

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