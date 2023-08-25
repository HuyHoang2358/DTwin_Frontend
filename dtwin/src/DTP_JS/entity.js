import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import store from "../store/";
import {
  MINIO_GLB_NO_TEXTURE_FOLDER_PATH,
  MINIO_GLB_TEXTURE_FOLDER_PATH,
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
  polygon_entity(polygon_points) {
    const viewer = store.getters["VIEWER/getViewer"];
    return viewer.entities.add({
      name: "Polygon",
      polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArray(polygon_points),
        material: Cesium.Color.YELLOW.withAlpha(0.5),
      },
      outline: true,
    });
  },

  update_polygon_entity(polygon_entity, points) {
    polygon_entity.polygon.hierarchy =
      Cesium.Cartesian3.fromDegreesArray(points);
  },

  point_entity(point) {
    const viewer = store.getters["VIEWER/getViewer"];
    return viewer.entities.add({
      name: "Point",
      position: Cesium.Cartesian3.fromDegrees(point.longitude, point.latitude),
      point: {
        pixelSize: 5,
        color: Cesium.Color.RED,
      },
    });
  },
  update_point_entity(point_entity, point) {
    point_entity.position = Cesium.Cartesian3.fromDegrees(
      point.longitude,
      point.latitude
    );
  },

  async load_entity_from_geo_json(path_file) {
    let geo_json_entity = null;
    const viewer = store.getters["VIEWER/getViewer"];
    const promise = Cesium.GeoJsonDataSource.load(path_file);

    await promise.then(function (dataSource) {
      viewer.dataSources.add(dataSource);

      //Get the array of entities
      let entities = dataSource.entities.values;
      //console.log(entities);
      geo_json_entity = entities[0];
      //console.log(city_bounding_entity);
      geo_json_entity.polygon.material = Cesium.Color.YELLOW.withAlpha(0.3);
      //Remove the outlines.
      geo_json_entity.polygon.height = 1;
      geo_json_entity.polygon.outlineWidth = 10;
    });
    return geo_json_entity;
  },

  model_entity(model) {
    const viewer = store.getters["VIEWER/getViewer"];
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
};
