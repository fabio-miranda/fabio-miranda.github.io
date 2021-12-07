function loadMarkdown(fileName, jumphash) {

	$.get( fileName, function( data ) {
		d3.select("#content").node().innerHTML = "<br /><br />" + marked(data);

	})
	.success(function(jqxhr, textStatus){
		if(jumphash != "") {
			$(jumphash)[0].scrollIntoView()
		}
	})
	.fail(function(jqxhr, textStatus, error){
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err );
	});

}


function loadHeader(fileName, title) {

	$.getJSON( fileName, function( data ) {

		var header = d3.select("#header").append("div").attr("class", "row");

		header.append("div")
			.attr("class", "col-sm-4")
			.append("span")
			.append("h2")
			.append("a")
			.attr("href", data["main"])
			.text(data["name"]);

		var div = header.append("div")
			.attr("class", "col-sm-8 align-self-center")
			.append("div")
			.attr("class", "float-right");

		div.selectAll("span")
			.data(d3.entries(data["links"]))
			.enter()
			.append("span")
			.attr("class", "px-2")
			.append("a")
			.attr("href", function(d){return d.value})
			.text(function(d){return d.key});

		if(title == null || title == "") {
			d3.select("title").text(data["title"]);
		}
		else {
			d3.select('head').select('title').text(title);
		}

		

		// header.append("hr").attr("class", "hr-large");
	})
	.fail(function(jqxhr, textStatus, error){
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err );
	});

	
}

function loadNews(fileName) {
	$.getJSON( fileName, function( data ) {

		var news = d3.select("#news").append("div").attr("class", "news row no-gutters");

		for(var content in data) {
			news
                .append("div")
                .attr("class", "col-sm-12")
                .attr("id", content.toLowerCase())
                // .append("h4")
                .append("div")
                .attr("class", "title font-weight-bold")
				.text(content);

			news = news.append("div").attr("class","cell no-gutters");

			// div for all papers
			var newsitems = news
				.append("div")
				.attr("class", "col-sm-12")
				.selectAll("div")
				.data(d3.entries(data[content]));

			newsitems
				.enter()
				.append("div")
				.attr("class", "newsitem")
				.html(
					function(d){
						if("more" in d.value) {
							return "<b>"+d.value["date"] + "</b>: " + d.value["text"] + " [<a href="+d.value["more"]+">more</a>]";
						}
						else {
							return "<b>"+d.value["date"] + "</b>: " + d.value["text"];
						}
						
					});
		}

	})
	.fail(function(jqxhr, textStatus, error){
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err );
	});
}


function loadBio(fileName) {
	$.getJSON( fileName, function( data ) {

		var bio = d3.select("#bio").append("div").attr("class", "row bio align-items-center");

		bio.append("div")
			.attr("class", "col-sm-3")
			.append("img")
			.attr("class", "img-rounded align-middle")
			.attr("src", data["image"])
			.attr("alt", data["name"])
			.attr("title", data["name"])
			.style("width", "100%")
			.style("padding-bottom", "20px")
			.style("filter", "grayscale(100%)");

		var bioOutter = bio.append("div")
			.attr("class", "col-sm-9");

		var bioInner = bioOutter.append("div")
			.attr("class", "row");

        for(b in data["bio"]) {
    		bioInner.append("div")
    			.text(data["bio"][b]);
		}
		
		d3.selectAll("[name=\"description\"]").attr("content",data["bio"][0]);

		var contact = bioInner.append("div")
			.attr("class", "text-center")
			.style("width", "100%")
			.append("ul")
            .attr("class", "list-inline"); 

		contact.selectAll("span")
			.data(d3.entries(data["contact"]))
			.enter()
			.append("span")
			.attr("class", "px-2")
			// .attr("class", "list-inline-item")
            .html(function(d,i) {
                return "[<a href="+d.value+">"+d.key+"</a>]";
            });

		// bio.append("hr").attr("class", "hr-large");
	})
	.fail(function(jqxhr, textStatus, error){
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err );
	});
}

function loadResearchHighlights(fileName) {
	$.getJSON( fileName, function( data ) {
		var highlights = d3.select("#highlights").append("div").attr("class", "highlights row no-gutters");

		for(var content in data) {
			var div = highlights
		        .append("div")
		        .attr("class", "col-sm-12")
		        .attr("id", content.toLowerCase())
		        // .append("h4")

		    div.append("div")
				.attr("class", "researchitem font-weight-bold align-item-center")
				.style("float", "right")
				.style("padding-left", "5px")
				.style("padding-top", "3px")
				.append("a")
				.attr("href","/publications")
				.text("See all publications");

		    div.append("div")
		        .attr("class", "title font-weight-bold")
				.text(content);



			highlights = highlights.append("div").attr("class","cell row py-0");

			var items = highlights
				.selectAll("div")
				.data(d3.entries(data[content]));

			item = items
				.enter()
				.append("span")
				.attr("class", "col-sm-3 researchitem");

			item.append("div")
				.attr("class", "font-weight-bold")
				.text(function(d){return d.value["title"]});
			item.append("div")
				.attr("class", "text-center text-justify")
				.append("img")
				.attr("class", "img-rounded")
				.attr("src", function(d){return "publications/"+d.value["teaser"]})
				.attr("alt", function(d){return d.value["name"]})
				.attr("title", function(d){return d.value["name"]})
				.style("max-width", "100%")
				.style("height", "150px")
				.style("object-fit", "contain")
			item.append("div")
				.attr("class", "researchitemauthors")
				.text(function(d){return d.value["authors"]})
			// item.append("div")
				// .text(function(d){return d.value["text"]})

			var links = item.append("div");
			links.each(function(element) {
				for(var i=0; i<element.value["where"].length; ++i) {
					var aux;
					if(i > 0) {
						aux = d3.select(this).append("span").text(", ");
					}
					else {
						aux = d3.select(this).append("span");
					}

					aux.append("span")
						.style("white-space","nowrap")
						.html(function(d) {
							return ' [<a href='+element.value["more"][i]+'>'+element.value["where"][i]+'</a>]';
						});
				}
			})
			// d3.entries(data[content]).forEach(function(element) {
			// 	console.log(element);
			// 	for(var i=0; i<element.value["where"].length; ++i) {
			// 		console.log(element.value["where"]);
			// 		var aux;
			// 		if(i > 0) {
			// 			aux = links.append("span").text(", ");
			// 		}
			// 		else {
			// 			aux = links.append("span");
			// 		}

			// 		aux.append("a")
			// 			.attr("href",element.value["more"][i])
			// 			.text(element.value["where"][i]);
			// 	}
			// })
		}
	});
}

function loadNotices(fileName) {
	$.getJSON( fileName, function( data ) {
		var highlights = d3.select("#notices").append("div").attr("class", "row no-gutters");

		for(var content in data) {
			highlights
				.append("div")
				.attr("class", "title col-sm-12")
				.style("height","1.5px");

			highlights = highlights.append("ul").attr("class","cell no-gutters");

			var items = highlights
				.selectAll("div")
				.attr("class", "col-sm-12")
				.data(d3.entries(data[content]));

			items
				.enter()
				.append("div")
				.attr("class", "noticeitem")
				.html(function(d){return  d.value["text"];});
		}
	});
}

function loadCurrentResearchProjects(fileName) {
	$.getJSON( fileName, function( data ) {
		var highlights = d3.select("#projects").append("div").attr("class", "projects row no-gutters");

		for(var content in data) {
			highlights
				.append("div")
				.attr("class", "col-sm-12")
				.attr("id", content.toLowerCase())
				.append("div")
				.attr("class", "title font-weight-bold")
				.text(content)
				.append("a").attr("name", "current");

			highlights = highlights.append("ul").attr("class","cell no-gutters");

			var items = highlights
				.selectAll("ul")
				.attr("class", "col-sm-12")
				.data(d3.entries(data[content]));

			items
				.enter()
				.append("li")
				.attr("class", "researchprojectitem")
				.html(function(d){return  d.value["text"];});
		}
	});
}

function loadResearchAreas(fileName) {
	$.getJSON( fileName, function( data ) {
		var highlights = d3.select("#areas").append("div").attr("class", "areas row no-gutters");

		for(var content in data) {

			var div = highlights
		        .append("div")
		        .attr("class", "col-sm-12")
		        .attr("id", content.toLowerCase())
		        // .append("h4")

		    div.append("div")
				.attr("class", "researchitem font-weight-bold align-item-center")
				.style("float", "right")
				.style("padding-left", "5px")
				.style("padding-top", "3px")
				.append("a")
				.attr("href","/research")
				.text("See more details");

		    div.append("div")
		        .attr("class", "title font-weight-bold")
				.text(content);


			// highlights
		 //        .append("div")
		 //        .attr("class", "col-sm-12")
		 //        .attr("id", content.toLowerCase())
		 //        // .append("h4")
		 //        .append("div")
		 //        .attr("class", "title font-weight-bold")
			// 	.text(content)
			// 	.append("a").attr("name", "areas")

			highlights = highlights.append("div").attr("class","cell row py-0");

			var items = highlights
				.selectAll("div")
				.data(d3.entries(data[content]));

			item = items
				.enter()
				.append("span")
				.attr("class", "col-sm-3 researchitem");

			item.append("div")
				.attr("class", "font-weight-bold")
				.text(function(d){return d.value["title"]});
			item.append("div")
				.attr("class", "text-center text-justify");
			item.append("div")
				.text(function(d){return d.value["text"]})

			var links = item.append("div");
			links.each(function(element) {
				for(var i=0; i<element.value["where"].length; ++i) {
					var aux;
					if(i > 0) {
						aux = d3.select(this).append("span").text(", ");
					}
					else {
						aux = d3.select(this).append("span");
					}

					aux.append("span")
						.style("white-space","nowrap")
						.html(function(d) {
							return ' [<a href='+element.value["more"][i]+'>'+element.value["where"][i]+'</a>]';
						});
				}
			})
		}
	});
}

function loadCourses(fileName) {
	$.getJSON( fileName, function( data ) {
		var highlights = d3.select("#courses").append("div").attr("class", "areas row no-gutters");

		for(var content in data) {

			var div = highlights
		        .append("div")
		        .attr("class", "col-sm-12")
		        .attr("id", content.toLowerCase())
		        // .append("h4")

		    div.append("div")
				.attr("class", "researchitem font-weight-bold align-item-center")
				.style("float", "right")
				.style("padding-left", "5px")
				.style("padding-top", "3px")
				.append("a")
				.attr("href","/courses")
				.text("See all courses");

		    div.append("div")
		        .attr("class", "title font-weight-bold")
				.text(content);

			highlights = highlights.append("ul").attr("class","cell no-gutters");

			var items = highlights
				.selectAll("ul")
				.attr("class", "col-sm-12")
				.data(d3.entries(data[content]));

			items
				.enter()
				.append("li")
				.attr("class", "researchprojectitem")
				.html(function(d){return  d.value["title"] + ' [<a href='+d.value["more"]+'>more</a>]';});


		}
	});
}

function loadMedia(fileName) {
	$.getJSON( fileName, function( data ) {
		var highlights = d3.select("#media").append("div").attr("class", "medianews row no-gutters");

		for(var content in data) {
			highlights
		        .append("div")
		        .attr("class", "col-sm-12")
		        .attr("id", content.toLowerCase())
		        // .append("h4")
		        .append("div")
		        .attr("class", "title font-weight-bold")
				.text(content);

			highlights = highlights.append("div").attr("class","cell row py-0");

			var items = highlights
				.selectAll("span")
				.data(d3.entries(data[content]));

			var links = items
				.enter()
				.append("div")
				.attr("class", "col-sm-2 medianewsitem");
			links
				.append("div")
				.attr("class", "text-center text-justify")
				.append("img")
				.attr("class", "img-rounded text-center")
				.attr("src", function(d){return d.value["teaser"]})
				.attr("alt", function(d){return d.value["name"]})
				.attr("title", function(d){return d.value["name"]})
				.style("max-width", "100%")
				.style("height", "30px")
				.style("object-fit", "contain")
			links
				.append("div")
				.text(function(d){return d.value["text"]});

			links.append("span")
				.html(function(d) {
					return ' [<a target="_new" href='+d.value["more"]+'>'+d.value["where"]+'</a>]';
			});

			// links.append("a")
				// .attr("href",function(d){return d.value["more"]})
				// .text(function(d){return d.value["where"]})
				// .style("filter", "grayscale(100%)");
				// .html(function(d){return "<b>"+d.value["date"] + "</b>: " + d.value["text"];});
		}
	});
}

function loadLinks(fileName) {
	$.getJSON( fileName, function( data ) {
		var highlights = d3.select("#links").append("div").attr("class", "links row no-gutters");

		for(var content in data) {
			var div = highlights
		        .append("div")
		        .attr("class", "col-sm-6");
		    div.append("div")
		        .attr("class", "title font-weight-bold")
				.text(content);

			var items = div.append("div").attr("class","cell row py-0")
				.selectAll("div")
				.data(d3.entries(data[content]));

			var links = items
				.enter()
				.append("div")
				.attr("class", "linkitem");
			links.append("div")
				.attr("class", "font-weight-bold")
				.text(function(d){return d.value["title"]});
			links.append("span")
				.text(function(d){return d.value["text"]});
			links.append("span")
				.html(function(d) {
					return ' [<a target="_new" href='+d.value["more"]+'>'+d.value["where"]+'</a>]';
				});
		}
	});
}

function loadTeaser(fileName) {
	$.getJSON( fileName, function( data ) {
		
		var div = d3.select("#content")
			.append("div")
			// .attr("class", "row col-sm-12");

		for(var content in data) {
			div
                .append("div")
                .attr("class", "col-sm-12")
                .attr("id", content.toLowerCase())
                .append("h4")
				.text(content);

			var ul = div.append("ul");//.attr("class", "no-gutters");

			// div for all papers
			var papers = ul.selectAll("li")
				.data(d3.entries(data[content]));

			papers
				.enter()
				.append("div")
				.attr("class", "row")

			papers
				.append("hr").attr("class", "hr-small col-sm-6");

			// paper description
			var div = papers.append("div").attr("class", "col-sm-8");
			// var description = div.append("li")
				// .attr("class", "col-sm-4");

			var row = div;//.append("div").attr("class", "row");
			row.append("div")
				.attr("class", "lead paperitem px-0")
				.text(function(d){return d.value["title"];});
			div.append("div")
				.attr("class", "px-0")
				.text(function(d){return d.value["authors"];});
			div.append("div")
				.attr("class", "px-0")
				.append("em")
				.text(function(d){return d.value["where"];});
			
			ul = div.append("ul")
				.attr("class", "px-0");

			ul.append("span")
                .html(function(d,i) {
                	if(d.value["doi"] != null) 
                    	return '[<a target="_new" href='+d.value["doi"]+'>DOI</a>] ';
                    // else
                    	// return d3.select(this.parentNode).remove();
                });
            ul.append("span")
                .html(function(d,i) {
                	if(d.value["pdf"] != null)
                    	return '[<a target="_new" href='+d.value["pdf"]+'>pdf</a>] ';
                    // else
                    	// return d3.select(this.parentNode).remove();
                });
            ul.append("span")
                .html(function(d,i) {
                	if(d.value["video"] != null)
                    	return '[<a target="_new" href='+d.value["video"]+'>video</a>] ';
                    // else
                    	// return d3.select(this.parentNode).remove();
                });
            ul.append("span")
                .html(function(d,i) {
                	if(d.value["bibtex"] != null)
                    	return '[<a target="_new" href='+d.value["bibtex"]+'>bibtex</a>] ';
                    // else
                    	// return d3.select(this.parentNode).remove();
                });
			ul.append("span")
                .html(function(d,i) {
                    return "[<a href="+d.key+">more</a>] ";
                });

			// var extra = div.selectAll(".paperitem")
			// 	.data(function(d){
			// 		if(d.value["extras"] == undefined)
			// 			return [];
			// 		else
			// 		 	return d.value["extras"];
			// 	});

			var extra = div.append("div").selectAll()
				.data(function(d){
					if(d.value["extras"] == undefined)
						return [];
					else
					 	return d.value["extras"];
				});

			extra = extra.enter().append("div");

			extra
				.append("span")
				.text(function(d){return d[0]+": ";})
				.attr("class", "text-muted");
			extra
				.append("a")
				.text("link")
				.attr("target", "_new")
				.attr("href", function(d){return d[1]});


			// paper image
			var image = papers.append("div")
				.attr("class", "col-sm-4")
				.append("div")
				.attr("class", "img-thumbnail");

			image.append("img")
				.attr("src", function(d){if(d.value["teaser"] != null) return "../publications/"+d.value["teaser"]})
				.attr("alt", function(d){if(d.value["teaser"] != null) return d.value["title"]+" teaser"})
				.attr("title", function(d){if(d.value["teaser"] != null) return d.value["title"]+" teaser"})
				.style("max-width", "100%")
				.style("max-height", "250px")
				.style("width", "auto");
				// .attr("class", "img-thumbnail");
		}

		// hr line
		d3.select("#content").append("hr").attr("class", "hr-large");

		// load rest of page
		// callBack();
	})
	.fail(function(jqxhr, textStatus, error){
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err );
	});
}

// From: https://developers.google.com/youtube/player_parameters
function loadVideo(elementId, videoId) {
	var player = new YT.Player(elementId, {
		height: '360',
		width: '640',
		videoId: videoId
	});
}

function loadContent(fileName, type, key) {
	$.getJSON( fileName, function( data ) {

		var div = d3.select("#content")
			.append("div")
			// .attr("class", "row well");

		var content = data[type][key];
		if(content == undefined) {
			div.append("h4")
				.text("Soon...");
		}
		else {
			var divv = div.append("span")
				.attr("class", "col-sm-12");
			divv.append("h4")
				.text(content["title"]);

			divv.append("div")
				.text(content["authors"]);

			divv.append("div").append("em")
				.text(content["where"]);

			divv.append("a")
				.attr("alt", content["title"]+" paper")
				.attr("href", content["pdf"])
				.append("img")
				.attr("src", "../"+content["image"])
				.attr("alt", content["title"]+" image")
				.attr("title", content["title"]+" image")
                .attr("class", "pull-right image img-thumbnail")
                .attr("xlink:href", content["pdf"])
                .style("float", "right");

			div.append("div")
				.attr("class", "abstract")
				.text(content["abstract"]);

            if(content["videoId"] != undefined) {
    			div.append("div")
    				.attr("class", "text-center")
    				.append("div")
    				.attr("class", "img-thumbnail")
    				.append("span")
    				.attr("id", "video");
    			loadVideo("video", content["videoId"]);
            }

			// downloads
			ul = div.append("ul")
				// .attr("class", "list-inline");

			var downloads = ["doi", "pdf", "paper", "video", "github", "bibtex"];
			for(var i in downloads) {
				var d = downloads[i];
				if(content[d] != undefined) {
					ul.append("span")
						.append("span")
						.html(function() {
							return '[<a target="_new" href='+content[d]+'>'+d+'</a>] ';
						});
				}
			}

			var extra = div.append("div");
			for(var i in content["extras"]) {
				var e = content["extras"][i];
				extra
					.append("span")
					.text(e[0]+" ");
				extra
					.append("a")
					.text("Link")
					.attr("href", e[1])
				extra.append("br");
			}

			var currentText = d3.select("title").text();
			d3.select("title").text(content["title"]+" | " + currentText);
		}
	})
	.fail(function(jqxhr, textStatus, error){
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err );
	});
}

function loadProject(fileName) {
	$.getJSON( fileName, function( data ) {
		
		var div = d3.select("#content")
			.append("div")
			.attr("class", "row well");

		for(var content in data) {
			div
                .append("div")
                .attr("id", content.toLowerCase())
                .append("h4")
				.text(content);

			var ul = div.append("ul").attr("class", "paper");

			// div for all papers
			var papers = ul.selectAll("li")
				.data(d3.entries(data[content]));

			papers
				.enter()
				.append("div")
				.attr("class", "row")

			papers
				.append("hr").attr("class", "hr-small");

			// paper description
			var description = papers.append("div").append("li")
				.attr("class", "col-sm-6");

			description.append("span")
				.attr("class", "lead")
				.text(function(d){return d.value["title"];});
			description.append("div")
				.text(function(d){return d.value["abstract"];});
			
			ul = description.append("ul")
				.attr("class", "list-inline");

			ul.each(function(d,i) {
				if(d.value["github"] != undefined) {
					d3.select(this).append("li")
					.append("span")
	                .html(function(d,i) {
	                	return "[<a href="+d.value["github"]+">github</a>]";
	                })
	            }
			});
     //        ul.each(function(d,i) {
     //        	if(d.value["video"] != undefined) {
	    //         	d3.select(this).append("li")
					// .append("span")
	    //             .html(function(d,i) {
	    //             	return "[<a href="+d.value["video"]+">video</a>]";
	    //         	}) 
	    //         }
     //        });
			ul.each(function(d,i) {
				if(d.value["more"] == false)
					return;
				d3.select(this).append("li")
				.append("span")
                .html(function(d,i) {
                    return "[<a href="+d.key+">more</a>]";
                })
            });


			// paper image
			var image = papers.append("div")
				.attr("class", "col-sm-6");

			image.append("img")
				.attr("src", function(d){return d.value["teaser"]})
				.attr("alt", function(d){return d.key+" teaser"})
				.attr("alt", function(d){return d.key+" teaser"})
				.attr("class", "img-thumbnail");
		}

		// hr line
		d3.select("#content").append("hr").attr("class", "hr-large");
	})
	.fail(function(jqxhr, textStatus, error){
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err );
	});
}