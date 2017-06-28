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
        { name: "aceclubs",  img: "ace_of_clubs.png" , value : 0, ace: true},
        { name: "acediamonds",  img: "ace_of_diamonds.png" , value : 0, ace: true},
        { name: "acehearts",  img: "ace_of_hearts.png" , value : 0, ace: true},
        { name: "acespades",  img: "ace_of_spades.png" , value : 0, ace: true},   
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
    this.totalPlayerPoints = 0;
    this.totalComputerPoints = 0;
    this.shuffleCards();
};

Game.prototype.shuffleCards = function(){
    this.cards=_.shuffle(this.cards);
}

Game.prototype.checkAcesValue = function(cards){
    var tempPoints=0;
    var arrAces = [];

    cards.forEach(function(card){
        if (card.ace === true) { //push all aces to the temp array
        card.value=0;
        arrAces.push(card)
        }
    });

    cards.forEach(function(card){
        tempPoints+=card.value
    });
    //check ace value posibilities if you have 1 ace
    if (arrAces.length === 1) {
        if (tempPoints + 11 === 21) {
        arrAces[0].value = 11;
        }
        if (tempPoints + 1 === 21) {
        arrAces[0].value = 1;
        }
        if (tempPoints + 11 < 21) {
        arrAces[0].value = 11;
        }
        if (tempPoints + 11 > 21) {
        arrAces[0].value = 1;
        }
    } else if (arrAces.length > 1) { //check ace value posibilities if you have more than 1 ace
        for (var i = 0; i < arrAces.length; i++) {
        if (tempPoints + 11 < 21) {
            arrAces[i].value = 11;
        }
        if (tempPoints + 11 > 21) {
            arrAces[i].value = 1;
        }
        }
    }
    arrAces = [] //clear the temp array
}

Game.prototype.playerHand = function(card){
    this.totalPlayerPoints = 0;//set default value so the sum only affects to playerHand
    this.playerCards.push(card);
    this.cards.shift();
    this.playerCards.forEach(function(card){
      console.log(card);
      if (card.ace === true) {
        this.checkAcesValue(this.playerCards)
      }
    }.bind(this))
    for(var i = 0; i<this.playerCards.length; i++){
        this.totalPlayerPoints+=this.playerCards[i].value
    }
    console.log("array",this.playerCards)
    console.log('playerHand',this.totalPlayerPoints)
     
}

Game.prototype.computerHand = function(card){
    this.totalComputerPoints = 0;//set default value so the sum only affects to computerHand
    this.dealerCards.push(card);
    this.cards.shift();  
    this.dealerCards.forEach(function(card){
     if (card.ace === true) {
        this.checkAcesValue(this.dealerCards)
      }
    }.bind(this))
     for(var i = 0; i<this.dealerCards.length; i++){
        this.totalComputerPoints+=this.dealerCards[i].value
    }
    console.log('value computer ', this.dealerCards)
    console.log('computerHand',this.totalComputerPoints)
}

Game.prototype.calculateIfYouWinOrLose = function(){
    console.log('check if stand',checkIfStand)
    if(checkIfStand === false){
        if(this.totalPlayerPoints === 21){
        $('.win-alert').removeClass('alert-hide');  
        $('.win-alert').append('<h1 id="win-alert-tittle">You win!! Black Jack</h1>');  
        $('.win-alert').addClass('animated bounceIn');  
        }
        else if(this.totalPlayerPoints > 21){
        $('.lose-alert').removeClass('alert-hide');  
        $('.lose-alert').append('<h1 id="lose-alert-tittle">You lose!! exceeded 21</h1>');  
        $('.lose-alert').addClass('animated shake');
        }
    }

    if(checkIfStand === true){
        if(this.totalComputerPoints > 21){
            $('.win-alert').removeClass('alert-hide');  
            $('.win-alert').append('<h1 id="win-alert-tittle">You win!! Dealer Busted</h1>');  
            $('.win-alert').addClass('animated bounceIn');  
        }else if(this.totalPlayerPoints>this.totalComputerPoints ){
            $('.win-alert').removeClass('alert-hide');  
            $('.win-alert').append('<h1 id="win-alert-tittle">You win!! higher score</h1>');  
            $('.win-alert').addClass('animated bounceIn');  
        }else if(this.totalComputerPoints === 21){
            $('.lose-alert').removeClass('alert-hide');  
            $('.lose-alert').append('<h1 id="lose-alert-tittle">You lose!! Dealer has Black Jack</h1>');  
            $('.lose-alert').addClass('animated shake');
        }else if(this.totalPlayerPoints<this.totalComputerPoints){
            $('.lose-alert').removeClass('alert-hide');  
            $('.lose-alert').append('<h1 id="lose-alert-tittle">You lose!! Dealer has higher score</h1>');  
            $('.lose-alert').addClass('animated shake');
        }else if(this.totalComputerPoints === this.totalComputerPoints){
            $('.draw-alert').removeClass('alert-hide');  
            $('.draw-alert').append('<h1 id="draw-alert-tittle">Draw!!</h1>');  
            $('.draw-alert').addClass('animated fadeIn');
        }
    }   
     
}

var checkIfStand = false;

//jquery
$(document).ready(function(){
    var firstTimeComputerCards = true;
    var firstTimePlayerCards = true;

 function addingDomToComputerHand(){
    if(firstTimeComputerCards){
        firstTimeComputerCards = false;
        game.computerHand(game.cards[0]);
        $('.computer-deck').append('<div class="computer-card '+game.dealerCards[0].name+'"><img src="img/'+ game.dealerCards[0].img+'" alt=""></div>'); 
        game.computerHand(game.cards[0]);
        $('.computer-deck').append('<div class="computer-card img-back '+game.dealerCards[game.dealerCards.length-1].name+'"><img class="img-hide" src="img/'+ game.dealerCards[game.dealerCards.length-1].img+'" alt=""></div>');  
        $('img').addClass('animated fadeInRight');  
        $('.computer-deck .computer-card:odd').addClass('animated fadeInRight');      
    }else if(game.totalComputerPoints>=17){
        $('.img-back').removeClass("img-back");
        $('.img-hide').removeClass("img-hide");
        $('.computer-deck .computer-card:odd').addClass('animated flipInY');
        $('div.dealer-score > p').text(''+game.totalComputerPoints+'');
    }else{
        while(game.totalComputerPoints<17){
            $('.img-back').removeClass("img-back")
            $('.img-hide').removeClass("img-hide")
            $('.computer-deck .computer-card:odd').addClass('animated flipInY');
            game.computerHand(game.cards[0]);
            $('.computer-deck').append('<div class="computer-card '+game.dealerCards[game.dealerCards.length-1].name+'"><img src="img/'+ game.dealerCards[game.dealerCards.length-1].img+'" alt=""></div>'); 
            $('img').addClass('animated fadeInRight');
            $('div.dealer-score > p').text(''+game.totalComputerPoints+'');
        }       
    }
 }

  function addingDomToPlayerHand(){

    if(firstTimePlayerCards){
        firstTimePlayerCards = false;
        game.playerHand(game.cards[0]);
        $('.player-deck').append('<div class="computer-card '+game.playerCards[0].name+'"><img src="img/'+ game.playerCards[0].img+'" alt=""></div>');   
        game.playerHand(game.cards[0]);
        $('.player-deck').append('<div class="computer-card '+game.playerCards[game.playerCards.length-1].name+'"><img src="img/'+ game.playerCards[game.playerCards.length-1].img+'" alt=""></div>');   
        game.calculateIfYouWinOrLose();
        $('img').addClass('animated fadeInRight');
        $('div.player-score > p').text(''+ game.totalPlayerPoints+'');
           
    }else{
        game.playerHand(game.cards[0]);
        $('.player-deck').append('<div class="computer-card '+game.playerCards[game.playerCards.length-1].name+'"><img src="img/'+ game.playerCards[game.playerCards.length-1].img+'" alt=""></div>');  
        game.calculateIfYouWinOrLose();
        $('img').addClass('animated fadeInRight');
        $('div.player-score > p').text(''+ game.totalPlayerPoints+'');
         
    }
 }

    var game = new Game();
    //adding default cards when game starts
    addingDomToComputerHand();
    addingDomToPlayerHand();
    //when click button hit adds player card
    $('.button-hit').click( function(){
        addingDomToPlayerHand();
    });

    $('.button-stand').click( function(){
        checkIfStand = true   
        addingDomToComputerHand(); 
        game.calculateIfYouWinOrLose(); 
    });
      
      console.log(game.cards)
      console.log(game.playerCards);
      console.log(game.dealerCards); 
});
  