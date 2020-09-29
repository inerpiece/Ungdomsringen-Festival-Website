

/*Changing Card Article background color on click*/

/* document.getElementById('btnID1').addEventListener('click', function(){
    let cardArticle = document.getElementById('cardID1');
    cardArticle.style.backgroundColor = "purple";
}); */



/* CONNECTING WP */

const apiUrl = "http://antmar104.dreamhosters.com/wp-json/wp/v2/";
const apiKey = "z5lhhDKXDYe7A0sHyxifG23HTbGKi40R";

let bandSection = document.querySelector(".band_list");
let bandArticle = document.querySelectorAll(".band_card");

let dayFilter; //the day by which we are going to filter
let eventPosts; //all the posts from WP
const bandId = 6;


const programmeCatId = 1;
const bandCatID = 4;

let BandList;
let ProgrammeList;

function renderProgramme(){
    ProgrammeList.forEach(Programme => {
        let Band = findBandByID(Programme.acf.band.ID);
        //console.log(Band);
        //console.log(Band.acf.picture);
        let newProgramme = document.createElement('article');
        if (Programme.acf.date == "2020-01-17"){
            /*we put day1 class and day2 so that we can use it to filter stuff with the buttons*/
            newProgramme.innerHTML = `
            <div class="card_container day1">
            <article class="band_card ">
                <div class="flex band_info">
                    <p>${Programme.acf.band.post_title}</p>
                    <p>${Band.acf.genre}</p>
                </div>
                <img src="${Band.acf.picture}">
                <div class="flex band_info">
                    <p>${Programme.acf.date}<br />${Programme.acf.time}</p>
                    <p>${Programme.acf.stage_name}</p>
                </div>
            </article>
            </div>
            `;
        } else {
            newProgramme.innerHTML = `
            <div class="card_container day2">
            <article class="band_card ">
                <div class="flex band_info">
                    <p>${Programme.acf.band.post_title}</p>
                    <p>${Band.acf.genre}</p>
                </div>
                <img src="${Band.acf.picture}">
                <div class="flex band_info">
                    <p>${Programme.acf.date}<br />${Programme.acf.time}</p>
                    <p>${Programme.acf.stage_name}</p>
                </div>
            </article>
            </div>
            `;
        }
        ;
        //newBand.value = Band.id;
        //newBand.innerHTML = Band.acf.band.post_title;
        bandSection.appendChild(newProgramme);
    })
    
};
//const postsId;

function errorMessage(msg) {
    console.log(msg);
}


function getProgrammeFromWP(){
    const xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            try {
                ProgrammeList = JSON.parse(this.responseText);
                getBandsFromWP();
                
            } catch (error) {
                errorMessage(`Error parsing JSON: ${error}`);
            }
        };
        if (this.responseText == 4 && this.status >400){
            errorMessage('An error has occured while getting the data. Please try again later!');
        };
    };
    xhttp.open('GET',`${apiUrl}posts?categories=${programmeCatId}&per_page=25`,true);
    xhttp.setRequestHeader('Authorization', `Bearer ${apiKey}`);
    xhttp.send();
}

function getBandsFromWP(){
    const xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            try {
                BandList = JSON.parse(this.responseText);
                console.log(BandList);
                renderProgramme();
                
            } catch (error) {
                errorMessage(`Error parsing JSON: ${error}`);
            }
        };
        if (this.responseText == 4 && this.status >400){
            errorMessage('An error has occured while getting the data. Please try again later!');
        };
    };
    xhttp.open('GET',`${apiUrl}posts?categories=${bandCatID}&per_page=25`,true);
    xhttp.setRequestHeader('Authorization', `Bearer ${apiKey}`);
    xhttp.send();
}

function findBandByID(id){
    //console.log(`find band ${id}`);
    //console.log(BandList);
    let band;
    BandList.forEach(Band => {
        //console.log(Band.id);
        //console.log(id == Band.id);
        if(id == Band.id){
            band = JSON.parse(JSON.stringify(Band));
            
        }
    });
    if (band){
        return band;
    } else {
        return null;
    }
};

getProgrammeFromWP();


/* Buttons */


document.getElementById("btn_show1").addEventListener('click', function(){
    let cardResult = document.querySelectorAll('.card_container');
    
    cardResult.forEach(card => {
            if (card.classList.contains('none')) {
            card.classList.remove('none');
        }
    });

    
    this.style.backgroundColor = "var(--purple)";
    this.style.color = "var(--white)";
    this.style.border = "2px solid var(--white)";

    let btn2 = document.getElementById("btn_show2");
    btn2.style.backgroundColor = "var(--white)";
    btn2.style.color = "var(--black)";
    btn2.style.border = "2px solid var(--black)";

    let btn3 = document.getElementById("btn_show3");
    btn3.style.backgroundColor = "var(--white)";
    btn3.style.color = "var(--black)";
    btn3.style.border = "2px solid var(--black)";

});

document.getElementById("btn_show2").addEventListener('click', function(){
    let cardResult = document.querySelectorAll('.card_container');

    cardResult.forEach(card => {
        if (card.classList.contains('day1')) {
        card.classList.remove('none');
    } else {
        card.classList.add('none');
    }});

    this.style.backgroundColor = "var(--purple)";
    this.style.color = "var(--white)";
    this.style.border = "2px solid var(--white)";

    let btn1 = document.getElementById("btn_show1");
    btn1.style.backgroundColor = "var(--white)";
    btn1.style.color = "var(--black)";
    btn1.style.border = "2px solid var(--black)";

    let btn3 = document.getElementById("btn_show3");
    btn3.style.backgroundColor = "var(--white)";
    btn3.style.color = "var(--black)";
    btn3.style.border = "2px solid var(--black)";
});

document.getElementById("btn_show3").addEventListener('click', function(){
    let cardResult = document.querySelectorAll('.card_container');

    cardResult.forEach(card => {
        if (card.classList.contains('day2')) {
        card.classList.remove('none');
    } else {
        card.classList.add('none');
    }});

    this.style.backgroundColor = "var(--purple)";
    this.style.color = "var(--white)";
    this.style.border = "2px solid var(--white)";

    let btn1 = document.getElementById("btn_show1");
    btn1.style.backgroundColor = "var(--white)";
    btn1.style.color = "var(--black)";
    btn1.style.border = "2px solid var(--black)";

    let btn2 = document.getElementById("btn_show2");
    btn2.style.backgroundColor = "var(--white)";
    btn2.style.color = "var(--black)";
    btn2.style.border = "2px solid var(--black)";
});






/*card_article

btn_purple*/
