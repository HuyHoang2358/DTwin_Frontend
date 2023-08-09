import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

export default {
  initCesium() {
    Cesium.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiYjJmMDA2NC0yY2YyLTRkOGEtOGVmYi03YmNmZmE1NzcyY2MiLCJpZCI6ODk3NzUsImlhdCI6MTY0OTkyNTEwMX0.VPFCxddX_V2UKjOJeqJszZ25c9z4HA2BSYimPLYrbWo";
    return new Cesium.Viewer("cesiumContainer", {
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
  },
};
