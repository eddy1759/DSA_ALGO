/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == val){
            nums.splice(i, 1)
            i--
        }
       
    }
    console.log(nums.length)
    console.log(nums)
};

const number  = [0,1,2,2,3,0,4,2]
const val = 2
const answer = removeElement(number, val)
console.log(answer)
