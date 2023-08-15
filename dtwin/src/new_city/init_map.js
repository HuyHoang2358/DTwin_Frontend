import MAP_FUNC from "@/DtwinJs/map.js";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import ENTITY_MODEL from "@/DtwinJs/entity_model";
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

  // Visualize models
  visualize_models(viewer) {
    let models = [];

    fetch("/Data/new_city/new_city_id.txt")
      .then((response) => response.text())
      .then((text) => {
        let arr = text.split("\n");
        for (let i = 0; i < arr.length; i++) {
          try {
            if (arr[i] !== "") {
              let object_id = arr[i];
              let url = "/Data/new_city/json/" + object_id + ".json";
              fetch(url)
                .then((response) => {
                  return response.json();
                })
                .then((data) => {
                  let model = {
                    longitude: data["result"]["location"]["lng"],
                    latitude: data["result"]["location"]["lat"],
                    height: 0,
                    heading: 0,
                    pitch: 0,
                    roll: 0,
                    id: object_id,
                    url: "/Data/new_city/glb/" + object_id + ".glb",
                  };
                  models.push(ENTITY_MODEL.addModel(model, viewer));
                });
            }
          } catch (e) {
            console.log("ERR", arr[i]);
          }
        }
      });
    return models;
  },
};
