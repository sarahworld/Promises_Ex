import {ASPADES,KSPADES} from './cards_links.js';

// 3
$( document ).ready(function(){
    console.log("Ready")
    
    let deckUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    let deck_id;
    let card;

    let singleDeckPromise = axios.get(deckUrl)

    singleDeckPromise.then(res => 
        singleDeckPromise
        .then(res => {
            deck_id = res.data.deck_id
            console.log("deck_id", deck_id)
        })
            
        )
    .catch(err => console.log(err))

    $('.card_button').on("click", function(){
        console.log("clicked")
        drawSingleCard()

    })
    
// 1

function drawSingleCard(){
 singleDeckPromise.then(res => 
    singleDeckPromise
    .then(res => { 
        deck_id = res.data.deck_id
        axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
        .then(res => {
            console.log(res.data.cards[0].value + " of " + res.data.cards[0].suit )
            card = `${res.data.cards[0].value.toLowerCase()}_of_${res.data.cards[0].suit.toLowerCase()}.png`
            console.log(card)
            $('img').attr("src", `./cards/${card}`);
            // $('img').removeClass("disabled").addClass("rotated");
            $('img').removeClass("disabled").toggleClass("rotated")
           
        })
        
    }))
.catch(err => console.log(err))
    
}
// 2

function twoCardsDraw(deckUrl){
    let firstCard;
    let secondCard;
    let singleDeckPromise = axios.get(deckUrl)

    singleDeckPromise
        .then(singleDeckPromise
        .then(res => {
            deck_id = res.data.deck_id
            
            axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)    
            .then(res => {
                firstCard = res.data.cards[0].value + " of " + res.data.cards[0].suit
                return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)})

            .then(res => {
                secondCard = res.data.cards[0].value + " of " + res.data.cards[0].suit
                console.log(firstCard, secondCard)
        })
        
            }))
            
        
        .catch(err => console.log(err))
    }


})












