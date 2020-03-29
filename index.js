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
}