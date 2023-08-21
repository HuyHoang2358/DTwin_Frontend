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
};
