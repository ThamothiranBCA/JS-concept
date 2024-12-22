
// let sunday = false;

// let check = sunday ? 'yes its leave':'no its not leave';

// console.log(check);

// let result = 35 <= 100 ? 'pass':'fail'
// console.log(result)

// var twoSum = function(nums, target) {
//     var index =[];
//     let len = nums.length;
//     console.log("length:" + len)
//     for(i=0; i<len;i++){
//         for( j = i+1;j<len;j++)
//         {
//             let add = nums[i] + nums [j];
//             if (add == target)
//             {
//                  index[0] = i;
//                  index[1] = j;
//                  console.log("print" + i + j)
//                 return index;
//             }
//         }
// }
// }
// twoSum =([ 3,2,4],6 )

for(let i=1; i<=15;i++) {
    if(i%3==0)  {
        if(i%5==0){console.log('"fizzbuzz"')}
        else console.log('"fizz"')
    }
    else if(i%5==0)
    {
    console.log('"buzz"')
    }
    else console.log(`"${i}"`)
    }