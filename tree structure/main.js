// נתון עץ משפחתי של 5 דורות כל אחד יש לו רק ילד אחד:
// הדפס את השם של כולם רקורסיה.

let family = {
  name: "gen1",
  child: {
    name: "gen2",
    child: {
      name: "gen3",
      child: {
        name: "gen4",
        child: {
          name: "gen5",
        },
      },
    },
  },
};

function getName(someTree) {
  console.log(someTree.name);
  if (someTree.child) {
    getName(someTree.child);
  }
}
getName(family);

//*************************************** */
let family2 = {
  name: "gen1",
  child: [
    {
      name: "gen1son1",
      child: [
        {
          name: "gen1Garnd1",
        },
      ],
    },
    { name: "gen1son2" },
  ],
  name: "gen2",
  child: [
    {
      name: "gen2son1",
      child: [
        {
          name: "gen2Garnd1",
        },
      ],
    },
    { name: "gen2son2", 
    child: [
        { 
            name: "gen2grand2",
        child:[{
            name:"gen2grand3"}] 
        }] },
  ],
};

function getName2(someTree) {
    console.log(someTree);
    if (someTree.child) {
        for(let item of someTree.child){
            getName2(item);
        }
      
    }
  }
  getName2(family2);