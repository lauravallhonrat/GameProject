function Game(){
    this.cards = [
  		{ name: "2clubs",  img: "2_of_clubs.png" , value : 2 },
        { name: "2diamonds",  img: "2_of_diamonds.png" , value : 2},
        { name: "2hearts",  img: "2_of_hearts.png" , value : 2},
        { name: "2spades",  img: "2_of_spades.png" , value : 2},
        { name: "3clubs",  img: "3_of_clubs.png" , value : 3},
        { name: "3diamonds",  img: "3_of_diamonds.png" , value : 3},
        { name: "3hearts",  img: "3_of_hearts.png" , value : 3},
        { name: "3spades",  img: "3_of_spades.png" , value : 3},
        { name: "4clubs",  img: "4_of_clubs.png" , value : 4},
        { name: "4diamonds",  img: "4_of_diamonds.png" , value : 4},
        { name: "4hearts",  img: "4_of_hearts.png" , value : 4},
        { name: "4spades",  img: "4_of_spades.png" , value : 4},
        { name: "5clubs",  img: "5_of_clubs.png" , value : 5},
        { name: "5diamonds",  img: "5_of_diamonds.png" , value : 5},
        { name: "5hearts",  img: "5_of_hearts.png" , value : 5},
        { name: "5spades",  img: "5_of_spades.png" , value : 5},
        { name: "6clubs",  img: "6_of_clubs.png" , value : 6},
        { name: "6diamonds",  img: "6_of_diamonds.png" , value : 6},
        { name: "6hearts",  img: "6_of_hearts.png" , value : 6},
        { name: "6spades",  img: "6_of_spades.png" , value : 6},
        { name: "7clubs",  img: "7_of_clubs.png" , value : 7},
        { name: "7diamonds",  img: "7_of_diamonds.png" , value : 7},
        { name: "7hearts",  img: "7_of_hearts.png" , value : 7},
        { name: "7spades",  img: "7_of_spades.png" , value : 7},
        { name: "8clubs",  img: "8_of_clubs.png" , value : 8},
        { name: "8diamonds",  img: "8_of_diamonds.png" , value : 8},
        { name: "8hearts",  img: "8_of_hearts.png" , value : 8},
        { name: "8spades",  img: "8_of_spades.png" , value : 8},
        { name: "9clubs",  img: "9_of_clubs.png" , value : 9},
        { name: "9diamonds",  img: "9_of_diamonds.png" , value : 9},
        { name: "9hearts",  img: "9_of_hearts.png" , value : 9},
        { name: "9spades",  img: "9_of_spades.png" , value : 9},
        { name: "10clubs",  img: "10_of_clubs.png" , value : 10},
        { name: "10diamonds",  img: "10_of_diamonds.png" , value : 10},
        { name: "10hearts",  img: "10_of_hearts.png" , value : 10},
        { name: "10spades",  img: "10_of_spades.png" , value : 10},
        { name: "aceclubs",  img: "ace_of_clubs.png" , value : 11},
        { name: "acediamonds",  img: "ace_of_diamonds.png" , value : 11},
        { name: "acehearts",  img: "ace_of_hearts.png" , value : 11},
        { name: "acespades",  img: "ace_of_spades.png" , value : 11},   
        { name: "jackclubs",  img: "jack_of_clubs.png" , value : 10},
        { name: "jackdiamonds",  img: "jack_of_diamonds.png" , value : 10},
        { name: "jackhearts",  img: "jack_of_hearts.png" , value : 10},
        { name: "jackspades",  img: "jack_of_spades.png" , value : 10},
        { name: "queenclubs",  img: "queen_of_clubs.png" , value : 10},
        { name: "queendiamonds",  img: "queen_of_diamonds.png" , value : 10},
        { name: "queenhearts",  img: "queen_of_hearts.png" , value : 10},
        { name: "queenspades",  img: "queen_of_spades.png" , value : 10},
        { name: "kingclubs",  img: "king_of_clubs.png" , value : 10},
        { name: "kingdiamonds",  img: "king_of_diamonds.png" , value : 10},
        { name: "kinghearts",  img: "king_of_hearts.png" , value : 10},
        { name: "kingspades",  img: "king_of_spades.png" , value : 10},
    ]
  
    this.playerCards = [];
    this.dealerCards = [];
    this.cardValue = 0;
    this.totalPoints = 0;
    this.shuffleCards();

};

// function(){
//             if(this.playerHand(this.cards.value) === 10 || this.computerHand(this.cards.value) === 10){
//                 return 1
//             }else{
//                 return 11
//             }

Game.prototype.shuffleCards = function(){
    this.cards=_.shuffle(this.cards);
}

Game.prototype.getCardValue = function(){
    return this.cards.value = this.cardValue;
}

Game.prototype.playerHand = function(card){
    this.totalPoints = 0;//set default value so the sum only affects to playerHand
    this.playerCards.push(card);
    this.cards.shift();
    this.getCardValue();
    for(var i = 0; i<this.playerCards.length; i++){
        this.totalPoints+=this.playerCards[i].value
    }
    console.log('playerHand',this.totalPoints)
}
Game.prototype.computerHand = function(card){
    this.totalPoints = 0;//set default value so the sum only affects to computerHand
    this.dealerCards.push(card);
    this.cards.shift();
    this.getCardValue();
     for(var i = 0; i<this.dealerCards.length; i++){
        this.totalPoints+=this.dealerCards[i].value
    }
    console.log('computerHand',this.totalPoints)
   
}

// Game.prototype.calculateCardValues = function(){
//      this.playerHand(card);
//      this.computerHand(card);
      
   
    
    

// }
//computerhand treurel del click, i que mostri una carta nomes començar el joc, 
//player amb el primer boto demana cartes, i el segon boto es planta i computer pilla cartes fins el valor 17
// manipular els valors de les cartes, si el valor supera 21 perds, si es igual guanyes, calcular el valor de cada un dels jugadors


//jquery
$(document).ready(function(){

 var game = new Game();
$('.wrapper').on('click', '.button1', function(){
      game.playerHand(game.cards[0]);

      //setTimeout(function(){ 
      game.computerHand(game.cards[0]);
    
      //}, 1000);
      console.log(game.cards)
      console.log(game.playerCards);
      console.log(game.dealerCards);

  
    });
});
  