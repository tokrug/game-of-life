function rangeFilter() {
    return function(n) {
        var res = [];
        for (var i = 0; i < n; i++) {
            res.push(i);
        }
        return res;
    };
}

angular.module('gameOfLife')
    .filter('range', rangeFilter);