import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import COMMON_FUNC from "@/DtwinJs/common_func";
export default {
  handle_click_get_position(viewer) {
    let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    handler.setInputAction(function (click) {
      // Get the click position in window coordinates
      let windowPosition = click.position;

      // Get the click position in cartographic coordinates (longitude, latitude, height)
      let cartesian = viewer.scene.pickPosition(windowPosition);
      let cartographic = Cesium.Cartographic.fromCartesian(cartesian);
      let longitude = Cesium.Math.toDegrees(cartographic.longitude);
      let latitude = Cesium.Math.toDegrees(cartographic.latitude);

      // Log the latitude and longitude
      console.log("Clicked at: Latitude", latitude, "Longitude", longitude);
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  },
  handle_click_object(viewer) {
    viewer.screenSpaceEventHandler.setInputAction(function onLeftClick(
      movement
    ) {
      const pickedFeature = viewer.scene.pick(movement.position);
      console.log("pickedFeature", pickedFeature);
      let entity = pickedFeature.id;
      let position = COMMON_FUNC.get_position_from_cartesian(
        entity.position._value
      );
      let hpr = COMMON_FUNC.get_hpr_from_quaternion(entity.orientation._value);

      let entity_info = {
        longitude: position.longitude,
        latitude: position.latitude,
        height: position.height,
        pitch: hpr.pitch,
        roll: hpr.roll,
        heading: hpr.heading,
        id: pickedFeature.id.name,
      };

      console.log(entity_info);
      this.emitter.emit("edit-model-position", entity_info);
    },
    Cesium.ScreenSpaceEventType.LEFT_CLICK);
  },
};
