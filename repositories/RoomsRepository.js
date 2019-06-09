const api = require('../api')
const { buildParamsFromArray } = require('../utils/api')

class RoomsRepository {
    async all(city) {
        try{
            const searchResults = await api.get(`markers/${city}`)
            const params = buildParamsFromArray(
                searchResults.data.data
                .slice(0, 30)
                .map(data => data.id)
            )

            const cardResults = await api.get(`homecards_ids?${params}`)

            return cardResults.data.data.homecards
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = RoomsRepository
