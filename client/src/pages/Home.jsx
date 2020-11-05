import React, { useState } from "react"
import Table from "../components/table"
import Evolution from "../components/evolution"
import Player from "../components/player"

export default function Home() {
  let [ showTable, setShowTable ] = useState({ player: false, evolution: false, button: true })
  let [ playerId, setPlayerId ] = useState(null)

  return (
    <div>
      <div className="bg-indigo-900 px-4 py-4">
        <div className="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <a
              href="https://github.com/didadadida93/ytkt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2 text-white text-xl font-bold pr-5"
            >
              ytkt
            </a>
            <button
              className="pr-5 text-white"
              onClick={e => {
                setShowTable({ player: true, evolution: false, button: false })
                setPlayerId(null)
              }}
            >
              Player List
            </button>
            <button
              className="text-white"
              onClick={e => {
                setShowTable({ player: false, evolution: true, button: false })
                setPlayerId(null)
              }}
            >
              Player Evolution
            </button>
          </div>
        </div>
      </div>

      <div className="bg-indigo-900 md:overflow-hidden">
        <div className="px-4 py-20 md:py-4">
          <div className="md:max-w-6xl md:mx-auto">
            <div className="md:flex md:flex-wrap">
              <div className="md:w-1/2 text-center md:text-left md:pt-16">
                <h1 className="font-bold text-white text-2xl md:text-5xl leading-tight mb-4">
                  Your Travian: Kingdom Tool
                </h1>

                <p className="text-indigo-200 md:text-xl md:pr-48">
                  Collecting map data using your session. From you, for you.
                </p>
                {
                  showTable.button && <button onClick={e => setShowTable({ player: true, evolution: false, button: false })} className="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow">Let's go!</button>
                }
              </div>
            </div>
          </div>
        </div>
        {
          showTable.player && <Table setPlayerId={val => setPlayerId(val)}/>
        }
        {
          showTable.evolution && <Evolution setPlayerId={val => setPlayerId(val)}/>
        }
        {
          playerId && <Player playerId={playerId} />
        }
      </div>
      <p className="text-center p-4 text-gray-600 pt-10">
        Created by
        <a
          className="border-b text-blue-500"
          href="https://twitter.com/mithicher"
          target="_blank"
          rel="noopener noreferrer"
        >
          @mithicher
        </a>
        . Inspired by dribble shot
        <a
          href="https://dribbble.com/shots/8807920-Quickpay-Hero-section/attachments/1015863"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b text-blue-500"
        >
          https://dribbble.com/vadimdrut
        </a>
        <a
          href="https://tailwindcomponents.com/component/landing-page-with-tailwind-css-2"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b text-blue-500"
        >
          https://tailwindcomponents.com/compoennts/landing-page-with-tailwind-css-2
        </a>
      </p>
    </div>
  )
}
