require('dotenv').config()
const { ApolloServer, gql } = require('apollo-server')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({ port: 3000, /* DEV: 4000 */}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
