const { buildParamsFromArray } = require('../../utils/api')

describe('api utils tests', () => {
    describe('buildParamsFromArray', () => {
        it('it converts an array into url params', () => {
            const arr = [1, 2, 3]

            expect(buildParamsFromArray(arr)).toEqual("ids[]=1&ids[]=2&ids[]=3")
        })
    })
})
