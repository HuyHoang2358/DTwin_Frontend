import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import store from "../store/";

export default {
  show_camera_position() {
    const viewer = store.getters["VIEWER/getViewer"];
    const camera = viewer.camera;
    console.log(camera);
    // Lấy vị trí camera
    const positionCartographic = camera.positionCartographic;
    let camera_position_information = {
      latitude: Cesium.Math.toDegrees(positionCartographic.latitude),
      longitude: Cesium.Math.toDegrees(positionCartographic.longitude),
      height: positionCartographic.height,
      heading: camera.heading,
      pitch: camera.pitch,
      roll: camera.roll,
    };
    console.log(camera_position_information);
    return camera_position_information;
  },
  zoom_in_map(amount_mete_zoom) {
    const viewer = store.getters["VIEWER/getViewer"];
    let camera_position = this.show_camera_position();
    if (camera_position.heading < amount_mete_zoom) {
      amount_mete_zoom = Math.floor(camera_position.height / 2);
    }
    viewer.camera.zoomIn(amount_mete_zoom);
  },
  zoom_out_map(amount_mete_zoom) {
    const viewer = store.getters["VIEWER/getViewer"];
    viewer.camera.zoomOut(amount_mete_zoom);
  },
  turn_on_fullscreen() {
    Cesium.Fullscreen.requestFullscreen(document.body);
  },

  exit_fullscreen() {
    Cesium.Fullscreen.exitFullscreen();
  },
};
