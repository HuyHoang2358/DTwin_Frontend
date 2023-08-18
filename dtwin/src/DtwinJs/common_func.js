import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

export default {
  get_position_from_cartesian(cartesian) {
    let cartographic = Cesium.Cartographic.fromCartesian(cartesian);
    return {
      longitude: Cesium.Math.toDegrees(cartographic.longitude).toFixed(7),
      latitude: Cesium.Math.toDegrees(cartographic.latitude).toFixed(7),
      height: Cesium.Math.toDegrees(cartographic.height).toFixed(7),
    };
  },
  get_hpr_from_quaternion(quaternion) {
    let qx = quaternion.x;
    let qy = quaternion.y;
    let qz = quaternion.z;
    let qw = quaternion.w;
    let pitch = Math.atan2(
      2 * (qw * qx + qy * qz),
      1 - 2 * (qx * qx + qy * qy)
    );

    // Calculate roll (around Y-axis)
    let roll = Math.atan2(2 * (qw * qy - qz * qx), 1 - 2 * (qy * qy + qz * qz));

    // Calculate heading (around Z-axis)
    let heading = Math.atan2(
      2 * (qw * qz + qx * qy),
      1 - 2 * (qz * qz + qx * qx)
    );
    // Convert radians to degrees
    return {
      pitch: Math.floor(Cesium.Math.toDegrees(pitch)),
      roll: Math.floor(Cesium.Math.toDegrees(roll)),
      heading: Math.floor(Cesium.Math.toDegrees(heading)),
    };
  },
};
