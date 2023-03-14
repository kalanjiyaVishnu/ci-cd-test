import LittleSingham from "./game-configs/Little Singham.json"
import TreasureHunt from "./game-configs/TresureHunt.json"
import UiConfigs from "./ui-config/FinalConfig.json"

const configsMap: {
  [key: string]: any
} = {
  "little-singham": LittleSingham,
  "treasure-hunt": TreasureHunt,
  "ui-configs": UiConfigs,
}
export default configsMap
