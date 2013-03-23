CoffeeScript_Modules
====================

A few modules, functions in CoffeeSript

included:
	.coffee file
	the compiled .js file
	and a .txt file of the .js
	

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
  



