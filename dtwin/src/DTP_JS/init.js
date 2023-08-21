import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import store from "../store/";

export default {
  initCesium() {
    console.log("InitCesium");
    // Add token into Cesium Ion
    Cesium.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiYjJmMDA2NC0yY2YyLTRkOGEtOGVmYi03YmNmZmE1NzcyY2MiLCJpZCI6ODk3NzUsImlhdCI6MTY0OTkyNTEwMX0.VPFCxddX_V2UKjOJeqJszZ25c9z4HA2BSYimPLYrbWo";

    // Init viewer with basic params
    let viewer = new Cesium.Viewer("cesiumContainer", {
      baseLayerPicker: true, //  type map
      vrButton: false,
      geocoder: false,
      navigationHelpButton: false,
      selectionIndicator: true,
      shadows: false,
      timeline: false,
      sceneModePicker: false, // type show map
      animation: true,
    });

    // set Time Format
    viewer.animation.viewModel.timeFormatter = function (date) {
      date = Cesium.JulianDate.toDate(date);
      let hh = date.getHours();
      let mm = date.getMinutes();
      let ss = date.getSeconds();
      hh = hh < 10 ? "0" + hh : hh;
      mm = mm < 10 ? "0" + mm : mm;
      ss = ss < 10 ? "0" + ss : ss;
      return `${hh}:${mm}:${ss}`;
    };
    viewer.clock.shouldAnimate = true;
    // Hidden logo cesium in screen
    viewer.cesiumWidget.creditContainer.parentNode.removeChild(
      viewer.cesiumWidget.creditContainer
    );
    store.dispatch("VIEWER/setViewer", viewer);

    console.log("dispatch viewer");
    // Set up Camera
    const LAT_DN = 16.094549538872112;
    const LON_DN = 108.22868212290481;
    const HEIGHT_DN = 4000;
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(LON_DN, LAT_DN, HEIGHT_DN),
      orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-90.0),
        roll: 0.0,
      },
    });
  },
};
