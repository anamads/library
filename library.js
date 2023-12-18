class Media {
  constructor(title){
this._title = title;
this._isCheckedOut = false;
this._ratings= [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
return ratingsSum / this.ratings.length;
  }

  addRating(value) {
    this.ratings.push(value);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._pages = pages;
    this._author = author;
  }

  get pages() {
return this._pages;
  }

  get author() {
    return this._author;
  }
}

class Movie extends Media {
  constructor(title, director, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get runTime() {
    return this._runTime;
  }
  get director() {
    return this._director;
  }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(10);
historyOfEverything.addRating(3);
historyOfEverything.addRating(7);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie ('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
