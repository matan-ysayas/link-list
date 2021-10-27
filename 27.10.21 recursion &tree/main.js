let numbersArray=[]
function getNumber(){
let userNumber=Number(prompt("enter number")); 
if(userNumber){                                 //!תנאי שבודדק שרק מספרים נכנסים
    numbersArray.push(userNumber)
}
if(numbersArray.length<3) getNumber() //!תנאי שמעיל את הפונקציה במידה ועורך המערך קטן מ3 
}
getNumber();
console.log(numbersArray);
 //!מבנה  נתונים עץ מבוסס על איררכיה