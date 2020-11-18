// import React, { Component } from "react";
// import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
// import MyMarker from "./MyMarker";

// export class MapComponent extends Component {
//   render() {
//     return (
//       <div className="map-area">
//         <Map
//           google={this.props.google}
//           zoom={14}
//           center={{
//             lat: 47.444,
//             lng: -122.176,
//           }}
//         >
//           {/* <Marker
//             key="marker_1"
//             position={{
//               lat: 47.444,
//               lng: -122.176,
//             }}
//           /> */}
//           <MyMarker key={"marker_1"} lat={47.444} lng={-122.176} text={1} />
//         </Map>
//       </div>
//     );
//   }
// }
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyA9je0C0IRzk1QozXGHLs3m1a6Gp4zWhFY",
// })(MapComponent);

import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import marker from "../images/marker.png";

export class MapContainer extends Component {
  onMarkerClick() {}
  onInfoWindowClose() {}

  render() {
    return (
      <div className="map-wrapper">
        <Map
          google={this.props.google}
          zoom={12}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lng,
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={"Current location"}
            icon={marker}
          />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Hello</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA9je0C0IRzk1QozXGHLs3m1a6Gp4zWhFY",
})(MapContainer);
