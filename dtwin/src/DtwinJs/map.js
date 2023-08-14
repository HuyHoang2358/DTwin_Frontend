import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

export default {
  async change_map_type(viewer, map_assetId) {
    console.log(map_assetId);
    return viewer.imageryLayers.addImageryProvider(
      new Cesium.OpenStreetMapImageryProvider({
        url: "https://tile.openstreetmap.org/",
      })
    );
  },
};
