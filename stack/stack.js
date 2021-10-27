//!  הוא מבנה נתונים מבוסס מערך אשר בה עובד העיקרון המידע הראשון שנכנס יוצא אחרון והמידע האחרון שנכנס יוצא ראשון (כמו מחסנית

// function stack(){
//     this.info=new Array;

//     this.push=function(value){
//         this.info.push(value);
//     }

//     this.pop=function(value){
//         this.info.pop(value);
//     }
// };

// const stack1=new stack();
// stack1.push("a");
// stack1.push("b");

// console.log(stack1);














































function stack() {
  this.data = new Array();

  this.add = function (value) {
    if (this.data.length < 4) {
      this.data.push(value);
    }
    else{
        console.error("to long");
    }
  };

  this.remove = function () {
    this.data.pop();
  };
}

const someArray = new stack();

someArray.add(25);
someArray.add(30);
someArray.add(40);
someArray.add(40);
someArray.add(40);
someArray.add(40);
someArray.add(40);
someArray.remove();

console.log(someArray.data);
