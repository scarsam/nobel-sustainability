import React from "react"
import ImageOffset from "../components/image_offset"

const HistoryMidBreakpoint = ({ immanuel, ludwig }) => {
  return (
    <>
      <div className="row padding-bottom-60px">
        <div className="col-7 col-md-3">
          <ImageOffset src={immanuel} backgroundColor={"bg-water"} />
        </div>
        <div className="col-md-6">
          <h2>Immanuel Nobel</h2>
          <p>
            Immanuel Nobel pioneered the development of underwater mines,
            designed some of the first steam engines to power russian ships,
            installed the first central heating systems in Russian homes and was
            the first to develop modern plywood, cut with a rotary lathe.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-7 col-md-3 offset-md-2">
          <ImageOffset src={ludwig} backgroundColor={"bg-green"} />
        </div>
        <div className="col-md-7 ">
          <h2>Ludwig Nobel</h2>
          <p>
            One of his sons, Ludvig Nobel, was the founder of the
            machine-building factory Ludvig Nobel, a great armaments concern and
            the inventor of the Nobel wheel. Ludvig was also the founder of
            BraNobel, the foremost Russian oil industry in it's time, and
            launched the world's first diesel-driven tugs, tankers and u-boats,
            besides building the first European oil pipeline in Baku. Alfred
            Nobel, a profilic inventor who acquired 355 patents during his
            lifespan, was the creator of dynamite and the blasting cap from
            which he made a substantial future of which he left the bulk to form
            the Nobel Prizes.
          </p>
        </div>
      </div>
    </>
  )
}

export default HistoryMidBreakpoint
