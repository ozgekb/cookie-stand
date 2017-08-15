'use strict';
function store(minHourlyCustNumber,maxHourlyCustNumber,avgCookiesPerCust,locationOfStore){
  this.minHourlyCustNumber = minHourlyCustNumber;
  this.maxHourlyCustNumber = maxHourlyCustNumber;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.hours = [];
  this.cookies = [];
  this.locationOfStore = locationOfStore;
  this.numberOfCustHourly = function(){
    var numberOfCust = Math.floor(Math.random() * (this.maxHourlyCustNumber - this.minHourlyCustNumber) + this.minHourlyCustNumber);
    return numberOfCust;
  };
  this.amountOfCookPurchasedHourly = function(){
    var numberOfCookPurchasedHourly = parseInt(this.numberOfCustHourly() * this.avgCookiesPerCust);
    return numberOfCookPurchasedHourly;
  };
  this.hoursAndCookies = function(){
    for(var i = 6;i < 12; i++) {
      this.hours.push ( i + 'am: ');
      this.cookies.push( this.amountOfCookPurchasedHourly() );
    }
    this.hours.push( 12 + 'pm: ');
    this.cookies.push( this.amountOfCookPurchasedHourly() );
    for(var i = 1; i < 9; i++){
      this.hours.push (i + 'pm: ');
      this.cookies.push( this.amountOfCookPurchasedHourly() );
    }
  };
};
var myFirstAndPike = new store(23, 65, 6.3,'1st and Pike');
var mySeaTacAirport = new store(3, 24, 1.2,'Seatac Airport');
var mySeattleCenter = new store(11, 38, 3.7,'Seattle Center');
var myCapitolHill = new store(20, 38, 2.3,'Capitol Hill');
var myAlki = new store(2, 16, 4.7,'Alki');
var myInstanceArray = [myFirstAndPike,mySeaTacAirport,mySeattleCenter,myCapitolHill,myAlki];
var body = document.getElementsByTagName('body')[0];
for (var i = 0; i < 5; i++) {
  var h = document.createElement('h1');
  h.appendChild(document.createTextNode(myInstanceArray[i].locationOfStore));
  body.appendChild(h);
  var list = document.createElement('ul');
  myInstanceArray[i].hoursAndCookies();
  var total = 0;
  for(var j = 0; j < 15; j++){
    var li = document.createElement('li');
    li.innerText = (myInstanceArray[i]).hours[j] + myInstanceArray[i].cookies[j] + ' cookies';
    total += myInstanceArray[i].cookies[j];
    list.appendChild(li);
  }
  var liTotal = document.createElement('li');
  liTotal.innerText = 'Total: ' + total + ' cookies';
  list.appendChild(liTotal);
  body.appendChild(list);
}
