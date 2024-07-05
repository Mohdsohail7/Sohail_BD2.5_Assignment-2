let express = require("express");
let app = express();

const cors = require("cors");
app.use(cors());

// array of stocks
let stocks = [
  {
    id: 1,
    name: "reliance industries",
    price: 2500,
    growth: 3.5,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 2,
    name: "hdfc bank",
    price: 1800,
    growth: 4.2,
    industry: "finance",
    exchange: "bse",
  },
  {
    id: 3,
    name: "icici bank",
    price: 1600,
    growth: 5.1,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 4,
    name: "tata consultancy services",
    price: 3200,
    growth: 2.9,
    industry: "finance",
    exchange: "bse",
    price: 1900,
  },
  {
    id: 5,
    name: "infosys",
    price: 2900,
    growth: 3.8,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 6,
    name: "dr. reddy's laboratories",
    price: 2100,
    growth: 4.7,
    industry: "pharma",
    exchange: "bse",
  },
  {
    id: 7,
    name: "sun pharmaceutical",
    price: 2300,
    growth: 3.2,
    industry: "pharma",
    exchange: "nse",
  },
  {
    id: 8,
    name: "cipla",
    growth: 2.6,
    price: 2100,
    exchange: "bse",
    industry: "pharma",
  },
  {
    id: 9,
    name: "ntpc",
    price: 1200,
    growth: 4.1,
    industry: "power",
    exchange: "nse",
  },
  {
    id: 10,
    name: "power grid corporation",
    price: 1500,
    growth: 3.4,
    industry: "power",
    exchange: "bse",
  },
  {
    id: 11,
    name: "adani power",
    price: 2200,
    growth: 5.3,
    industry: "power",
    exchange: "nse",
  },
  {
    id: 12,
    name: "lupin",
    price: 2000,
    growth: 4.5,
    industry: "pharma",
    exchange: "bse",
  },
  {
    id: 13,
    name: "axis bank",
    price: 1750,
    growth: 2.8,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 14,
    name: "state bank of india",
    price: 1450,
    growth: 3.6,
    industry: "finance",
    exchange: "bse",
  },
  {
    id: 15,
    name: "bajaj finance",
    price: 2650,
    growth: -2.9,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 16,
    name: "dr. reddy's laboratories",
    price: 1950,
    growth: 4.3,
    industry: "pharma",
    exchange: "bse",
  },
  {
    id: 17,
    name: "biocon",
    price: 1850,
    growth: 3.9,
    industry: "pharma",
    exchange: "nse",
  },
  {
    id: 18,
    name: "torrent power",
    price: 1600,
    growth: 2.4,
    industry: "power",
    exchange: "bse",
  },
  {
    id: 19,
    name: "tata power",
    price: 1750,
    growth: 4.0,
    industry: "power",
    exchange: "nse",
  },
  {
    id: 20,
    name: "jsw energy",
    price: 1450,
    growth: 3.1,
    industry: "power",
    exchange: "bse",
  },
];
    
    

// function to sort stock based on price high to low Or low to high
function sortStockHighToLowOrLowToHighPrice(stock1, stock2, priceOrd) {
  if (priceOrd === "high-to-low") {
    return stock2.price - stock1.price;
  } else {
    return stock1.price - stock2.price;
  }
}
// Endpoint 1: Get the stocks sorted by pricing
// Write an Express code snippet to sort the stocks based on the pricing low-to-high or high-to-low.
app.get('/stocks/sort/pricing', (req, res) => {
  //let pricing = req.query.pricing;
  let stockCopy = stocks.slice();
  let sortedStock = stockCopy.sort(sortStockHighToLowOrLowToHighPrice)

  res.json({stocks: sortedStock});
});

// function to sort stock based on growth  high to low Or low to high growth
function sortStockHighToLowOrLowToHighGrowth(stock1, stock2, growth) {
  if (growth === "high-to-low") {
    return stock2.growth - stock1.growth;
  } else {
    return stock1.growth - stock2.growth;
  }
}

// Endpoint 2: Get the stocks sorted based on their Growth
app.get('/stocks/sort/growth', (req, res) => {
let growth = stocks.slice();
  let result = growth.sort(sortStockHighToLowOrLowToHighGrowth);

  res.json({stocks: result})
});

//function to sort stock based on alphabetical order
function sortStockAlphabeticalOrder(stock1, stock2) {
  return stock1.name.localeCompare(stock2.name);
}

// Endpoint 3: Get the stocks sorted based on the Stock Name (Alphabetically)
app.get('/stocks/sort/name', (req, res) => {
  let name = stocks.slice();
  name.sort(sortStockAlphabeticalOrder);

  res.json({stocks: name});
});

// function to filter based on NSE and BSE
function filterByExchange(stock, exchange) {
  return stock.exchange.toLowerCase() === exchange.toLowerCase();
}

// Endpoint 4: Filter the stocks based on the 2 Stock Exchange (NSE. and BSE)
app.get('/stocks/filter/exchange', (req, res) => {
  let exchange = req.query.exchange;
  let result = stocks.filter(stock => filterByExchange(stock, exchange));

  res.json({stocks: result});
});

// function to filter stock based on industry
function filterByIndustry(stock, industry) {
  return stock.industry.toLowerCase() === industry.toLowerCase();
}

// Endpoint 5: Filter the stocks based on the Industrial Sector.
app.get('/stocks/filter/industry', (req, res) => {
  let industry = req.query.industry;
  let result = stocks.filter(stock => filterByIndustry(stock, industry));

  res.json({stocks: result });
});

// Endpoint 6: Send all available stocks
app.get('/stocks', (req, res) => {
  res.json({stocks: stocks});
});

const port = 8000;

// home route
app.get('/', (req, res) => {
  res.send(`<h1>This is my <u>BD2.5 </u> Assignment-2</h1>`)
});

app.listen(port, () => {
  console.log("server is running on the port number is: " + port);
})