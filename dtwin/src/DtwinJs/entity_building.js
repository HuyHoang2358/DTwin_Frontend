import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

export default {
  addBuilding(object_id, lat, lng, height, viewer) {
    let position = Cesium.Cartesian3.fromDegrees(lng, lat, height);
    let heading = Cesium.Math.toRadians(0);
    let pitch = 0;
    let roll = 0;
    let hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
    let orientation = Cesium.Transforms.headingPitchRollQuaternion(
      position,
      hpr
    );
    return viewer.entities.add({
      name: object_id,
      description: "obj",
      position: position,
      orientation: orientation,
      model: {
        uri: "/Data/models/" + object_id + ".glb",
      },
    });
  },
};
