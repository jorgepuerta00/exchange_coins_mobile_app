const ApiEndPoints = {
    countries: {
      getCountries: 'https://restcountries.com/v2/all?fields=name,currencies,flags',
    },
    rates: {
      getRates: 'http://api.exchangeratesapi.io/v1/latest?access_key=51b361b1b2102e9838c9aed9e9157a7f',
    },
    wallets: {
      getWallets: 'https://demo5046413.mockable.io/wallets',
    }
  };
  
  export {
    ApiEndPoints
  };