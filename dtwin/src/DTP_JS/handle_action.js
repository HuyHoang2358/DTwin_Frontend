import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import store from "../store/";
import emitter from "@/mitt";
import ENTITY_API from "@/apis/modules/entity";

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
function updateNameOverlay(info, viewer, nameOverlay, pickedFeature, position) {
  // A feature was picked, so show its overlay content
  nameOverlay.style.display = "block";
  nameOverlay.style.bottom = `${viewer.canvas.clientHeight - position.y}px`;
  nameOverlay.style.left = `${position.x}px`;
  if (info.type === "building") {
    nameOverlay.innerHTML = `<div
    class="border-4 rounded-lg border-[#00811f] p-4 bg-white text-black text-xs text-left z-50"
  >
    <p><span class="font-bold text-sm">ID: ${info.id}</span></p>
    <p><span class="font-bold">Tên: </span>${info.ten_toa_nha} </p>
    <p><span class="font-bold">Loại đối tượng: </span> ${info.phan_loai_toa_nha}</p>
    <p><span class="font-bold">Diện tích: </span>${info.dien_tich} m2 </p>
    <p><span class="font-bold">Số tầng: </span>${info.so_tang}</p>
    <p><span class="font-bold">Mật độ: </span>${info.mat_do}%</p>
    <p><span class="font-bold">Địa chỉ: </span>${info.dia_chi.streetAddress},${info.dia_chi.commune},${info.dia_chi.district},${info.dia_chi.province}</p>
    <p><span class="font-bold">Ngày xây dựng: </span>${info.ngay_xay_dung}</p>
    <p><span class="font-bold">Ngày hoàn thành: </span>${info.ngay_hoan_thanh}</p>
    <p><span class="font-bold">Được cấp phép: </span>${info.trang_thai_toa_nha}</p>
  </div>`;
  } else {
    nameOverlay.innerHTML = `<div
    class="border-4 rounded-lg border-[#00811f] p-4 bg-white text-black text-xs text-left z-50"
  >
    <p><span class="font-bold text-sm">ID: ${info.id}</span></p>
    <p><span class="font-bold">Tên: </span>${info.ten_toa_nha} </p>
    <p><span class="font-bold">Loại đối tượng: </span> ${info.phan_loai_toa_nha}</p>
  </div>`;
  }
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
  createNameOverLay() {
    const viewer = store.getters["VIEWER/getViewer"];
    const nameOverlay = document.createElement("div");
    viewer.container.appendChild(nameOverlay);
    nameOverlay.className = "backdrop";
    nameOverlay.style.display = "none";
    nameOverlay.style.position = "absolute";
    nameOverlay.style.bottom = "0";
    nameOverlay.style.left = "0";
    nameOverlay.style["pointer-events"] = "none";
    return nameOverlay;
  },

  handle_click_object(nameOverlay, emit_name) {
    const viewer = store.getters["VIEWER/getViewer"];
    const click_object_handle = new Cesium.ScreenSpaceEventHandler(
      viewer.scene.canvas
    );
    click_object_handle.setInputAction(async function (movement) {
      const pickedFeature = viewer.scene.pick(movement.position);
      const selected_entity = store.getters["VIEWER/getSelectedEntity"];
      if (Cesium.defined(pickedFeature)) {
        let id = null;
        try {
          id = pickedFeature.id.name;
          console.log(pickedFeature);
          if (selected_entity !== null) selected_entity.color = null;
          store.dispatch("VIEWER/setSelectedEntity", pickedFeature.id.model);
          pickedFeature.id.model.color = Cesium.Color.fromAlpha(
            Cesium.Color.fromBytes(238, 0, 51, 255),
            0.6
          );
          let info = await ENTITY_API.getInfoDetail(id);
          console.log(info);
          updateNameOverlay(
            info,
            viewer,
            nameOverlay,
            pickedFeature,
            movement.position
          );
        } catch (e) {
          console.log(e);
        }
        if (id !== null) {
          emitter.emit(emit_name, {
            obj_id: id,
          });
        }
      } else {
        if (selected_entity !== null) selected_entity.color = null;
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    click_object_handle.setInputAction(function (movement) {
      const pickedFeature = viewer.scene.pick(movement.endPosition);
      if (!Cesium.defined(pickedFeature)) {
        nameOverlay.style.display = "none";
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

    return click_object_handle;
  },
  stop_handle(handle) {
    handle.destroy();
  },
};
