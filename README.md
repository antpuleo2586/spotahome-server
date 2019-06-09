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

## Notes

I decided to go with an Apollo GraphQL server because, when looking at the data output by the Spotahome API and what was needed by the client, it made sense to me to return only the required subset of data.
I wrote the code in a test driven way, with tests for the repository and utility functions.
