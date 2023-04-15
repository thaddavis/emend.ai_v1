import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import { useResize } from '@/hooks/useResize'
import { drawMap } from './helpers/drawMap'

import { FlyoutMenu } from '../FlyoutMenu'

import map from './world.json'

export const Map = () => {
  const rootRef = useRef(null)

  const size = useResize(rootRef)

  useEffect(() => {
    if (!size) {
      return
    }

    d3.select('#chart-area').select('svg').remove()

    const { width, height } = size

    const svg = d3
      .select('#chart-area')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')

    let projection = d3
      .geoMercator()
      // center: [0, 10],
      .center([0, 10])
      //   zoom: 300,
      .scale(300)
      .translate([size.width / 2, size.height / 2])

    drawMap(d3, svg, map, projection)
  }, [size])

  return (
    <>
      <FlyoutMenu />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh',
        }}
      >
        <div
          style={{ height: '100%', width: '100%' }}
          className="chart-area"
          id="chart-area"
          ref={rootRef}
        ></div>
      </div>
    </>
  )
}