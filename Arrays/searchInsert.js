// ! Given a sorted array of distinct integers and a target value, 
// ! return the index if the target is found. 
// ! If not, return the index where it would be if it were inserted in order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function searchInsert(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(nums[mid] === target){
            return mid
        }
        else if(nums[mid] < target) {
            left = mid + 1
        }
        else {
            right = mid - 1
        
        }
    }
    return left
}

let num = [1, 2, 3, 4, 5 ]
let target1 = 3
let target2 = 0
let target3 = 7
const first = searchInsert(num, target1)
const second = searchInsert(num, target2)
const third = searchInsert(num, target3)

console.log('first: ', first)
console.log('==================')
console.log('second: ', second)
console.log('==================')
console.log('third: ', third)
