// 21. Merge Two Sorted Lists

const mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    if (l1) {
        curr.next = l1;
    } else if (l2) {
        curr.next = l2;
    }

    return dummy.next;
};




// var mergeTwoLists = function(list1, list2) {
//     let combineArr = list1.concat(list2)
//     return combineArr.sort((a, b) => a - b)
// };

// console.log(mergeTwoLists([1,2,4], [5,2,4]));