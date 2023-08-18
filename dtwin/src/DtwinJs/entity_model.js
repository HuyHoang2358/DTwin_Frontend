import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import {
  MINIO_GLB_TEXTURE_FOLDER_PATH,
  MINIO_GLB_NO_TEXTURE_FOLDER_PATH,
} from "@/config";
function prepare_position(long, lat, height, heading, pitch, roll) {
  // heading, pitch, roll is degrees
  let position = Cesium.Cartesian3.fromDegrees(long, lat, height);

  let orientation = Cesium.Transforms.headingPitchRollQuaternion(
    position,
    new Cesium.HeadingPitchRoll(
      Cesium.Math.toRadians(heading),
      Cesium.Math.toRadians(pitch),
      Cesium.Math.toRadians(roll)
    )
  );
  return { position: position, orientation: orientation };
}
function prepare_model_url(model_id, is_texture = false) {
  let domain = is_texture
    ? MINIO_GLB_TEXTURE_FOLDER_PATH
    : MINIO_GLB_NO_TEXTURE_FOLDER_PATH;
  return `${domain}${model_id}.glb`;
}
export default {
  addModel(viewer, model) {
    let position_info = prepare_position(
      model.longitude,
      model.latitude,
      model.height,
      model.heading,
      model.pitch,
      model.roll
    );
    return viewer.entities.add({
      name: model.id,
      description: model.type,
      position: position_info.position,
      orientation: position_info.orientation,
      model: {
        uri: prepare_model_url(model.modelUrl, true),
        color: model.color ? null : null /*Cesium.Color.BLUE*/,
        scale: model.scale,
      },
    });
  },
  tryParameterModel(entity, params) {
    params["longitude"] === ""
      ? (params["longitude"] = 0)
      : parseFloat(params["longitude"]);

    params["latitude"] === ""
      ? (params["latitude"] = 0)
      : parseFloat(params["latitude"]);

    params["height"] === ""
      ? (params["height"] = 0)
      : parseFloat(params["height"]);

    let position = Cesium.Cartesian3.fromDegrees(
      params["longitude"],
      params["latitude"],
      params["height"]
    );
    let hpr = new Cesium.HeadingPitchRoll(
      Cesium.Math.toRadians(
        parseFloat(params["heading"] === "" ? "0" : params["heading"])
      ),
      Cesium.Math.toRadians(
        parseFloat(parseFloat(params["pitch"] === "" ? "0" : params["pitch"]))
      ),
      Cesium.Math.toRadians(
        parseFloat(parseFloat(params["roll"] === "" ? "0" : params["roll"]))
      )
    );
    entity.orientation = Cesium.Transforms.headingPitchRollQuaternion(
      position,
      hpr
    );
    entity.position = position;
    entity.model.scale = parseFloat(params["scale"]) / 100;
  },
};
