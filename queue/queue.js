//!  הוא מבנה נתונים העובד באופן דומה למערך אך ניתן להשמה גם על ידיד אובייקט.האלמנט הראשון שנכנס הוא האלמנט הראשון שיוצא יש לו שתי מתודות עיקריות -מתודה להכנסה אל התור ומתודה הוצאה מהתור.


// function queue(){
//    this.data=new Array;

//    this.enQueue=function(value){
//        this.data.unshift(value);

//    };

//    this.deQueue=function(value){
//        this.data.pop(value);
//    };
   
// };

// let result=new queue();

// result.enQueue(1);
// result.enQueue(2);
// result.enQueue(3);
// result.enQueue(4);


// result.deQueue();

// console.log(result.data);




// בנה אפליקציה לניהול תורים התחל עם 4 אנשים מראש:
 //טופס בו המשתמש מכניס את שמו ונכנס לתור.
// כל 2 שניות מגיע תורו של משתמש אחר(הדפס את השם שלו על אלמנט H1).
 
 
const userName=document.getElementById("userName");
const addBtn=document.getElementById("addBtn");
let first=document.getElementById("first");


function queue(){
        this.data=new Array;
    
        this.enQueue=function(value){
            this.data.unshift(value);
    
        };
    
        this.deQueue=function(value){
           return this.data.pop(value);
        };
       
     };
    
     let users=new queue();
    
     users.enQueue("matan");
     users.enQueue("avi");
     users.enQueue("yosi");
     users.enQueue("ben");

     console.log(users.data);

     addBtn.onclick=()=>{
        users.enQueue(userName.value) ;
        console.log(users.data);
     }





     
     setInterval(()=>{
        
        first.innerText=users.deQueue();

     },2000)







