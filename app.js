'use strict';
var firstAndPike = {
  minHourlyCustNumber: 23,
  maxHourlyCustNumber:65,
  avgCookiesPerCust :6.3,
  hours : [],
  cookies:[],
  numberOfCustHourly :function(){
    var numberOfCust = Math.floor(Math.random() * (this.maxHourlyCustNumber - this.minHourlyCustNumber) + this.minHourlyCustNumber);
    return numberOfCust;
  },
  locationOfStore : '1st and Pike',
  amountOfCookPurchasedHourly: function(){
    var numberOfCookPurchasedHourly = parseInt(this.numberOfCustHourly() * this.avgCookiesPerCust);
    return numberOfCookPurchasedHourly;
  },
  hoursAndCookies:function(){
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
  },
};

var seaTacAirport = {
  minHourlyCustNumber: 23,
  maxHourlyCustNumber:65,
  avgCookiesPerCust :6.3,
  hours : [],
  cookies :[],
  numberOfCustHourly :function(){
    var numberOfCust = Math.floor(Math.random() * (this.maxHourlyCustNumber - this.minHourlyCustNumber) + this.minHourlyCustNumber);
    return numberOfCust;
  },
  locationOfStore : 'Seatac Airport',
  amountOfCookPurchasedHourly: function(){
    var numberOfCookPurchasedHourly = parseInt(this.numberOfCustHourly() * this.avgCookiesPerCust);
    return numberOfCookPurchasedHourly;
  },
  hoursAndCookies:function(){
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
  },
};
var seattleCenter = {
  minHourlyCustNumber: 23,
  maxHourlyCustNumber:65,
  avgCookiesPerCust :6.3,
  hours : [],
  cookies:[],
  numberOfCustHourly :function(){
    var numberOfCust = Math.floor(Math.random() * (this.maxHourlyCustNumber - this.minHourlyCustNumber) + this.minHourlyCustNumber);
    return numberOfCust;
  },
  locationOfStore : 'Seattle Center',
  amountOfCookPurchasedHourly: function(){
    var numberOfCookPurchasedHourly = parseInt(this.numberOfCustHourly() * this.avgCookiesPerCust);
    return numberOfCookPurchasedHourly;
  },
  hoursAndCookies:function(){
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
  },
};
var capitolHill = {
  minHourlyCustNumber: 23,
  maxHourlyCustNumber:65,
  avgCookiesPerCust :6.3,
  hours : [],
  cookies:[],
  numberOfCustHourly :function(){
    var numberOfCust = Math.floor(Math.random() * (this.maxHourlyCustNumber - this.minHourlyCustNumber) + this.minHourlyCustNumber);
    return numberOfCust;
  },
  locationOfStore : 'Capitol Hill',
  amountOfCookPurchasedHourly: function(){
    var numberOfCookPurchasedHourly = parseInt(this.numberOfCustHourly() * this.avgCookiesPerCust);
    return numberOfCookPurchasedHourly;
  },
  hoursAndCookies:function(){
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
  },
};
var alki = {
  minHourlyCustNumber: 23,
  maxHourlyCustNumber:65,
  avgCookiesPerCust :6.3,
  hours : [],
  cookies:[],
  numberOfCustHourly :function(){
    var numberOfCust = Math.floor(Math.random() * (this.maxHourlyCustNumber - this.minHourlyCustNumber) + this.minHourlyCustNumber);
    return numberOfCust;
  },
  locationOfStore : 'Alki',
  amountOfCookPurchasedHourly: function(){
    var numberOfCookPurchasedHourly = parseInt(this.numberOfCustHourly() * this.avgCookiesPerCust);
    return numberOfCookPurchasedHourly;
  },
  hoursAndCookies:function(){
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
  },
};
var locations = [firstAndPike, seaTacAirport,seattleCenter,capitolHill,alki];
var body = document.getElementsByTagName('body')[0];

for (var i = 0; i < 2; i++) {
  var h = document.createElement('h1');
  h.appendChild(document.createTextNode(locations[i].locationOfStore));
  body.appendChild(h);
  var list = document.createElement('ul');
  locations[i].hoursAndCookies();
  var total = 0;
  for(var j = 0; j < 15; j++){
    var li = document.createElement('li');
    li.innerText = (locations[i]).hours[j] + locations[i].cookies[j] + ' cookies';
    total += locations[i].cookies[j];
    list.appendChild(li);
  }
  var liTotal = document.createElement('li');
  liTotal.innerText = 'Total: ' + total + ' cookies';
  list.appendChild(liTotal);
  body.appendChild(list);
}
