module.exports = `
      type Query {
        rooms(city: String!): [Room]
      }
      type Room {
        id: ID
        title: String
        description: String
        photoUrls: PhotoUrls
        city: String
        monthlyPrice: Price
        currencySymbol: String
      }
      type PhotoUrls {
        homecardHidpi: String
        homecard: String
      }
      type Price {
        type: String
        fixedPrice: Int
        minimumPrice: Int
      }
`
