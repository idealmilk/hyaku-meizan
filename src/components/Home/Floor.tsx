import { Text3D } from "@react-three/drei"

const Floor = () => {
  return (
    <Text3D font="/fonts/helvetiker.json">
      Y
      <meshNormalMaterial />
    </Text3D>
  );
}

export default Floor;
