// Dependencies
const express = require('express');
const morgan = require('morgan');

const app = express();

/* SETUP MIDDLEWARE */

app.use(morgan('dev'));
app.use(express.json());

/* Breweries Data */
const breweries = [
  {
    id: 9094,
    obdb_id: 'bnaf-llc-austin',
    name: 'Bnaf, LLC',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Austin',
    state: 'Texas',
    county_province: null,
    postal_code: '78727-7602',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: '2018-07-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 9180,
    obdb_id: 'boulder-beer-co-boulder',
    name: 'Boulder Beer Co',
    brewery_type: 'regional',
    street: '2880 Wilderness Pl',
    address_2: null,
    address_3: null,
    city: 'Boulder',
    state: 'Colorado',
    county_province: null,
    postal_code: '80301-5401',
    country: 'United States',
    longitude: '-105.2480158',
    latitude: '40.026439',
    phone: null,
    website_url: null,
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 9754,
    obdb_id: 'clermont-brewing-company-clermont',
    name: 'Clermont Brewing Company',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Clermont',
    state: 'Florida',
    county_province: null,
    postal_code: '34711-2108',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: '2018-08-11T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 10217,
    obdb_id: 'dixie-brewing-co-inc-new-orleans',
    name: 'Dixie Brewing Co Inc.',
    brewery_type: 'contract',
    street: '6221 S Claiborne Ave Ste 101',
    address_2: null,
    address_3: null,
    city: 'New Orleans',
    state: 'Louisiana',
    county_province: null,
    postal_code: '70125-4191',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '5048228711',
    website_url: null,
    updated_at: '2018-08-11T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 10486,
    obdb_id: 'epidemic-ales-concord',
    name: 'Epidemic Ales',
    brewery_type: 'micro',
    street: '150 Mason Circle Stes I&J',
    address_2: null,
    address_3: null,
    city: 'Concord',
    state: 'California',
    county_province: null,
    postal_code: '94520',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '9255668850',
    website_url: 'http://www.epidemicales.com',
    updated_at: '2018-08-11T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 11039,
    obdb_id: 'goose-island-philadelphia-philadelphia',
    name: 'Goose Island Philadelphia',
    brewery_type: 'brewpub',
    street: '1002 Canal St',
    address_2: null,
    address_3: null,
    city: 'Philadelphia',
    state: 'Pennsylvania',
    county_province: null,
    postal_code: '19123',
    country: 'United States',
    longitude: '-75.13506341',
    latitude: '39.9648491',
    phone: null,
    website_url: null,
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 11235,
    obdb_id: 'grits-brewing-chamblee',
    name: 'GRITS Brewing',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Chamblee',
    state: 'Georgia',
    county_province: null,
    postal_code: '30341-2024',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: '2018-08-11T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 11767,
    obdb_id: 'ironbark-brewery-jackson',
    name: 'Ironbark Brewery',
    brewery_type: 'micro',
    street: '2610 Kibby Rd',
    address_2: null,
    address_3: null,
    city: 'Jackson',
    state: 'Michigan',
    county_province: null,
    postal_code: '49203-4908',
    country: 'United States',
    longitude: '-84.43762976',
    latitude: '42.2188971',
    phone: '5177487988',
    website_url: null,
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 11968,
    obdb_id: 'king-fox-brewery-hialeah',
    name: 'King Fox Brewery',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Hialeah',
    state: 'Florida',
    county_province: null,
    postal_code: '33014-5231',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: '2018-08-11T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 12023,
    obdb_id: 'la-funke-brewing-bulverde',
    name: 'La Funke Brewing',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Bulverde',
    state: 'Texas',
    county_province: null,
    postal_code: '78163-4156',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '2104602083',
    website_url: 'http://www.lafunke.com',
    updated_at: '2018-07-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 12294,
    obdb_id: 'long-way-brewing-radford',
    name: 'Long Way Brewing',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Radford',
    state: 'Virginia',
    county_province: null,
    postal_code: '24141-1403',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: '2018-07-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 12459,
    obdb_id: 'mallory-brewing-houston',
    name: 'Mallory Brewing',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Houston',
    state: 'Texas',
    county_province: null,
    postal_code: '77018',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: '2018-07-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
];

/* SETUP ROUTES */

// app.get('/breweries', (req, res) => {
//   res.json({ breweries });
// });

app.get('/breweries/:id', (req, res) => {
  const userId = req.params.id;
  let foundItem = breweries.filter((brewery) => brewery.id === Number(userId));

  res.json(foundItem);
});

app.get('/breweries', (req, res) => {
  console.log('this is the req', req.query);
  const type = req.query.brewery_type;

  if (type) {
    let filterteredBrewery = breweries.filter((brewery) =>
      brewery.brewery_type.includes(type)
    );
    res.json({ breweries: filterteredBrewery });
  } else {
    res.json({ breweries });
  }
});

/* START SERVER */

const port = 3030;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
