const removeDuplicates = function(arr) {
    return [...new Set(arr)];
};

module.exports = removeDuplicates;
