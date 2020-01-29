import React from 'react'
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import '../styles/components/map.scss'

const LeafletMap = ({ position, zoom, markerText }) => {
  return (
    <Map center={position} zoom={zoom}>
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {markerText !== '' && (
        <Marker position={position}>
          <Popup>{markerText}</Popup>
        </Marker>
      )}
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

// class LeafletMap extends React.Component {
//   static propTypes = {
//     /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
//     position: PropTypes.array,

//     /** Initial zoom level for the map (default 13) **/
//     zoom: PropTypes.number,

//     /** If set, will display a marker, which when clicked will display this text **/
//     markerText: PropTypes.string,
//   }

//   static defaultProps = {
//     position: [51, -1],
//     zoom: 13,
//     markerText: '',
//   }

//   render() {
//     return (
//       <Map center={this.props.position} zoom={this.props.zoom}>
//         <TileLayer
//           url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {this.props.markerText !== '' && (
//           <Marker position={this.props.position}>
//             <Popup>{this.props.markerText}</Popup>
//           </Marker>
//         )}
//       </Map>
//     )
//   }
// }
