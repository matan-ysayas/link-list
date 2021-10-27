//!רשימה מוכר כאוביקט,רשימה מקושרת הוא מבנה מידע בוא כל אלמנט יש לו הפנייה לאובייקט שאחרייו,המתודות בוא מוגבלות.


class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

class LinkedList {
    head;
    tail;
    constructor() {
        this.head = null
        this.tail=null
    };

        addToTail (element){
        let addNod=new ListNode(element);;
        if(this.head==null){
            this.head=addNod;
            this.tail=addNod;   
    
        }else{
            this.tail.next=addNod;
            this.tail=addNod;
         
        };
    
    
    };


    addToHead(value){
        let addNod=new ListNode(value);
        if(this.head==null){
            this.head=addNod;
            this.tail=addNod;   
        }
        else{
            addNod.next=this.head;
            this.head=addNod;
        };

    }
    
};




let list=new LinkedList();

console.log(list);

list.addToTail(3);
list.addToTail(8);
list.addToTail(8567);
list.addToTail(567);

list.addToHead(100000);



console.log(list);
       


