const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        return this._meal = mealToCheck;
      } else {
        console.log('Please enter the meal');
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number'){
        return this._price = priceToCheck;
      } else {
        console.log('Please enter a valid price using a number');
      }
    },
  
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today’s Special is ${this._meal} for ${this._price}!`;
      } else {
        return 'Meal or price was not set correctly!';
      }
    }
  }
  
  menu.meal = 'turon';
  menu.price = 42;
  console.log(menu);