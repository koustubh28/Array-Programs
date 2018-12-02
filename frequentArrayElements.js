var frequentElements = function(array) {
    var obj = {};
    for(var i = 0; i < array.length; i++) {
        var elem = array[i];
    
        if (obj[elem] === undefined) {
            obj[elem] = 1;
        } else {
            obj[elem]++ ;
        }
    }
    console.log(obj);
}

frequentElements( [1,2,1,2,3,4,3] );