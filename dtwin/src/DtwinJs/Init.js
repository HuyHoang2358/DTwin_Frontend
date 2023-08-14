import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

export default {
  async initCesium() {
    Cesium.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiYjJmMDA2NC0yY2YyLTRkOGEtOGVmYi03YmNmZmE1NzcyY2MiLCJpZCI6ODk3NzUsImlhdCI6MTY0OTkyNTEwMX0.VPFCxddX_V2UKjOJeqJszZ25c9z4HA2BSYimPLYrbWo";

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

    return viewer;
  },
};
