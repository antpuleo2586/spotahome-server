const queryString = require('query-string');

const buildParamsFromArray = (data) => {
    return queryString.stringify({ids: data}, {arrayFormat: 'bracket'});
}

module.exports  = {
    buildParamsFromArray
}
