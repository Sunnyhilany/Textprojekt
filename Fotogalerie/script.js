
let images = ['img1.jpg','img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.jpg','img9.jpg','imgs10.jpg'];

function load(){
    let mypost = document.getElementById('box');
    mypost.innerHTML = '';
        for (let i = 0; i < images.length; i++){
            mypost.innerHTML /*html*/ `
            <div onclick="openImg(${i})"class="imgbox">
                <img src="img/img1.jpg" alt="">
            </div>
            `;
        }
}
function openImg(){

}


   