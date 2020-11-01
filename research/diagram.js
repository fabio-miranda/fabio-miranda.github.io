

function loadDiagram() {
    papers = [
        {'paper': 'urban pulse','data': 'spatiotemporal', 'area': ['vis','mining'],'technique': 'topology', 'application': ['urban planning']},
    ]

    regions = ['neighborhood', 'city', 'globe']
    d3.select('#diagram')
        .selectAll('.region')
        .data(regions)
        .enter()
        .append('div')
        .attr('class','region')
        .attr('id', function(d){return d;});
}