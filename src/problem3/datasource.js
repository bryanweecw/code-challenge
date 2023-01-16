// your code here:
class Listing {
  constructor(price) {
    this.token = price.pair.substring(0, 3);
    this.counter = price.pair.substring(3);
    this.buy = price.buy;
    this.sell = price.sell;
    this.pair = price.pair;
  }

  mid = () => {
    return (this.buy + this.sell) / 2;
  };

  quote = () => {
    return this.counter;
  };
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
