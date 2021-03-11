let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
const mergeTwoList = (integerArray) => {
    let oddArray = []
    let evenArray = []
    let mergeArray=[]
    //your code here

    for(var i=0; i < integerArray.length; i++){
        if(integerArray[i]%2==0) {
            evenArray.push(integerArray[i])
            }
        else {
            oddArray.push(integerArray[i])
        }

        }

       for(var i=0; i < oddArray.length; i++){
        mergeArray.push(oddArray[i])
    }
     for(var i=0; i < evenArray.length; i++){
        mergeArray.push(evenArray[i])
    }
    return mergeArray
}

console.log(mergeTwoList(list_of_numbers))
