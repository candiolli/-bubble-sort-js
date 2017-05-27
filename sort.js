function sort(list) {

    for (var i = 0; i < list.length; i++) { 
        var valAnt = list[i-1];
        var valAux = list[i];

        if (valAux < valAnt){
            list[i-1]=valAux;
            list[i]=valAnt;
            sort(list);
        }
    }

	return list;
}

function testSortSmallArray() {
    console.log('testSortBigArray');
    var list = [6,5,7,3,2,1,4];
    var sorted = sort(list);
    var validate = true;
    for (var i = 0; i < list.length; i++) {
        if (list[i] != i+1) {
            validate = false;
        }
    }
    console.log('sorted', sorted);
    console.log('testSortBigArray', validate);
}

function testSortBigArray() {
    console.log('testSortBigArray');
    var list = [15,8,6,5,7,3,10,9,2,1,4,11,14,12,16,13];
    var sorted = sort(list);
    var validate = true;
    for (var i = 0; i < list.length; i++) {
        if (list[i] != i+1) {
            validate = false;
        }
    }
    console.log('sorted', sorted);
    console.log('testSortBigArray', validate);
}

function testFailSortIntervalBigArray() {
    console.log('testSortBigArray');
    var list = [15,,8,6,5,7,3,10,9,2,1,4,,11,14,,12,16,13];
    var sorted = sort(list);
    var validate = true;
    for (var i = 0; i < list.length; i++) {
        if (list[i] != i+1) {
            validate = false;
        }
    }
    console.log('sorted', sorted);
    console.log('testSortBigArray', validate);
}


