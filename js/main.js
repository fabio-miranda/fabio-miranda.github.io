
function loadHeader(fileName) {

	$.getJSON( fileName, function( data ) {

		var header = d3.select("#header");
		var ul = header
			.append("ul")
			.attr("class", "nav nav-pills pull-right");

		ul.selectAll("li")
			.data(d3.entries(data["links"]))
			.enter()
			.append("li")
			.append("a")
			.attr("href", function(d){return d.value})
			.text(function(d){return d.key});

		header.append("h3")
			.attr("class", "left")
			.append("a")
			.attr("href", data["main"])
			.text(data["name"]);

		d3.select("title").text(data["title"]);

		header.append("hr").attr("class", "hr-large");
	})
	.fail(function(jqxhr, textStatus, error){
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err );
	});

	
}



function loadNews(fileName) {
	$.getJSON( fileName, function( data ) {
		
		var div = d3.select("#news")
			.append("div")
			.attr("class", "row well");

		for(var content in data) {
			div
                .append("div")
                .attr("id", content.toLowerCase())
                .append("h4")
				.text(content);

			var ul = div.append("ul").attr("class", "news");

			// div for all papers
			var papers = ul.selectAll("li")
				.data(d3.entries(data[content]));

			papers
				.enter()
				.append("div")

			// paper description
			var description = papers.append("div").append("li")
				.attr("class", "col-sm");

			description.append("span")
				.attr("class", "news")
				.html(function(d){return "<b>"+d.value["date"] + "</b>: " + d.value["text"];});

			description.append("span")
                .html(function(d,i) {
                    return ' [<a target="_new" href='+d.value["more"]+'>more</a>]';
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

		var bio = d3.select("#bio");
			
		var div = bio.append("div")
			.attr("class", "row well");

		div.append("div")
			.attr("class", "col-sm-4")
			.append("img")
			.attr("class", "img-rounded")
			.attr("src", data["image"])
			.attr("alt", data["name"])
			.attr("title", data["name"])
			.style("width", "250px")
			.style("height", "250px");

		var bioOutter = div.append("div")
			.attr("class", "col-sm-8");

		var bioInner = bioOutter.append("div")
			.attr("class", "row");

        for(b in data["bio"]) {
    		bioInner.append("div")
    			.text(data["bio"][b]);
        }

		var contact = bioInner.append("div")
			.attr("class", "text-center")
			.append("ul")
            .attr("class", "list-inline"); 

		contact.selectAll("li")
			.data(d3.entries(data["contact"]))
			.enter()
			.append("li")
			// .attr("class", "list-inline-item")
            .html(function(d,i) {
                return "[<a href="+d.value+">"+d.key+"</a>]";
            });

		bio.append("hr").attr("class", "hr-large");
	})
	.fail(function(jqxhr, textStatus, error){
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err );
	});
}

function loadTeaser(fileName, callBack) {
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
				.text(function(d){return d.value["authors"];});
			description.append("em")
				.text(function(d){return d.value["where"];});
			
			ul = description.append("ul")
				.attr("class", "list-inline");

			ul.append("li")
				.append("span")
                .html(function(d,i) {
                	if(d.value["doi"] != null) 
                    	return '[<a target="_new" href='+d.value["doi"]+'>DOI</a>]';
                    else
                    	return d3.select(this.parentNode).remove();
                });
            ul.append("li")
				.append("span")
                .html(function(d,i) {
                	if(d.value["pdf"] != null)
                    	return '[<a target="_new" href='+d.value["pdf"]+'>pdf</a>]';
                    else
                    	return d3.select(this.parentNode).remove();
                });
            ul.append("li")
				.append("span")
                .html(function(d,i) {
                	if(d.value["video"] != null)
                    	return '[<a target="_new" href='+d.value["video"]+'>video</a>]';
                    else
                    	return d3.select(this.parentNode).remove();
                });
            ul.append("li")
				.append("span")
                .html(function(d,i) {
                	if(d.value["bibtex"] != null)
                    	return '[<a target="_new" href='+d.value["bibtex"]+'>bibtex</a>]';
                    else
                    	return d3.select(this.parentNode).remove();
                });
			ul.append("li")
				.append("span")
                .html(function(d,i) {
                    return "[<a href="+d.key+">more</a>]";
                });

			var extra = description.selectAll(".col-sm-6")
				.data(function(d){
					if(d.value["extras"] == undefined)
						return [];
					else
					 	return d.value["extras"];
				})
				.enter()
				.append("div");

			extra
				.append("span")
				.text(function(d){return d[0]+" ";})
				.attr("class", "text-muted");
			extra
				.append("a")
				.text("link")
				.attr("target", "_new")
				.attr("href", function(d){return d[1]});


			// paper image
			var image = papers.append("div")
				.attr("class", "col-sm-6")
				.append("div")
				.attr("class", "img-thumbnail");

			image.append("img")
				.attr("src", function(d){return d.value["teaser"]})
				.attr("alt", function(d){return d.value["title"]+" teaser"})
				.attr("title", function(d){return d.value["title"]+" teaser"})
				.style("max-width", "100%")
				.style("max-height", "250px")
				.style("width", "auto");
				// .attr("class", "img-thumbnail");
		}

		// hr line
		d3.select("#content").append("hr").attr("class", "hr-large");

		// load rest of page
		callBack();
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
			.attr("class", "well")

		var content = data[type][key];
		if(content == undefined) {
			div.append("h4")
				.text("Under construction...");
		}
		else {
			div.append("span")
				.attr("class", "lead")
				.text(content["title"]);

			div.append("div")
				.text(content["authors"]);

			div.append("em")
				.text(content["where"]);

			div.append("a")
				.attr("alt", content["title"]+" paper")
				.attr("href", content["pdf"])
				.append("img")
				.attr("src", "../"+content["image"])
				.attr("alt", content["title"]+" image")
				.attr("title", content["title"]+" image")
                .attr("class", "pull-right image img-thumbnail")
                .attr("xlink:href", content["pdf"]);

			div.append("div")
				.attr("class", "abstract lead")
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
				.attr("class", "list-inline");

			var downloads = ["doi", "pdf", "paper", "video", "github", "bibtex"];
			for(var i in downloads) {
				var d = downloads[i];
				if(content[d] != undefined) {
					ul.append("li")
						.append("span")
						.html(function() {
							return '[<a target="_new" href='+content[d]+'>'+d+'</a>]';
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