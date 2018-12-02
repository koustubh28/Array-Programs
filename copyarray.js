function copyArrayToAnother() {
    var array1 = [1,2,3,4];
    var array2 = [];

    for(var i = 0; i < array1.length; i++) {
        array2 = array1[i];
        console.log(array2);
    }
}

copyArrayToAnother();