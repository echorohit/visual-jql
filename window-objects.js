function isPlainObj(o) {
  return typeof o == 'object' && o.constructor == Object;
}


(function ()
{
   var keys=Object.keys( window );
   for (var i in keys)
   {
      if (window[keys[i]]!== null && isPlainObj(window[keys[i]])) {
		try {
			console.log(JSON.stringify(window[keys[i]]))
		} catch(e) {
		}
      }
      	//console.log(JSON.stringify(window[keys[i]]));
   	}
})();


