var displayAllProperties, people;

people = {
  me: {
    name: "Nathan Zondlo",
    age: 23,
    csKnowledge: "intermediate"
  },
  you: {
    name: "Chris Carrington",
    age: 21,
    csKnowledge: "Advanced",
    arrayOfStuffs: [42, 33, 54, 65, true, "derp"]
  },
  everyoneWeKnow: {
    name: "Herp",
    age: 13,
    csKnowlesge: "shit",
    anotherObject: {
      someProperty: "This works",
      anotherProperty: "This also works",
      lastProperty: {
        thisIsAnotherOne: 43,
        thisIsTrue: true
      },
      anotherProp: "Herp"
    },
    justForShits: false
  }
};

displayAllProperties = function(obj1, numTabs, tabs) {
  var i, property, _i, _results;
  if (numTabs == null) numTabs = 0;
  if (tabs == null) tabs = "";
  for (i = _i = 1; _i <= numTabs; i = _i += 1) {
    tabs += "\t";
  }
  _results = [];
  for (property in obj1) {
    if (typeof obj1[property] === 'object') {
      console.log(tabs + property + ": ");
      displayAllProperties(obj1[property], numTabs += 1);
      _results.push(numTabs -= 1);
    } else {
      _results.push(console.log(tabs + property + ": " + obj1[property]));
    }
  };
  return _results;
};

displayAllProperties(people);
