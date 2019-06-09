# spotahome-server

## Demo
A viewable demo of the app can be found [here](https://ants-spotahome-server.herokuapp.com/).

## Installation

To install, download the source code, or git clone the repository, and run `npm install`

## Run 

To run the app, run `npm start`

You can then view and interact with the GraphQL server via the playground.

Sample Rooms query:

```gql
query{
  rooms(city: "madrid") {
    id
    title
    description
    photoUrls{
      homecard
    }
    city
    monthlyPrice {
      fixedPrice
    }
    currencySymbol
  }
}

```

## Testing 

To test the app, run `npm test`

## Deployment 

Deploy with git via Heroku. Instructions are [here](https://devcenter.heroku.com/articles/git):
