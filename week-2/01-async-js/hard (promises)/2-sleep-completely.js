/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 the function should return a promise just like before
 */

function sleep(milliseconds) {
	const result = new Promise((resolve)=>{
		let startTime = Date.now();
		while (Date.now() - startTime < milliseconds){
			// wating the thread 
		}
		resolve();
	});
		

	return result.then(()=>console.log(`made thread busy for ${milliseconds} milliseconds`));
}

module.exports = sleep;
