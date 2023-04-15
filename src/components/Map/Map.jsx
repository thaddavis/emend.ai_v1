import React, { useRef, useEffect, useState, Suspense } from 'react'
import * as d3 from 'd3'
import { useResize } from '@/hooks/useResize'
import { drawMap } from './helpers/drawMap'
import { callAI } from './helpers/callAI'

import { Modal } from '../Modal'
import { FlyoutMenu } from '../FlyoutMenu'
import { Loader } from '../Loader'
import map from './world.json'

export const Map = () => {
  const rootRef = useRef(null)
  const size = useResize(rootRef)

  const [AIresp, setAIresp] = useState({
    loading: false,
    val: [],
    error: null,
  })
  const [modalState, setModalState] = useState({
    isModalOpen: false,
    promptTemplate: '',
  })

  const mapStateRef = React.useRef({
    x: 0,
    y: 0,
  })

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
      .call(
        d3
          .zoom()
          .on('zoom', function (event) {
            console.log('event', event)
            svg.attr('transform', event.transform)

            mapStateRef.current.x = event.transform.x
            mapStateRef.current.y = event.transform.y
          })
          .scaleExtent([1, 1])
      )
      .append('g')

    console.log('mapStateRef.current ->', mapStateRef.current)

    let projection = d3
      .geoMercator()
      .center([0, 0])
      // .center([mapStateRef.current.x, mapStateRef.current.y])
      // .translate([mapStateRef.current.x, mapStateRef.current.y])
      .translate([size.width / 2, size.height / 2])
      // .translate([
      // mapStateRef.current.x,
      // mapStateRef.current.y,
      // -562, 541,
      // 6, 1330,
      // -80.1918, 25.7617,
      // ])
      .scale(300) //   zoom: 300,
    // .translate([mapStateRef.current.x, mapStateRef.current.y])

    drawMap(d3, svg, map, projection, AIresp.val)
  }, [size, AIresp])

  console.log('AIresp.loading', AIresp.loading)

  return (
    <>
      {AIresp.loading && <Loader />}
      <FlyoutMenu
        onItemClick={(promptTemplate) => {
          console.log('onItemClick')
          setModalState({
            isModalOpen: true,
            promptTemplate: promptTemplate,
          })
        }}
      />
      <Modal
        isModalOpen={modalState.isModalOpen}
        promptTemplate={modalState.promptTemplate}
        setModalState={setModalState}
        callAI={async (promptTemplate, queryContent) => {
          console.log('calling A.I.', promptTemplate)

          // debugger
          setModalState({
            isModalOpen: false,
            promptTemplate: '',
          })

          setAIresp({
            value: null,
            loading: true,
            error: null,
          })

          const res = await callAI(promptTemplate, queryContent)

          setAIresp({
            val: [
              {
                lon: -80.1918,
                lat: 25.7617,
                blurb: 'asdfasdf',
              },
            ],
            loading: false,
            error: null,
          })
        }}
      />
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
