
repl = require('repl');
repl.start("> ");

var loadchanges = function ( that ){
	console.log("Warning: loadchanges feature assumes the module object to be reloaded is ")
	this.pwd = process.env.PWD;
	if (this.pwd == undefined){
		throw (new Error("unexpected error, pwd not defined"));
	}
}

//@todo -- make this refresh based off the prototype 
process.refresh_module = function ( module_object, module_path){

	var old_module = require.cache[module_path];
	require.cache[module_path] = undefined;
	var refreshed_module = require (module_path);
	var new_object = new refreshed_module();

	for ( thing in module_object ){
		if (typeof (module_object[thing]) == 'function' && new_object[thing] == undefined){
			module_object[thing] = undefined;
		}
	}
	for (thing in new_object){
		if (typeof (new_object[thing]) == 'function'){
			module_object[thing] = new_object[thing];
		}
	}

	

}


process.revert = function ( module_path ){
	throw (new Error('function not yet implemented'));
}


