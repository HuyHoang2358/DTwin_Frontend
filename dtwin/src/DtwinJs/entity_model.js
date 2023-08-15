import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

export default {
  addModel1(model, viewer) {
    let position = Cesium.Cartesian3.fromDegrees(
      model.longitude,
      model.latitude,
      model.height
    );
    let heading = Cesium.Math.toRadians(model.heading);
    let pitch = Cesium.Math.toRadians(model.pitch);
    let roll = Cesium.Math.toRadians(model.roll);
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
        uri:
          "http://172.16.30.214:9000/model-3d-v2/building/glb/glb_texture/" +
          model.modelUrl +
          ".glb",
        color: Cesium.Color.BLUE,
        scale: model.scale,
      },
    });
  },

  addModel(model, viewer) {
    let position = Cesium.Cartesian3.fromDegrees(
      model.longitude,
      model.latitude,
      model.height
    );
    let heading = Cesium.Math.toRadians(model.heading);
    let pitch = Cesium.Math.toRadians(model.pitch);
    let roll = Cesium.Math.toRadians(model.roll);
    let hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
    let orientation = Cesium.Transforms.headingPitchRollQuaternion(
      position,
      hpr
    );
    return viewer.entities.add({
      name: model.id.trim(),
      description: "",
      position: position,
      orientation: orientation,
      model: {
        uri: model.url,
        scale: 0.7,
      },
    });
  },
  /*validate_params(params){
    if
  }*/
  tryParameterModel(entity, params) {
    let position = Cesium.Cartesian3.fromDegrees(
      parseFloat(params["longitude"]),
      parseFloat(params["latitude"]),
      parseFloat(params["height"])
    );
    let hpr = new Cesium.HeadingPitchRoll(
      Cesium.Math.toRadians(parseFloat(params["heading"])),
      Cesium.Math.toRadians(parseFloat(params["pitch"])),
      Cesium.Math.toRadians(parseFloat(params["roll"]))
    );
    let orientation = Cesium.Transforms.headingPitchRollQuaternion(
      position,
      hpr
    );
    console.log(orientation);

    entity.orientation = orientation;
    entity.position = position;
    entity.model.scale = parseFloat(params["scale"]) / 100;
  },
};
