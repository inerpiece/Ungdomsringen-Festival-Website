/* FAQ Toggle question buttons */
let btn = document.querySelectorAll(".question");
let i;

for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        this.classList.toggle("question_active");
        const answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
}

/*Changing cards background and HTML*/

/* const articleBackground7 = document.getElementById('cardID7');
const articleBackground8 = document.getElementById('cardID8');
const articleBackground9 = document.getElementById('cardID9'); */
const articleBackground10 = document.getElementById('cardID10');
const articleBackground11 = document.getElementById('cardID11');
const articleBackground12 = document.getElementById('cardID12');
const articleBackground13 = document.getElementById('cardID13');
const articleBackground14 = document.getElementById('cardID14');
const articleBackground15 = document.getElementById('cardID15');
/* const otherElement13 = document.querySelector('#cardID7 h3');
const otherElement14 = document.querySelector('#cardID7 i');
const otherElement15 = document.querySelector('#cardID8 h3');
const otherElement16 = document.querySelector('#cardID8 i');
const otherElement17 = document.querySelector('#cardID9 h3');
const otherElement18 = document.querySelector('#cardID9 i'); */
const otherElement19 = document.querySelector('#cardID10 h3');
const otherElement20 = document.querySelector('#cardID10 i');
const otherElement21 = document.querySelector('#cardID11 h3');
const otherElement22 = document.querySelector('#cardID11 i');
const otherElement23 = document.querySelector('#cardID12 h3');
const otherElement24 = document.querySelector('#cardID12 i');
const otherElement25 = document.querySelector('#cardID13 h3');
const otherElement26 = document.querySelector('#cardID13 i');
const otherElement27 = document.querySelector('#cardID14 h3');
const otherElement28 = document.querySelector('#cardID14 i');
const otherElement29 = document.querySelector('#cardID15 h3');
const otherElement30 = document.querySelector('#cardID15 i');

/* const txtBoxID3 = document.getElementById('textBoxID3'); */
const txtBoxID4 = document.getElementById('textBoxID4');

window.onload = activeDefault();

function activeDefault(){
    /*Case 7*/
    /* articleBackground7.style.backgroundImage = "var(--gradient_purple)";

    otherElement13.style.color = "white";
    otherElement14.style.color = "white";
 

    txtBoxID3.innerHTML = `
    <h3>Location</h3>
    <p>Filstedvejens Skole</p>
     `; */

    /*Case 10*/
    articleBackground10.style.backgroundImage = "var(--gradient_purple)";
    otherElement19.style.color = "white";
    otherElement20.style.color = "white";
   

    txtBoxID4.innerHTML = `
    <h3>Royal Stage #1 </h3>
    <p>Royal Stage is GREAT! Here we have a gigantic scene, sound system and lights! The audience capacity is 1300! Dare to pose for this majestic scene!</p>
    `;

};


/* document.getElementById('btnID7').addEventListener('click', function(){
    
    articleBackground7.style.backgroundImage = "var(--gradient_purple)";
    articleBackground8.style.backgroundImage = "var(--gradient_white)";
    articleBackground9.style.backgroundImage = "var(--gradient_white)";
    otherElement13.style.color = "white";
    otherElement14.style.color = "white";
    otherElement15.style.color = "black";
    otherElement16.style.color = "black";
    otherElement17.style.color = "black";
    otherElement18.style.color = "black";

    txtBoxID3.innerHTML = `
    <h3>Location</h3>
    <p>Filstedvejens Skole</p>
    `;

});


document.getElementById('btnID8').addEventListener('click', function(){
    
    articleBackground8.style.backgroundImage = "var(--gradient_purple)";
    articleBackground7.style.backgroundImage = "var(--gradient_white)";
    articleBackground9.style.backgroundImage = "var(--gradient_white)";
    otherElement15.style.color = "white";
    otherElement16.style.color = "white";
    otherElement13.style.color = "black";
    otherElement14.style.color = "black";
    otherElement17.style.color = "black";
    otherElement18.style.color = "black";

    txtBoxID3.innerHTML = `
    <h3>Price</h3>
    <p>Accommodation including breakfast costs DKK 60 per night.</p>
    `;

});

document.getElementById('btnID9').addEventListener('click', function(){
    
    articleBackground9.style.backgroundImage = "var(--gradient_purple)";
    articleBackground7.style.backgroundImage = "var(--gradient_white)";
    articleBackground8.style.backgroundImage = "var(--gradient_white)";
    otherElement17.style.color = "white";
    otherElement18.style.color = "white";
    otherElement13.style.color = "black";
    otherElement14.style.color = "black";
    otherElement15.style.color = "black";
    otherElement16.style.color = "black";

    txtBoxID3.innerHTML = `
    <h3>Sign-up</h3>
    <p>Click <strong><a href="sign-up.html#accommodation_sign_up" target="_blank">here</a></strong> to sign up for accommodation!</p>
    `;

}); */

document.getElementById('btnID10').addEventListener('click', function(){
    
    articleBackground10.style.backgroundImage = "var(--gradient_purple)";
    articleBackground11.style.backgroundImage = "var(--gradient_white)";
    articleBackground12.style.backgroundImage = "var(--gradient_white)";
    articleBackground13.style.backgroundImage = "var(--gradient_white)";
    articleBackground14.style.backgroundImage = "var(--gradient_white)";
    articleBackground15.style.backgroundImage = "var(--gradient_white)";
    otherElement19.style.color = "white";
    otherElement20.style.color = "white";
    otherElement21.style.color = "black";
    otherElement22.style.color = "black";
    otherElement23.style.color = "black";
    otherElement24.style.color = "black";
    otherElement25.style.color = "black";
    otherElement26.style.color = "black";
    otherElement27.style.color = "black";
    otherElement28.style.color = "black";
    otherElement29.style.color = "black";
    otherElement30.style.color = "black";

    txtBoxID4.innerHTML = `
    <h3>Royal Stage #1 </h3>
    <p>Royal Stage is GREAT! Here we have a gigantic scene, sound system and lights! The audience capacity is 1300! Dare to pose for this majestic scene!</p>
    `;

});

document.getElementById('btnID11').addEventListener('click', function(){
    
    articleBackground11.style.backgroundImage = "var(--gradient_purple)";
    articleBackground10.style.backgroundImage = "var(--gradient_white)";
    articleBackground12.style.backgroundImage = "var(--gradient_white)";
    articleBackground13.style.backgroundImage = "var(--gradient_white)";
    articleBackground14.style.backgroundImage = "var(--gradient_white)";
    articleBackground15.style.backgroundImage = "var(--gradient_white)";
    otherElement21.style.color = "white";
    otherElement22.style.color = "white";
    otherElement19.style.color = "black";
    otherElement20.style.color = "black";
    otherElement23.style.color = "black";
    otherElement24.style.color = "black";
    otherElement25.style.color = "black";
    otherElement26.style.color = "black";
    otherElement27.style.color = "black";
    otherElement28.style.color = "black";
    otherElement29.style.color = "black";
    otherElement30.style.color = "black";

    txtBoxID4.innerHTML = `
    <h3>The Slant #2</h3>
    <p>Slant is a wonderful club scene. It is a large venue with room for approx. 500 Audiences!</p>
    `;

});

document.getElementById('btnID12').addEventListener('click', function(){
    
    articleBackground12.style.backgroundImage = "var(--gradient_purple)";
    articleBackground10.style.backgroundImage = "var(--gradient_white)";
    articleBackground11.style.backgroundImage = "var(--gradient_white)";
    articleBackground13.style.backgroundImage = "var(--gradient_white)";
    articleBackground14.style.backgroundImage = "var(--gradient_white)";
    articleBackground15.style.backgroundImage = "var(--gradient_white)";
    otherElement23.style.color = "white";
    otherElement24.style.color = "white";
    otherElement19.style.color = "black";
    otherElement20.style.color = "black";
    otherElement21.style.color = "black";
    otherElement22.style.color = "black";
    otherElement25.style.color = "black";
    otherElement26.style.color = "black";
    otherElement27.style.color = "black";
    otherElement28.style.color = "black";
    otherElement29.style.color = "black";
    otherElement30.style.color = "black";

    txtBoxID4.innerHTML = `
    <h3>Scene Joule #3</h3>
    <p>Scene Joule is a scene built for the occasion in one of Theater Nordkraft's delicious theater halls. The scene, sound and light are top notch. There is room for approx. 150 audiences at Scene Joule.</p>
    `;

});

document.getElementById('btnID13').addEventListener('click', function(){
    
    articleBackground13.style.backgroundImage = "var(--gradient_purple)";
    articleBackground10.style.backgroundImage = "var(--gradient_white)";
    articleBackground11.style.backgroundImage = "var(--gradient_white)";
    articleBackground12.style.backgroundImage = "var(--gradient_white)";
    articleBackground14.style.backgroundImage = "var(--gradient_white)";
    articleBackground15.style.backgroundImage = "var(--gradient_white)";
    otherElement25.style.color = "white";
    otherElement26.style.color = "white";
    otherElement19.style.color = "black";
    otherElement20.style.color = "black";
    otherElement21.style.color = "black";
    otherElement22.style.color = "black";
    otherElement23.style.color = "black";
    otherElement24.style.color = "black";
    otherElement27.style.color = "black";
    otherElement28.style.color = "black";
    otherElement29.style.color = "black";
    otherElement30.style.color = "black";

    txtBoxID4.innerHTML = `
    <h3>Scene Watt #4</h3>
    <p>Scene Watt is also built for the apartment in one of Teater Nordkraft's delicious halls. There is room for approx. 150 audiences at Scene Watt.</p>
    `;

});

document.getElementById('btnID14').addEventListener('click', function(){
    
    articleBackground14.style.backgroundImage = "var(--gradient_purple)";
    articleBackground10.style.backgroundImage = "var(--gradient_white)";
    articleBackground11.style.backgroundImage = "var(--gradient_white)";
    articleBackground12.style.backgroundImage = "var(--gradient_white)";
    articleBackground13.style.backgroundImage = "var(--gradient_white)";
    articleBackground15.style.backgroundImage = "var(--gradient_white)";
    otherElement27.style.color = "white";
    otherElement28.style.color = "white";
    otherElement19.style.color = "black";
    otherElement20.style.color = "black";
    otherElement21.style.color = "black";
    otherElement22.style.color = "black";
    otherElement23.style.color = "black";
    otherElement24.style.color = "black";
    otherElement25.style.color = "black";
    otherElement26.style.color = "black";
    otherElement29.style.color = "black";
    otherElement30.style.color = "black";

    txtBoxID4.innerHTML = `
    <h3>Behind the house #5</h3>
    <p>The Scene Baghouse is in cozy and atmospheric rooms, which are daily part of the culture and music environment in Aalborg. This is where all unplugged artists play. There is room for approx. 60 audiences at the backyard stage.</p>
    `;

});

document.getElementById('btnID15').addEventListener('click', function(){
    
    articleBackground15.style.backgroundImage = "var(--gradient_purple)";
    articleBackground10.style.backgroundImage = "var(--gradient_white)";
    articleBackground11.style.backgroundImage = "var(--gradient_white)";
    articleBackground12.style.backgroundImage = "var(--gradient_white)";
    articleBackground13.style.backgroundImage = "var(--gradient_white)";
    articleBackground14.style.backgroundImage = "var(--gradient_white)";
    otherElement29.style.color = "white";
    otherElement30.style.color = "white";
    otherElement19.style.color = "black";
    otherElement20.style.color = "black";
    otherElement21.style.color = "black";
    otherElement22.style.color = "black";
    otherElement23.style.color = "black";
    otherElement24.style.color = "black";
    otherElement25.style.color = "black";
    otherElement26.style.color = "black";
    otherElement27.style.color = "black";
    otherElement28.style.color = "black";

    txtBoxID4.innerHTML = `
    <h3>The basement #6</h3>
    <p>It is located in the basement. It is a mega cool scene that fits perfectly with Hip Hop, electronic music, rap etc. The basement scene houses all electronic acts! The audience capacity is approx. 150th.</p>
    `;

});


