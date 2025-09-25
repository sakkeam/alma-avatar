import { CameraControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AvatarModel from "./AvatarModel";

function App() {
	return (
		<div className="h-screen w-screen">
			<Canvas>
				<color attach="background" args={["#6aa2f5"]} />
				<fogExp2 attach="fog" args={["#6aa2f5", 0.025]} />
				<ambientLight color="#ffffff" intensity={0.5} />
				<directionalLight position={[-5, 5, -5]} intensity={1.5} />

				<PerspectiveCamera makeDefault position={[0, 1, 5]} />
				<CameraControls />

				<mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
					<planeGeometry args={[200, 200]} />
					<meshStandardMaterial color="#ffffff" opacity={0.5} transparent />
				</mesh>
				<AvatarModel />
			</Canvas>
		</div>
	);
}

export default App;
