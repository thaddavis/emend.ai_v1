export function drawMap(d3, svg, map, projection, matches = []) {
  const tooltip = d3
    .select('#chart-area')
    .append('div')
    .style('opacity', 0)
    .style('position', 'absolute')
    .attr('class', 'tooltip')
    .style('background-color', 'white')
    .style('border-radius', '5px')
    .style('border', '3px solid #2463eb')
    .style('padding', '10px')
    .style('color', 'black')

  const showTooltip = function (evt, d) {
    console.log('#!#!#', evt, 'd', d)

    tooltip.transition().duration(200)
    tooltip
      .style('opacity', 1)
      .html(d.response)
      .style('left', evt.clientX + 30 + 'px')
      .style('top', evt.clientY + 30 + 'px')
  }

  const moveTooltip = function (evt) {
    tooltip
      .style('left', evt.clientX + 30 + 'px')
      .style('top', evt.clientY + 30 + 'px')
  }

  const hideTooltip = function (evt) {
    tooltip.transition().duration(200).style('opacity', 0)
  }

  const mapPaths = svg
    .append('g')
    .attr('id', 'zoom-container')
    .selectAll('path')
    .data(map.features)

  mapPaths
    .join('path')
    .on('click', function (e) {
      console.log(e)
    })
    .attr('fill', function (d) {
      return 'rgba(255,255,255, 0.5)'
    })
    .transition()
    .duration(2000)
    .attr('fill', function (d) {
      return 'rgba(255,255,255, 0.5)'
    })
    .attr('d', d3.geoPath().projection(projection))
    .style('stroke', 'rgba(0,0,0, 0.5)')

  // const mycircle = svg
  //   .append('circle')
  //   // .attr("cx", 0)
  //   // .attr("cy", 0)
  //   .attr('cx', projection([step.lng, step.lat])[0])
  //   .attr('cy', projection([step.lng, step.lat])[1])
  //   .style('fill', 'white')
  //   .style('stroke', 'rgb(0, 0, 0)')
  //   .style('opacity', 0)
  //   .attr('r', 16)
  //   .attr('stroke-width', 2)

  // mycircle
  //   .transition()
  //   .duration(2000)
  //   .delay(0)
  //   .attr('cx', projection([step.lng, step.lat])[0])
  //   .attr('cy', projection([step.lng, step.lat])[1])
  //   .style('fill', step.fillColor)
  //   .style('opacity', 1)
  //   .attr('r', 8)

  // draw matches
  for (let i = 0; i < matches.length; i++) {
    // console.log('matches[]', matches[i])

    if (matches[i].response && matches[i].lat && matches[i].lat) {
      let lat = matches[i].lat
      let lon = matches[i].lon
      // let name = step.areas[i].name
      svg
        .append('g')
        .selectAll('circle')
        .data([{ lon, lat }], (d) => 'd')
        // .data([{ lon, lat, name }])
        .join('circle')
        .on('mouseover', (evt) => {
          console.log('!@#!@#!@# mouseover', evt)
          showTooltip(evt, matches[i])
        })
        .on('mousemove', (evt) => {
          console.log('!@#!@#!@# mousemove')
          moveTooltip(evt, matches[i])
        })
        .on('mouseleave', (evt) => {
          console.log('!@#!@#!@# mouseleave')
          hideTooltip(evt)
        })
        .attr('cx', function (d) {
          return projection([d.lon, d.lat])[0]
        })
        .attr('cy', function (d) {
          return projection([d.lon, d.lat])[1]
        })
        .attr('r', 5)
        // .style("stroke", "rgba(0,0,0, 0.0)")
        .attr('fill', function (d) {
          return 'rgba(184,184,184, 0.5)'
        })
        .transition()
        .duration(2000)
        .attr('fill', function (d) {
          return 'rgba(184,184,184, 0.5)'
        })
        .attr('d', d3.geoPath().projection(projection))
        .style('opacity', 1)
        .style('stroke', 'rgba(0,0,0, 0.5)')
      // .on('click', () => {
      //   console.log('mouseover')
      // })
      // .on('mousemove', () => {
      //   console.log('mousemove')
      // })
      // .on('mouseleave', () => {
      //   console.log('mouseleave')
      // })
      // .transition()
      // .duration(1000)
      // .style("opacity", 0)
      // .remove();
    }
  }
}
