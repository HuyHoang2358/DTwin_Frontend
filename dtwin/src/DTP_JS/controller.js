import ENTITY_API from "@/apis/modules/entity";
import DTP_ENTITY from "@/DTP_JS/entity";
import DTP_CAMERA from "@/DTP_JS/camera";
async function visualize3DModel(entity_types) {
  let all_entities = [];
  for (const entity_type of entity_types) {
    let data_entities = await ENTITY_API.getAllEntities(entity_type);
    console.log(entity_type, data_entities);
    let entities = [];
    data_entities.forEach((e) => {
      entities.push(DTP_ENTITY.model_entity(e));
    });
    all_entities.push({
      type: entity_type,
      entities: entities,
    });
  }
  return all_entities;
}
export default {
  open3D() {
    // move camera to 3D area
    DTP_CAMERA.fly_to_NewCity();
    // visualize 3D model
    let visualize_entities = [
      "building",
      "plant",
      "streetLight",
      "religion",
      "carPark",
      "bridge",
      "construction",
      "ship",
      "goods",
      "vehicle",
    ];
    let all_entities = visualize3DModel(visualize_entities);
    console.log(all_entities);
    // turn on handle
  },
};
