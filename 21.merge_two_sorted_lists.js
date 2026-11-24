function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function (list1, list2) {
  if(list1==null) return list2;
  if(list2==null) return list1;

  if(list1.val<=list2.val)
  {
    list1.next = mergeTwoLists(list1.next,list2);
    return list1;
  }else{
    list2.next = mergeTwoLists(list1,list2.next);
    return list2;
  }
}

// var mergeTwoLists = function (list1, list2) {
//   let dummy= new ListNode(-1);
//   let current=dummy;

//   while(list1 && list2)
//   {
//     if(list1.val<list2.val)
//     {
//       current.next=list1;
//       list1=list1.next;
//     }
//     else
//     {
//       current.next=list2;
//       list2=list2.next;
//     }
//     current=current.next;
//   }

//   if(list1!=null)
//   {
//     current.next=list1;
//   }

//   if(list2!=null)
//   {
//     current.next=list2;
//   }

//   return dummy.next;
// }
