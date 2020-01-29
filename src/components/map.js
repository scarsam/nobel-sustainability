import React from 'react'
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker } from 'react-leaflet'
import '../styles/components/map.scss'

const LeafletMap = ({ position, zoom, markerText }) => {
  return (
    <Map center={position} zoom={zoom}>
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} />
    </Map>
  )
}

LeafletMap.propTypes = {
  position: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
  markerText: PropTypes.string,
}

LeafletMap.defaultProps = {
  markerText: '',
}

export default LeafletMap
