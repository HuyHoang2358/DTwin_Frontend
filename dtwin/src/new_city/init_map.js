import MAP_FUNC from "@/DtwinJs/map.js";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
export default {
  async init_new_city_map(viewer) {
    await MAP_FUNC.change_map_type(viewer, 4);

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
