const array = [1, 5, 6, 10, 13, 14, 18, 20, 25, 30, 40, 50];

function binarySearch(someArray, num) {    
  if (someArray.length == 0) {                   //!בדיקה האם המערך תקין במידה ולא הפונקציה יוצאת ומחזירה לא נמצא
    console.log(`${num} is not found`);
    return false;
  }

  let mid = someArray[Math.floor(someArray.length / 2)];//! מוצא את האיבר האמצעי במערך הנתון
  let leftArray = someArray.slice(0, someArray.length / 2);//! המערך השמאלי מאיבר הראשון ועד האמצעי
  let rightArray = someArray.slice(someArray.length / 2);//!המערך הימני מהאיבר האמצעי ועד הסוף

  if (num == mid || num==leftArray[leftArray.length-1] ||num==rightArray[0]) { //! במידה והמספר שאנחנו מחפשים שווה לאיבר האמצעי או לאיבר האחרון במערך השמאלי או לאיבר הראשון במערך הימיני הפונקציה מחזירה שהוא קיים ויוצאת
    console.log(`${num} is true `);
    return true;
  }

  if (num >leftArray[leftArray.length-1]) {//!  במידה והמספר שהכנסנו  קטן מהאיבר האחרון במערך השמאלי מפעילים את הפונקציה על מערך הימני
    return binarySearch(rightArray, num);
  } else {
    return binarySearch(leftArray, num);
  }
}

binarySearch(array, 18);
