import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import store from "../store/";
import emitter from "@/mitt";

function get_position(movement_position, viewer) {
  const cartesian = viewer.camera.pickEllipsoid(
    movement_position,
    viewer.scene.globe.ellipsoid
  );
  if (cartesian) {
    const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
    const longitude = parseFloat(
      Cesium.Math.toDegrees(cartographic.longitude).toFixed(6)
    );
    const latitude = parseFloat(
      Cesium.Math.toDegrees(cartographic.latitude).toFixed(6)
    );
    //console.log("Mouse Position: Lat", latitude, "Long", longitude);
    return {
      latitude: latitude,
      longitude: longitude,
    };
  }
  return null;
}
export default {
  handle_move_get_position(emit_name) {
    const viewer = store.getters["VIEWER/getViewer"];
    const move_get_position_handle = new Cesium.ScreenSpaceEventHandler(
      viewer.scene.canvas
    );
    move_get_position_handle.setInputAction(function (movement) {
      let mouse_position = get_position(movement.endPosition, viewer);
      if (mouse_position !== null) {
        emitter.emit(emit_name, {
          point: {
            latitude: mouse_position.latitude,
            longitude: mouse_position.longitude,
          },
        });
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    return move_get_position_handle;
  },
  handle_click_get_position(emit_name) {
    const viewer = store.getters["VIEWER/getViewer"];
    const click_get_position_handle = new Cesium.ScreenSpaceEventHandler(
      viewer.scene.canvas
    );
    click_get_position_handle.setInputAction(function (movement) {
      let mouse_position = get_position(movement.position, viewer);
      if (mouse_position !== null) {
        emitter.emit(emit_name, {
          point: {
            latitude: mouse_position.latitude,
            longitude: mouse_position.longitude,
          },
          status_end: false,
        });
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    // finish handle when Right Click
    click_get_position_handle.setInputAction(function () {
      click_get_position_handle.destroy();
      emitter.emit(emit_name, {
        point: {
          latitude: null,
          longitude: null,
        },
        status_end: true,
      });
    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);

    //console.log(click_get_position_handle);
    return click_get_position_handle;
  },
  handle_click_object(emit_name) {
    const viewer = store.getters["VIEWER/getViewer"];
    const click_object_handle = new Cesium.ScreenSpaceEventHandler(
      viewer.scene.canvas
    );
    click_object_handle.setInputAction(function (movement) {
      const pickedFeature = viewer.scene.pick(movement.position);
      if (Cesium.defined(pickedFeature)) {
        let id = null;
        try {
          id = pickedFeature.id.name;
        } catch (e) {
          console.log(e);
        }
        if (id !== null) {
          emitter.emit(emit_name, {
            obj_id: id,
          });
        }
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    return click_object_handle;
  },
  stop_handle(handle) {
    handle.destroy();
  },
};
