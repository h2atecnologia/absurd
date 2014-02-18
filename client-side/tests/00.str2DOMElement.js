describe("Testing str2DOMElement", function() {

	var elements = [
		['<div>test</div>'],
		['<div><h1>title</h1><a href="#">link</a></div>'],
		['<table><tr><td>test</td></tr></table>', '<table><tbody><tr><td>test</td></tr></tbody></table>'],
		['<tr><td>row</td></tr>'],
		['<td>column</td>'],
		['<td>\
		<p>\
			<a href="#">Label <span>of the link</span></a>\
		</p>\
		</td>'],
		['<body><section>Section</section></body>']
	]

	for(var i=0; i<elements.length; i++) {
		(function(html) {
			it("html: " + html[0], function(done) {
				var el = absurd.utils.str2DOMElement(html[0]);
				expect(el.outerHTML).toBe(html[1] || html[0]);
				done();
			});
		})(elements[i]);
	}

});