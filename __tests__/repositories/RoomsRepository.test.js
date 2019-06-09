const moxios = require('moxios')
const api = require('../../api')
const RoomsRepository = require('../../repositories/RoomsRepository');

describe('Rooms Repository', () => {

    beforeEach(() => {
        moxios.install(api)
    })

    afterEach(() => {
        moxios.uninstall(api)
    })

    it('should get all rooms for a given city', async () => {
        const expectedResults = [
            {
                id: 1
            },
            {
                id: 2
            },
            {
                id: 3
            }
        ]
        moxios.stubRequest(/markers.*/, {
            status: 200,
            response: {
                data: [1, 2, 3],
            }
        })
        moxios.stubRequest(/homecards_ids.*/, {
            status: 200,
            response: {
                data: {
                    homecards: expectedResults,
                },
            }
        })

        const roomsRepository = new RoomsRepository()
        const actualResults = await roomsRepository.all('some city')

        expect(actualResults).toEqual(expectedResults)
    })

})
