function Game(){
    this.cards = [
  		{ name: "2clubs",  img: "2_of_clubs.png" },
        { name: "2diamonds",  img: "2_of_diamonds.png" },
        { name: "2hearts",  img: "2_of_hearts.png" },
        { name: "2spades",  img: "2_of_spades.png" },
        { name: "3clubs",  img: "3_of_clubs.png" },
        { name: "3diamonds",  img: "3_of_diamonds.png" },
        { name: "3hearts",  img: "3_of_hearts.png" },
        { name: "3spades",  img: "3_of_spades.png" },
        { name: "4clubs",  img: "4_of_clubs.png" },
        { name: "4diamonds",  img: "4_of_diamonds.png" },
        { name: "4hearts",  img: "4_of_hearts.png" },
        { name: "4spades",  img: "4_of_spades.png" },
        { name: "5clubs",  img: "5_of_clubs.png" },
        { name: "5diamonds",  img: "5_of_diamonds.png" },
        { name: "5hearts",  img: "5_of_hearts.png" },
        { name: "5spades",  img: "5_of_spades.png" },
        { name: "6clubs",  img: "6_of_clubs.png" },
        { name: "6diamonds",  img: "6_of_diamonds.png" },
        { name: "6hearts",  img: "6_of_hearts.png" },
        { name: "6spades",  img: "6_of_spades.png" },
        { name: "7clubs",  img: "7_of_clubs.png" },
        { name: "7diamonds",  img: "7_of_diamonds.png" },
        { name: "7hearts",  img: "7_of_hearts.png" },
        { name: "7spades",  img: "7_of_spades.png" },
        { name: "8clubs",  img: "8_of_clubs.png" },
        { name: "8diamonds",  img: "8_of_diamonds.png" },
        { name: "8hearts",  img: "8_of_hearts.png" },
        { name: "8spades",  img: "8_of_spades.png" },
        { name: "9clubs",  img: "9_of_clubs.png" },
        { name: "9diamonds",  img: "9_of_diamonds.png" },
        { name: "9hearts",  img: "9_of_hearts.png" },
        { name: "9spades",  img: "9_of_spades.png" },
        { name: "10clubs",  img: "10_of_clubs.png" },
        { name: "10diamonds",  img: "10_of_diamonds.png" },
        { name: "10hearts",  img: "10_of_hearts.png" },
        { name: "10spades",  img: "10_of_spades.png" },
        { name: "aceclubs",  img: "ace_of_clubs.png" },
        { name: "acediamonds",  img: "ace_of_diamonds.png" },
        { name: "acehearts",  img: "ace_of_hearts.png" },
        { name: "acespades",  img: "ace_of_spades.png" },
        { name: "jackclubs",  img: "jack_of_clubs.png" },
        { name: "jackdiamonds",  img: "jack_of_diamonds.png" },
        { name: "jackhearts",  img: "jack_of_hearts.png" },
        { name: "jackspades",  img: "jack_of_spades.png" },
        { name: "queenclubs",  img: "queen_of_clubs.png" },
        { name: "queendiamonds",  img: "queen_of_diamonds.png" },
        { name: "queenhearts",  img: "queen_of_hearts.png" },
        { name: "queenspades",  img: "queen_of_spades.png" },
        { name: "kingclubs",  img: "king_of_clubs.png" },
        { name: "kingdiamonds",  img: "king_of_diamonds.png" },
        { name: "kinghearts",  img: "king_of_hearts.png" },
        { name: "kingspades",  img: "king_of_spades.png" },
    ]
  
    this.playerCards = [];
    this.dealerCards = [];
    this.shuffleCards();
};

Game.prototype.shuffleCards = function(){
  this.cards=_.shuffle(this.cards);
}