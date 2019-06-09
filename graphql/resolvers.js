const RoomsRepository = require('../repositories/RoomsRepository');

const roomsRepository = new RoomsRepository()

module.exports = {
    Query: {
        rooms(parent, { city }, context) {
            return roomsRepository.all(city);
        },
    },
};
