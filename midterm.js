// Solution #1

// Time complexity is O(n)
function findMissingNumber(array, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = array.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
  }
  
  // Test Cases
  console.log(findMissingNumber([5, 4, 1, 2], 5)); // output: 3
  console.log(findMissingNumber([9, 5, 3, 2, 6, 1, 7, 8, 10], 10)); // output: 4
  console.log(findMissingNumber([2, 3, 1, 5], 5)); //  output: 4
  console.log(findMissingNumber([1, 2, 3, 4, 5], 6)); // output: 6
  

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  // Solution #2

  // Time complexity is O(n):
  function findTwoSum(nums, target) {
    const indices = new Map();
    for (let i = 0; i < nums.length; i++) {
      const neededValue = target - nums[i];
      if (indices.has(neededValue)) {
        return [indices.get(neededValue), i];
      }
      indices.set(nums[i], i);
    }
    return [];
  }
  
  // Test Cases
  console.log(findTwoSum([1, 5, 2, 7], 8)); //  output: [0, 3]
  console.log(findTwoSum([20, 1, 5, 2, 11], 3)); //  output: [1, 3]
  console.log(findTwoSum([3, 2, 4], 6)); //  output: [1, 2]
  

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Solution 3 

// Time Complexiety is  O(n*2):

function createPermutations(str) {
    let permutations = [];
  
    function swap(strArr, index1, index2) {
      [strArr[index1], strArr[index2]] = [strArr[index2], strArr[index1]];
    }
  
    function generate(strArr, l, r) {
      if (l === r) {
        permutations.push(strArr.join(''));
      } else {
        for (let i = l; i <= r; i++) {
          swap(strArr, l, i);
          generate(strArr, l + 1, r);
          swap(strArr, l, i); 
        }
      }
    }
  
    generate(str.split(''), 0, str.length - 1);
    return permutations;
  }
  
  console.log(createPermutations("AB")); //  output: ["AB", "BA"]
  console.log(createPermutations("A")); //  output: ["A"]
  console.log(createPermutations("ABC")); //  output: ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]

  // Time complexiety for the same question O(n) :

  function generatePermutations(str) {
    let results = [];
    
    function permute(arr, memo = []) {
      if (arr.length === 0) {
        results.push(memo.join(''));
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), memo.concat(next));
        }
      }
    }
    
    permute(str.split(''));
    return results;
  }

  console.log(generatePermutations("AB")); //  output: ["AB", "BA"]
  console.log(generatePermutations("A")); //  output: ["A"]
  console.log(generatePermutations("ABC")); //  output: ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Solution #4

// Time complexity is O(n) :

function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  function checkIfCycleExists(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }
  
  // Test Cases
  let head1 = new ListNode("A");
  head1.next = new ListNode("B");
  head1.next.next = new ListNode("C");
  head1.next.next.next = head1;
  
  console.log(checkIfCycleExists(head1)); //  output: true
  
  let head2 = new ListNode(1);
  head2.next = new ListNode(2);
  head2.next.next = new ListNode(3);
  
  console.log(checkIfCycleExists(head2)); //  output: false
  
  let head3 = new ListNode(1);
  head3.next = new ListNode(2);
  head3.next.next = new ListNode(3);
  head3.next.next.next = head3;
  
  console.log(checkIfCycleExists(head3)); //  output: true

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Solution #5

  // Time complexity is O(n):

  function isValidParenthesis(s) {
    let stack = [];
    let openBrackets = '({[';
    let closeBrackets = ')}]';
    let map = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (let char of s) {
      if (openBrackets.includes(char)) {
        stack.push(char);
      } else if (closeBrackets.includes(char)) {
        let found = false;
        for (let i = stack.length - 1; i >= 0; i--) {
          if (stack[i] === map[char]) {
            stack.splice(i, 1); // O(n) operation
            found = true;
            break;
          }
        }
        if (!found) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  
  console.log(isValidParenthesis("()")); //  output: true
  console.log(isValidParenthesis("(){}[]")); //  output: true
  console.log(isValidParenthesis("([)]")); //  output: false
  console.log(isValidParenthesis("[({})]")); //  output: true
  

 
  
  