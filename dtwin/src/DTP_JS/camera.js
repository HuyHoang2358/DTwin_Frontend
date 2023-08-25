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

  fly_to_ThuDuc() {
    const viewer = store.getters["VIEWER/getViewer"];
    let HCM_latitude = 10.762;
    let HCM_longitude = 106.776;
    let HCM_height = 29000;
    // Fly to a position with an orientation using heading, pitch and roll.
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(
        HCM_longitude,
        HCM_latitude,
        HCM_height
      ),
      orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-80.0),
        roll: 0.0,
      },
    });
  },

  fly_to_NewCity() {
    const viewer = store.getters["VIEWER/getViewer"];
    let lat = 16.094184230925293;
    let lon = 108.22316596382925;
    let height = 42.5;
    // Fly to a position with an orientation using heading, pitch and roll.
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(lon, lat, height),
      orientation: {
        heading: 1.8204192912713557,
        pitch: -0.06265730544520909,
        roll: 6.283184095884908,
      },
    });
  },
};
