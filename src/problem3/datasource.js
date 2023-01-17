// your code here:
class Listing {
  constructor(price) {
    this.token = price.pair.substring(0, 3);
    this.counter = price.pair.substring(3);
    // returns the token or counter currency as string
    this.buy = price.buy;
    // returns the price to buy as int
    this.sell = price.sell;
    // returns the price to sell as int
    this.pair = price.pair;
    // returns the token and counter as a string pair
  }
  mid = () => {
    return (this.buy + this.sell) / 2;
  };
  // returns the mid point between price to buy and sell as int

  quote = () => {
    return this.counter;
  };
  // returns the counter currency as string
}

class Datasource {
  constructor(url) {
    this.url = url;
  }

  getPrices() {
    return fetch(this.url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data.data.prices.map((pricedata) => {
          return new Listing(pricedata);
        });
      });
  }
}

const ds = new Datasource("https://interview.switcheo.com/test.json");

ds.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });

/* TESTING URL */

/* The following commented code snippet should throw a type error. */

/* 
const dstest = new Datasource("faulty.url"); 

dstest.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });
*/
