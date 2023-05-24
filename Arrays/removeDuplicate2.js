// [1,1,1,2,2,3,3,3,4]

// my solution--> works for any number of duplicates allowed in the array.
function removeDuplicates2(arr, maxDuplicateCount) {
    
    let fixedPtr = 1;
    let count = 1;
    
    for(let currPos = 1; currPos < arr.length; currPos++) {
        if ((arr[currPos] == arr[currPos - 1]) && count <= maxDuplicateCount ) {
            count += 1;
        }

        if ((arr[currPos] != arr[currPos - 1]) && count <= maxDuplicateCount){
            count = 1;
        }

        if ((arr[currPos] != arr[currPos-1]) && count > maxDuplicateCount) {
            count = 1;
        }

        arr[fixedPtr] = arr[currPos];

        count <= maxDuplicateCount && fixedPtr++;
    }

    console.log(arr);
    return fixedPtr;
}

function removeDuplicates2alt(arr) {
    if (arr.length == 2) {
        return 2;
    }
    let k = 2;

    for(let currPos = 2; currPos < arr.length; currPos++){
        if(arr[k - 2] != arr[currPos] || arr[currPos] != arr[k-1] ) {
            arr[k] = arr[currPos];
            k++;
        }
    }

    console.log(arr);
    return k;
}

console.log(removeDuplicates2([1,1,1,2,2,3,3,3,3,4,4,4,4,4,4,5], 4));