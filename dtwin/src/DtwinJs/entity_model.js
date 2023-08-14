import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

export default {
  addModel(model, viewer) {
    let position = Cesium.Cartesian3.fromDegrees(
      model.longitude,
      model.latitude,
      model.height
    );
    let heading = Cesium.Math.toRadians(model.heading);
    let pitch = model.pitch;
    let roll = model.roll;
    let hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
    let orientation = Cesium.Transforms.headingPitchRollQuaternion(
      position,
      hpr
    );
    return viewer.entities.add({
      name: model.id,
      description: "",
      position: position,
      orientation: orientation,
      model: {
        uri: model.url,
      },
    });
  },
};
