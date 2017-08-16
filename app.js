'use strict';
function Store(minHourlyCustNumber,maxHourlyCustNumber,avgCookiesPerCust,locationOfStore){
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
      this.hours.push ( i + 'am ');
      this.cookies.push( this.amountOfCookPurchasedHourly() );
    }
    this.hours.push( 12 + 'pm ');
    this.cookies.push( this.amountOfCookPurchasedHourly() );
    for(var i = 1; i < 9; i++){
      this.hours.push (i + 'pm ');
      this.cookies.push( this.amountOfCookPurchasedHourly() );
    }
  };
};
var myFirstAndPike = new Store(23, 65, 6.3,'1st and Pike');
var mySeaTacAirport = new Store(3, 24, 1.2,'Seatac Airport');
var mySeattleCenter = new Store(11, 38, 3.7,'Seattle Center');
var myCapitolHill = new Store(20, 38, 2.3,'Capitol Hill');
var myAlki = new Store(2, 16, 4.7,'Alki');
var storeList = [myFirstAndPike,mySeaTacAirport,mySeattleCenter,myCapitolHill,myAlki];

for( var i in storeList){
  storeList[i].hoursAndCookies();
}

var body = document.getElementsByTagName('body')[0];
var myTable = document.createElement('table');
body.appendChild(myTable);

var firstRow = document.createElement('tr');
firstRow.appendChild(document.createElement('th'));

for(var i = 0; i < storeList[0].hours.length; i++){
  var hour = storeList[0].hours[i];
  var column = document.createElement('th');
  column.innerText = hour;
  firstRow.appendChild(column);
}

var column = document.createElement('th');
column.innerText = 'Daily Location Total';
firstRow.appendChild(column);
myTable.appendChild(firstRow);
var hourlyTotal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

for(var i = 0; i < storeList.length; i++){
  var column = document.createElement('th');
  var newRow = document.createElement('tr');
  column.innerText = storeList[i].locationOfStore;
  newRow.appendChild(column);
  var total = 0;
  for(var j = 0; j < storeList[i].hours.length; j++){
    column = document.createElement('td');
    column.innerText = storeList[i].cookies[j];
    newRow.appendChild(column);
    total += storeList[i].cookies[j];
    hourlyTotal[j] += storeList[i].cookies[j];
  }
  column = document.createElement('td');
  column.innerText = total;
  newRow.appendChild(column);
  myTable.appendChild(newRow);
}

var newRow = document.createElement('tr');
var column = document.createElement('th');
column.innerText = 'Hourly Total';
newRow.appendChild(column);
var total = 0;
for (var i = 0; i < hourlyTotal.length; i++){
  column = document.createElement('td');
  column.innerText = hourlyTotal[i];
  newRow.appendChild(column);
  total += hourlyTotal[i];
}
column = document.createElement('td');
column.innerText = total;
newRow.appendChild(column);
myTable.appendChild(newRow);


/*for (var i = 0; i < 5; i++) {
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
}*/
