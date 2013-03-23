people = 
    me:
        name: "Nathan Zondlo"
        age: 23
        csKnowledge: "intermediate"
    you:
        name: "Katherine Deinert"
        age: 21
        csKnowledge: "A little"
        arrayOfStuffs: [42, 33, 54, 65, true, "derp"]  
    everyoneWeKnow:
        name: "Herp"
        age: 13
        csKnowlesge: "shit"
        anotherObject:
            someProperty: "This works"
            anotherProperty: "This also works"
            lastProperty:
                thisIsAnotherOne: 43
                thisIsTrue: true;
            anotherProp: "Herp"
        justForShits: false



displayObjectProperties = (obj1, numTabs = 0, tabs = "") -> 
    tabs += "    " for i in [1..numTabs] by 1
    for property of obj1
        if typeof obj1[property] is 'object'
            console.log tabs + property + ": "
            displayObjectProperties(obj1[property], numTabs += 1)
            numTabs -= 1
        else
            console.log tabs + property + ": " + obj1[property]      

displayObjectProperties(people)
