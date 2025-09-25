import { Canvas } from "@react-three/fiber";
import { createXRStore, XR } from "@react-three/xr";
import AvatarModel from "./AvatarModel";

const store = createXRStore();

function App() {
	return (
		<div className="h-screen w-screen">
			<button type="button" onClick={() => store.enterVR()}>
				Enter VR
			</button>
			<Canvas shadows>
				<XR store={store}>
					<color attach="background" args={["#6aa2f5"]} />
					<fogExp2 attach="fog" args={["#6aa2f5", 0.025]} />
					<ambientLight color="#ffffff" intensity={0.5} />
					<directionalLight castShadow position={[-5, 5, -5]} intensity={1.5} />

					<mesh
						position={[0, 0, 0]}
						receiveShadow
						rotation={[-Math.PI / 2, 0, 0]}
					>
						<planeGeometry args={[200, 200]} />
						<meshStandardMaterial color="#ffffff" opacity={0.5} transparent />
					</mesh>
					<AvatarModel />
				</XR>
			</Canvas>
		</div>
	);
}

export default App;
