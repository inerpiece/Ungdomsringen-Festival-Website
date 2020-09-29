
const articleBackground1 = document.getElementById('cardID1');
const articleBackground2 = document.getElementById('cardID2');
const articleBackground3 = document.getElementById('cardID3');
const articleBackground4 = document.getElementById('cardID4');
const articleBackground5 = document.getElementById('cardID5');
const articleBackground6 = document.getElementById('cardID6');
const otherElement1 = document.querySelector('h3');
const otherElement2 = document.querySelector('i');
const otherElement3 = document.querySelector('#cardID2 h3');
const otherElement4 = document.querySelector('#cardID2 i');
const otherElement5 = document.querySelector('#cardID3 h3');
const otherElement6 = document.querySelector('#cardID3 i');
const otherElement7 = document.querySelector('#cardID4 h3');
const otherElement8 = document.querySelector('#cardID4 i');
const otherElement9 = document.querySelector('#cardID5 h3');
const otherElement10 = document.querySelector('#cardID5 i');
const otherElement11 = document.querySelector('#cardID6 h3');
const otherElement12 = document.querySelector('#cardID6 i');
const txtBoxID1 = document.getElementById('textBoxID1');
const txtBoxID2 = document.getElementById('textBoxID2');

window.onload = activeDefault();

function activeDefault(){
    /*Case 1*/
    articleBackground1.style.backgroundImage = "var(--gradient_purple)";

    otherElement1.style.color = "white";
    otherElement2.style.color = "white";
 

    txtBoxID1.innerHTML = `
    <h3>Social Group</h3>
    <p>As a youth organization we aim to create and carry out activities for young people through clubs and after-school clubs. Also social interaction helps young children to start to develop their sense of self, and also start to learn what others expect from them.</p>
    `;

    /*Case 4*/
    articleBackground4.style.backgroundImage = "var(--gradient_purple)";
    otherElement7.style.color = "white";
    otherElement8.style.color = "white";
   

    txtBoxID2.innerHTML = `
    <h3>Resting Area</h3>
    <p>We offer you a spacious bar where you can go with your friends and have a cold juice or water and have a break from your performance. There you get to meet more of your peers. </p>
    `;

};

document.getElementById('btnID1').addEventListener('click', function(){
    
    articleBackground1.style.backgroundImage = "var(--gradient_purple)";
    articleBackground2.style.backgroundImage = "var(--gradient_white)";
    articleBackground3.style.backgroundImage = "var(--gradient_white)";
    otherElement1.style.color = "white";
    otherElement2.style.color = "white";
    otherElement3.style.color = "black";
    otherElement4.style.color = "black";
    otherElement5.style.color = "black";
    otherElement6.style.color = "black";

    txtBoxID1.innerHTML = `
    <h3>Social Group</h3>
    <p>As a youth organization we aim to create and carry out activities for young people through clubs and after-school clubs. Also social interaction helps young children to start to develop their sense of self, and also start to learn what others expect from them.</p>
    `;

});


document.getElementById('btnID2').addEventListener('click', function(){
    
    articleBackground2.style.backgroundImage = "var(--gradient_purple)";
    articleBackground1.style.backgroundImage = "var(--gradient_white)";
    articleBackground3.style.backgroundImage = "var(--gradient_white)";
    otherElement4.style.color = "white";
    otherElement3.style.color = "white";
    otherElement1.style.color = "black";
    otherElement2.style.color = "black";
    otherElement5.style.color = "black";
    otherElement6.style.color = "black";

    txtBoxID1.innerHTML = `
    <h3>Development</h3>
    <p>Ungdomsringen aims to work with competence development amongst leaders and employees working within the youth area. This can provide a common way to harmonize, select and develop talent.  The benefits are clear for employees and managers, and ultimately, the organization.</p>
    `;
    
});

document.getElementById('btnID3').addEventListener('click', function(){
    
    articleBackground3.style.backgroundImage = "var(--gradient_purple)";
    articleBackground1.style.backgroundImage = "var(--gradient_white)";
    articleBackground2.style.backgroundImage = "var(--gradient_white)";
    otherElement5.style.color = "white";
    otherElement6.style.color = "white";
    otherElement1.style.color = "black";
    otherElement2.style.color = "black";
    otherElement3.style.color = "black";
    otherElement4.style.color = "black";

    txtBoxID1.innerHTML = `
    <h3>Politics</h3>
    <p>Ungdomsringen aims to obtain political focus on the conditions of young people’s leisure life. We also want to give the empowerment of young people to speak and express their thoughts and be well versed with the political influences in the national area. </p>
    `;
    
});

document.getElementById('btnID4').addEventListener('click', function(){
    
    articleBackground4.style.backgroundImage = "var(--gradient_purple)";
    articleBackground5.style.backgroundImage = "var(--gradient_white)";
    articleBackground6.style.backgroundImage = "var(--gradient_white)";
    otherElement7.style.color = "white";
    otherElement8.style.color = "white";
    otherElement9.style.color = "black";
    otherElement10.style.color = "black";
    otherElement11.style.color = "black";
    otherElement12.style.color = "black";

    txtBoxID2.innerHTML = `
    <h3>Resting Area</h3>
    <p>We offer you a spacious bar where you can go with your friends and have a cold juice or water and have a break from your performance. There you get to meet more of your peers. </p>
    `;

});

document.getElementById('btnID5').addEventListener('click', function(){
    
    articleBackground5.style.backgroundImage = "var(--gradient_purple)";
    articleBackground4.style.backgroundImage = "var(--gradient_white)";
    articleBackground6.style.backgroundImage = "var(--gradient_white)";
    otherElement9.style.color = "white";
    otherElement10.style.color = "white";
    otherElement7.style.color = "black";
    otherElement8.style.color = "black";
    otherElement11.style.color = "black";
    otherElement12.style.color = "black";

    txtBoxID2.innerHTML = `
    <h3>Games</h3>
    <p>In the resting area you can grab a stick and play pool table with your friends and also have a competition with other bands. </p>
    `;

});

document.getElementById('btnID6').addEventListener('click', function(){
    
    articleBackground6.style.backgroundImage = "var(--gradient_purple)";
    articleBackground4.style.backgroundImage = "var(--gradient_white)";
    articleBackground5.style.backgroundImage = "var(--gradient_white)";
    otherElement11.style.color = "white";
    otherElement12.style.color = "white";
    otherElement7.style.color = "black";
    otherElement8.style.color = "black";
    otherElement9.style.color = "black";
    otherElement10.style.color = "black";

    txtBoxID2.innerHTML = `
    <h3>Workshop</h3>
    <p>Ungdomsringen is hosting a workshop for young adults on how to present themselves on stage and how to grow as a group. That includes different games and activities that will make your visit memorable.</p>
    `;

});