var pascal_triangle = (function(getRows){

	//define the first row
	var triangle = [[1], [1,1]];

	return function(getRows){

		if(triangle.length >= getRows){
		
			return triangle.slice(0, getRows);
		
		} else {

			return (function(rows){

				//start at the end of the triangle
				for (var i = (triangle.length - 1); i < (rows - 1); i++) {
					
					var row         	= [1],
						previousRow     = triangle[(triangle.length - 1)],
						currentRowIndex = triangle.length,
						rowLength       = currentRowIndex + 1;


					//start at the second item in row since first num is always 1
					//end at second to last item in row since last num is always 1
					for (var j = 1; j < (rowLength - 1); j++) {

						var itemVal = 0;
						var l = (j - 1);

						previousLeft = (previousRow[l])? previousRow[l] : 0;
						previousRight = previousRow[j];
						
						itemVal = previousLeft + previousRight;

						row.push(itemVal);
					}
					
					row.push(1);

					triangle.push(row);
				}
		
				return triangle;

			}).call({}, getRows);
		}
	}
})();

//Module export, if you're into that kind of thing.
//module.exports = pascals_triangle;
