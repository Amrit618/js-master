
var arr = [1,2,3,4,5,6,7,7,9,11]
const missingNumber = () => {
    for(let i=0;i<arr.length;i++){
        if (arr[i]+1!=arr[i+1] && arr[i+1]){
            return `${arr[i+1]} should have been ${arr[i]+1} at index ${arr[i+1]}`
        }
    }
    return 'no error';
}

console.log(missingNumber());