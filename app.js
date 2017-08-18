
function Store(minCustomersPerHour,maxCustomersPerHour,avgCookiesPerCust,storeLocation){
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.storeLocation = storeLocation;
  this.cookiesSoldPerHour = [];
  this.cookies = [];
  this.generateNumOfCookiesPurchased = function(){
    var numberOfCust = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour);
    var numberOfCookPurchased = parseInt(numberOfCust * this.avgCookiesPerCust);
    return numberOfCookPurchased;
  };
  this.genarateNumOfCookiesPurchasedPerHour = function(hours){
    for(var i = 0;i < hours.length; i++) {
      this.cookies.push( this.generateNumOfCookiesPurchased() );
    }
  };
};

var StoreList = function(){
  this.storeList = [];
  this.hours = [];
  this.initializeHours = function (){
    for(var i = 6;i < 12; i++) {
      this.hours.push ( i + 'am ');
    }
    this.hours.push( 12 + 'pm ');
    for(var i = 1; i < 9; i++){
      this.hours.push (i + 'pm ');
    }
  };
  this.addNewStore = function (minCustomersPerHour,maxCustomersPerHour,avgCookiesPerCust,storeLocation){
    if(this.hours.length == 0){
      this.initializeHours();
    }
    var newStore = new Store(minCustomersPerHour,maxCustomersPerHour,avgCookiesPerCust,storeLocation);
    newStore.genarateNumOfCookiesPurchasedPerHour(this.hours);
    this.storeList.push(newStore);
  };
  this.createTable = function (){
    var myTable = document.createElement('table');
    var firstRow = document.createElement('tr');
    firstRow.appendChild(document.createElement('th'));

    for(var i = 0; i < this.hours.length; i++){
      var hour = this.hours[i];
      var column = document.createElement('th');
      column.innerText = hour;
      firstRow.appendChild(column);
    }

    var column = document.createElement('th');
    column.innerText = 'Daily Location Total';
    firstRow.appendChild(column);
    myTable.appendChild(firstRow);
    var hourlyTotal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    for(var i = 0; i < this.storeList.length; i++){
      var column = document.createElement('th');
      var newRow = document.createElement('tr');
      column.innerText = this.storeList[i].storeLocation;
      newRow.appendChild(column);
      var total = 0;
      for(var j = 0; j < this.hours.length; j++){
        column = document.createElement('td');
        column.innerText = this.storeList[i].cookies[j];
        newRow.appendChild(column);
        total += this.storeList[i].cookies[j];
        hourlyTotal[j] += this.storeList[i].cookies[j];
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
    return myTable;
  };
};
var myStoreList = new StoreList();
myStoreList.addNewStore(23, 65, 6.3,'1st and Pike');
myStoreList.addNewStore(3, 24, 1.2,'Seatac Airport');
myStoreList.addNewStore(11, 38, 3.7,'Seattle Center');
myStoreList.addNewStore(20, 38, 2.3,'Capitol Hill');
myStoreList.addNewStore(2, 16, 4.7,'Alki');

var body = document.getElementsByTagName('body')[0];
var table = myStoreList.createTable();
table.id = 'myTable';
body.appendChild(table);
function processForm(event){
  event.preventDefault();
  // "this" applies to the element where the event was triggered.
  var minCustomersPerHour = parseInt(this.elements['minHourlyCustNumber'].value);
  var maxCustomersPerHour = parseInt(this.elements['maxHourlyCustNumber'].value);
  var avgCookiesPerCust = parseInt(this.elements['avgCookiesPerCust'].value);
  var storeLocation = this.elements['locationOfStore'].value;
  myStoreList.addNewStore(minCustomersPerHour,maxCustomersPerHour,avgCookiesPerCust,storeLocation);
  var body = document.getElementsByTagName('body')[0];
  var table = document.getElementById('myTable');
  body.removeChild(table);
  table = myStoreList.createTable();
  body.appendChild(table);
  // this.reset();
}
var form = document.getElementById('theForm');
form.addEventListener('submit', processForm);
