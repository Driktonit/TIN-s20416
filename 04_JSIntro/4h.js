function secondGreatestAndLowestElements(arr)
{
	for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    var result = [arr [arr.length - 2], arr [1]];
    return result;
}

var arr = [1,4,62,61,6,8,2,5,7,3,6,9];

console.log(secondGreatestAndLowestElements(arr));