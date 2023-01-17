// ! This function removes duplicates 
//! elements from an array 
// ! and return the array length and arrays

function removeDuplicates (nums) {
    const uniqueArray = [...new Set(nums)]
    let i = 0
    uniqueArray.forEach(num => {
        nums[i] = num
        i++

        
    })
    console.log(uniqueArray)
    return uniqueArray.length
}



let nums = [1,1,2]
const numbers = removeDuplicates(nums)
console.log(numbers)