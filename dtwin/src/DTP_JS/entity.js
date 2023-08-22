import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import store from "../store/";

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
      (geo_json_entity.polygon.material = Cesium.Color.YELLOW.withAlpha(0.3)),
        //Remove the outlines.
        (geo_json_entity.polygon.outline = true);
      geo_json_entity.polygon.outlineColor = Cesium.Color.YELLOW;
      geo_json_entity.polygon.height = 1;
      geo_json_entity.polygon.outlineWidth = 10;
    });
    return geo_json_entity;
  },
};
