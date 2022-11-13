function addTokens(input, tokens) {
    
    if (typeof input !== 'string') {
        throw Error ('Input should be a string')
    }
    else if(input.length < 6) {
        throw Error ('Input should have at least 6 characters')
    }

    for (var i=0 ; i < tokens.length; i++) {
        if (typeof tokenName !== 'string') {
            throw Error ('Invalid array format')
        }
    }

    if (input.includes('...') !== true) {
        return input;
    }

    if (input.includes('...') == true) {
        
    }
    return input;

}

const app = {
    addTokens: addTokens
}

module.exports = app;
