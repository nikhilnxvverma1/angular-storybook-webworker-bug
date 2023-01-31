/// <reference lib="webworker" /> 

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// the above line sufficiently janks the storybook builder command
// throwing numerous typescript related errors that show up both in
// the console and browser window

// Also note that I have set the webWorkerTsConfig in angular.json 
// the file referred for the same is tsconfig.worker.json. But
// declaraing that file all by itself does not cause any issues

// /// <reference lib="webworker" />  <---------- This statement does

//----------------------------------------------------------------------
// User code below (web worker related)
//----------------------------------------------------------------------
// optional to uncomment below user code 

// addEventListener('message', ({ data }) => {
// 	const code = data.code;
// 	const input = data.input;
// 	const logger = (...str:string[])=>{
// 		const logOutput = "made it"+str.reduce((p,c,i)=>p+c,"");
// 		postMessage({
// 			type:"log",
// 			log:{
// 				message:logOutput,
// 				level:'info'
// 			}
// 		});
// 	};
// 	const codeExecution = `console.log = function (args){__logger(args)}\n${code}\nreturn draw(input);`;
// 	const call = new Function('input','__logger',codeExecution);
// 	const response = `worker response to ${call(input,logger)}`;

// 	postMessage({
// 		type:"result",
// 		response
// 	});
// });
