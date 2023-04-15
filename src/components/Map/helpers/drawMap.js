export function drawMap(d3, svg, map, projection) {
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

  // draw cities
  // for (let i = 0; i < step.areas.length; i++) {
  //   if (step.areas[i].city) {
  //     let lat = step.areas[i].lat;
  //     let lon = step.areas[i].lon;
  //     let name = step.areas[i].name;
  //     svg
  //       .append("g")
  //       .selectAll("circle")
  //       .data([{ lon, lat, name }], (d) => d.name)
  //       // .data([{ lon, lat, name }])
  //       .join("circle")
  //       .attr("cx", function (d) {
  //         return (projection([d.lon, d.lat]) )[0];
  //       })
  //       .attr("cy", function (d) {
  //         return (projection([d.lon, d.lat]) )[1];
  //       })
  //       .attr("r", 5)
  //       // .style("stroke", "rgba(0,0,0, 0.0)")
  //       .attr("fill", function (d) {
  //         if (!previousStep) {
  //           return "rgba(255,255,255,1)";
  //         } else if (
  //           previousStep &&
  //           previousStep.areas.find(function (v) {
  //             if (d.name === v.name) return true;
  //           }) &&
  //           step &&
  //           step.areas.find(function (v) {
  //             if (d.name === v.name) return true;
  //           })
  //         ) {
  //           return timeline.fillColor;
  //         } else if (
  //           previousStep &&
  //           previousStep.areas.find(function (v) {
  //             if (d.name === v.name) return true;
  //           })
  //         ) {
  //           return timeline.fillColor;
  //         } else {
  //           return "rgba(184,184,184, 0.5)";
  //         }
  //       })
  //       .transition()
  //       .duration(2000)
  //       .attr("fill", function (d) {
  //         if (
  //           step &&
  //           step.areas.find(function (v) {
  //             if (d.name === v.name && d.city === undefined) return true;
  //           })
  //         ) {
  //           return timeline.fillColor;
  //         }
  //         return "rgba(184,184,184, 0.5)";
  //       })
  //       .attr("d", d3.geoPath().projection(projection) )
  //       .style("opacity", 1)
  //       .style("stroke", "rgba(0,0,0, 0.5)");
  //     // .transition()
  //     // .duration(1000)
  //     // .style("opacity", 0)
  //     // .remove();
  //   }
  // }
}
