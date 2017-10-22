//HELLO WORLD 1
// console.log("HELLO WORLD");

//BABY STEPS- ONE ANSWER 2
// var args = process.argv;
// //start at 2
// args = args.splice(2,args.length); 

// var answer = args.reduce(function(a,b) {
// 	return +a + b;
// });

//BABY STEPS- SECOND ANSWER
// var result =0;

// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i]);
// }

// console.log(result);


//MY FIRST I/O! 3
// var fs = require('fs');
// var buf = fs.readFileSync(process.argv[2]); //read to buffer
// var str = buf.toString(); 
// console.log(str.split('\n').length-1);

//MY FIRST ASYNC IO
// var fs = require('fs'); //require is a special fn provided by Node
// var myNumber = 0; 

// function addOne(callback) {
// 	fs.readFile(process.argv[2], function doneReading(err,data) {
// 		var str = data.toString(); //makes this a string
// 		str = str.split('\n'); //string split at \n 
// 		myNumber =str.length-1;
// 		callback();
// 	})
// }

// function logMyNumber() {
// 	console.log(myNumber)
// }

// addOne(logMyNumber);

//FILTERED LS 4 
// var fs = require('fs'); //require is a special fn provided by Node
// var path = require('path');
// var dir = process.argv[2];
// var ext = process.argv[3]; 

// fs.readdir(dir, function(err,data){
// 	if(err)
// 		return error; 
// 	callback(data);
// });

// function callback(data) {
// 	var list = data.length; 
// 		var i=0;
// 		for (i; i<list; i++){
// 			if(path.extname(data[i])== "."+ext)
// 				console.log(data[i]);
// 		}
// }

//MAKE IT MODULAR 5 

// var myModule = require ('./thisModule') //the js in ./thisModule.js is often ommitted 

// var dir= process.argv[2];
// var ext= process.argv[3];

// var callback = function(err,data){
// 	if(err)
// 		return console.error("There was an error");
// 	for(var j=0;j<data.length;j++)
// 	{
// 		console.log(data[j]);
// 	}
// }

// myModule(dir,ext,callback);

//HTTP CLIENT   Hypertext Transfer Protocol 
// Write a program that performs an HTTP GET request to a URL provided to you  
//   as the first command-line argument. Write the String contents of each  
//   "data" event from the response to a new line on the console (stdout).  


