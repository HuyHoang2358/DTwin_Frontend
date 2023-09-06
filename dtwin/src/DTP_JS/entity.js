import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import store from "../store/";
import {
  MINIO_GLB_NO_TEXTURE_FOLDER_PATH,
  MINIO_GLB_TEXTURE_FOLDER_PATH,
  ENV_NETWORK,
  LOCAL_GLB_TEXTURE_FOLDER_PATH,
  LOCAL_GLB_NO_TEXTURE_FOLDER_PATH,
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
  let domain = "";
  if (ENV_NETWORK === "OFFLINE")
    domain = is_texture
      ? LOCAL_GLB_TEXTURE_FOLDER_PATH
      : LOCAL_GLB_NO_TEXTURE_FOLDER_PATH;
  else
    domain = is_texture
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

  async load_entity_from_geo_json(path_file, show_name = true) {
    let geo_json_entity = null;
    const viewer = store.getters["VIEWER/getViewer"];
    const promise = Cesium.GeoJsonDataSource.load(path_file);

    await promise.then(function (dataSource) {
      viewer.dataSources.add(dataSource);

      //Get the array of entities
      let entities = dataSource.entities.values;
      geo_json_entity = entities[0];
      /*geo_json_entity.polygon.material = Cesium.Color.YELLOW.withAlpha(0.3);
      geo_json_entity.polygon.height = 1;
      geo_json_entity.polygon.outlineWidth = 10;*/

      for (let i = 0; i < entities.length; i++) {
        try {
          const entity = entities[i];
          entity.polygon.material = Cesium.Color.WHITE.withAlpha(0.1);
          entity.polygon.height = 1;
          entity.polygon.outline = true;
          entity.polygon.outlineColor = Cesium.Color.YELLOW;
          entity.polygon.outlineWidth = 10;

          if (show_name) {
            let positions = entity.polygon.hierarchy["_value"]["positions"];
            let centerPoint =
              Cesium.BoundingSphere.fromPoints(positions).center;
            viewer.entities.add({
              position: centerPoint,
              label: {
                text: entities[i]["_properties"]["_ten"]["_value"].slice(7),
                font: "Helvetica",
                fillColor: Cesium.Color.YELLOW,
              },
            });
          }
        } catch (e) {
          console.log(e);
        }
      }
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
        scale: model.scale,
      },
    });
  },

  draw_x_y_z(center_point) {
    const viewer = store.getters["VIEWER/getViewer"];
    let position_info = prepare_position(
      center_point.longitude,
      center_point.latitude,
      center_point.height,
      0,
      0,
      0
    );
    viewer.entities.add({
      name: "XXXX",
      description: "",
      position: position_info.position,
      orientation: position_info.orientation,
      model: {
        uri: "/Data/map/truc.glb",
        color: Cesium.Color.BLUE,
        scale: 0.5,
      },
    });
    position_info = prepare_position(
      center_point.longitude,
      center_point.latitude,
      center_point.height,
      0,
      0,
      90
    );
    viewer.entities.add({
      name: "YYYY",
      description: "",
      position: position_info.position,
      orientation: position_info.orientation,
      model: {
        uri: "/Data/map/truc.glb",
        color: Cesium.Color.RED,
      },
    });
    position_info = prepare_position(
      center_point.longitude,
      center_point.latitude,
      center_point.height,
      90,
      0,
      90
    );
    viewer.entities.add({
      name: "YYYY",
      description: "",
      position: position_info.position,
      orientation: position_info.orientation,
      model: {
        uri: "/Data/map/truc.glb",
        color: Cesium.Color.GREEN,
      },
    });
  },
};
