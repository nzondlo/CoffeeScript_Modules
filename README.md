CoffeeScript_Modules
====================

A few modules, functions in CoffeeSript

included:
	.coffee file
	the compiled .js file
	and a .txt file of the .js
	
	
```coffeescript

displayObjectProperties = (obj1, numTabs = 0, tabs = "") ->
    tabs += " " for i in [1..numTabs] by 1
    for property of obj1
        if typeof obj1[property] is 'object'
            console.log tabs + property + ": "
            displayObjectProperties(obj1[property], numTabs += 1)
            numTabs -= 1
        else
            console.log tabs + property + ": " + obj1[property]
```

The function created here takes in an object and displays it in the console with the same formatting and convention
you would use to create it. For example:
```coffeescript
person =
	Name: "Nathan Zondlo"
	Age: 23
	Occupation: "Full-time Student"
	isLookingForJob: true
	Classes:
		Fall:
			Class1: "Programming"
			Class2: "Networking"
			Class3: "Chemistry"
		Spring:
			Class1: "Programming 2"
			Class2: "Web Development"
			Class3: "Business Writing"
	Graduating: "May 2013"
	
	displayObjectProperties = (obj1, numTabs = 0, tabs = "") ->
		tabs += " " for i in [1..numTabs] by 1
		for property of obj1
        	if typeof obj1[property] is 'object'
            	console.log tabs + property + ": "
            	displayObjectProperties(obj1[property], numTabs += 1)
           		numTabs -= 1
       		else
				console.log tabs + property + ": " + obj1[property] 

displayObjectProperties(person)
```
Gives the output:

```
name: "Nathan Zondlo"
age: 23
occupation: "Full-time Student"
isLookingForJob: true
Classes:
	Fall:
		Class1: "Programming"
		Class2: "Networking"
		Class3: "Chemistry"
	Spring:
		Class1: "Programming 2"
		Class2: "Web Development"
		Class3: "Business Writing"
Graduating: "May 2013"
```  
  



