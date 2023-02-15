
module.exports = {

    // Generate random number
    getRandom(min, max) {
        const flotRandom = Math.random()
        const difference = max - min
        const randomDiference = Math.round(flotRandom * difference)
        const randomRange = randomDiference + min
        return randomRange
    },

    // Generate random string 
    randomString: function(length) {
        let result = [];
        let characters = 'abcdefghijklmnopqrstuvwxyz';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
        }
        return result.join('')
    }


}
