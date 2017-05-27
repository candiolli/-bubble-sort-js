function findDuplicate(list, p) {
    var value = list[p];
    var ref = p+1;
    var exists = false;

    for (var i = ref; i < list.length; i++) { 
        
        var valueAnt = list[i];
        if (value == valueAnt) {
            exists = true;
            return value;
        } 

    }

    if(!exists) {
        return findDuplicate(list, p+1);
    }
}

function testFindDuplicate() {
    var list = [8,6,5,7,3,10,9,3,2,1,4];
    var result = findDuplicate(list, 0);
    console.log('testFindDuplicate result:' + result +', assert:', result != null ? true : false);
}



