import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import COMMON_FUNC from "@/DtwinJs/common_func";
import emitter from "@/mitt";
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

  start_handle_move_object(viewer) {
    console.log("starting");
    let move_object_handle = new Cesium.ScreenSpaceEventHandler(
      viewer.scene.canvas
    );
    move_object_handle.setInputAction(function (movement) {
      const cartesian = viewer.camera.pickEllipsoid(
        movement.endPosition,
        viewer.scene.globe.ellipsoid
      );
      if (cartesian) {
        const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        const longitudeString = Cesium.Math.toDegrees(
          cartographic.longitude
        ).toFixed(7);
        const latitudeString = Cesium.Math.toDegrees(
          cartographic.latitude
        ).toFixed(7);
        emitter.emit("edit-model-lat-lon", {
          longitude: parseFloat(longitudeString),
          latitude: parseFloat(latitudeString),
        });
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    move_object_handle.setInputAction(function () {
      console.log("finish");
      move_object_handle.destroy();
    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
  },

  /*handle_click_object(viewer) {
    viewer.screenSpaceEventHandler.setInputAction(function onLeftClick(
      movement
    ) {
      const pickedFeature = viewer.scene.pick(movement.position);
      if (!Cesium.defined(pickedFeature)) {
        return;
      }
      console.log("pickedFeature", pickedFeature);
      let entity = pickedFeature.id;
      let position = COMMON_FUNC.get_position_from_cartesian(
        entity.position._value
      );
      //let hpr = COMMON_FUNC.get_hpr_from_quaternion(entity.orientation._value);
      console.log("scale", pickedFeature.detail.model.scale);

      let entity_info = {
        longitude: position.longitude,
        latitude: position.latitude,
        height: position.height,
        pitch: "180",
        roll: "180",
        heading: "180",
        id: pickedFeature.id.name,
        scale: Math.floor(parseFloat(pickedFeature.detail.model.scale) * 100),
      };

      emitter.emit("edit-model-position", {
        entity: entity,
        entity_info: entity_info,
      });
    },
    Cesium.ScreenSpaceEventType.LEFT_CLICK);
  },*/

  start_left_click_object_handle(viewer) {
    let left_click_object_handle = new Cesium.ScreenSpaceEventHandler(
      viewer.scene.canvas
    );

    left_click_object_handle.setInputAction(function (movement) {
      const pickedFeature = viewer.scene.pick(movement.position);
      if (!Cesium.defined(pickedFeature)) {
        return;
      }
      console.log("click_object_handle:pickedFeature", pickedFeature);
      let entity = pickedFeature.id;
      let position = COMMON_FUNC.get_position_from_cartesian(
        entity.position._value
      );
      //let hpr = COMMON_FUNC.get_hpr_from_quaternion(entity.orientation._value);

      let entity_info = {
        longitude: position.longitude,
        latitude: position.latitude,
        height: 0,
        pitch: 0,
        roll: 0,
        heading: 0,
        modelUrl: pickedFeature.id.name,
        id: pickedFeature.id.name,
        type: "building",
        scale: Math.floor(parseFloat(pickedFeature.detail.model.scale) * 100),
      };
      emitter.emit("show-edit-form", {
        entity: entity,
      });
      emitter.emit("entity-form-info", {
        entity: entity,
        entity_info: entity_info,
      });
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  },
};
