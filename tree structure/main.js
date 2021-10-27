// נתון עץ משפחתי של 5 דורות כל אחד יש לו רק ילד אחד:
// הדפס את השם של כולם רקורסיה.

// let family = {
//   name: "gen1",
//   child: {
//     name: "gen2",
//     child: {
//       name: "gen3",
//       child: {
//         name: "gen4",
//         child: {
//           name: "gen5",
//         },
//       },
//     },
//   },
// };

// function getName(someTree) {
//   console.log(someTree.name);
//   if (someTree.child) {
//     getName(someTree.child);
//   }
// }
// getName(family);

//*************************************** */
let family2 = {
  name: "grand",
  child: [
    {
      name: "dad1",
      child: [
        {
          name: "dad1Son1",
        },
      ],
    },
    {name: "dad2",
    child: [
      {
        name: "dad2Son1",
        child: [
          {
            name: "dad2Son1Garnd1",
          },
        ],
      },
      {
        name: "dad2Son1Garnd2",
        child: [
          {
            name: "gen2grand2",
            child: [
              {
                name: "gen2grand3",
              },
            ],
          },
        ],
      },
    ],}
  ],

};

function getName2(someTree) {
  console.log(someTree.name);                     //!מדפיסה את השם של האובייקט
  if (someTree.child) {                //!בודק האם יש ילד במידה וכן ממשיך
    for (let item of someTree.child) {  //!הללואה הזאת רצה על המערך של הילדים עצמם ועבור כל ילד שקיים היא מפעילה את הפונקציה 
      getName2(item);
    }
  }
}
getName2(family2);
