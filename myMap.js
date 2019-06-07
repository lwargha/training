function myMap(array, interatee, cb) {
    if (!Array.isArray(array)) {
        var err = new Error('Not an array')
        cb(err, null);
        return;
    }
    var newArray = [];
    var returnCount = 0;
    let errorFlag = false;

    for (let i = 0; i < array.length; i++) {
        interatee(array[i], function callback(err, res) {
            if (err) {
                errorFlag = true;
                return cb(err, null);
            }
            newArray[i] = res;
            returnCount++;
            if (returnCount === array.length && !errorFlag) {
                cb(null, newArray)
            }
        });
    }

}

module.exports = myMap;