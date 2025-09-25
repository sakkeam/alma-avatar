import type { VRM } from "@pixiv/three-vrm";
import { VRMLoaderPlugin } from "@pixiv/three-vrm";
import { useGLTF } from "@react-three/drei";
import type JSX from "react";
import * as THREE from "three";

function AvatarModel(
	props: Omit<JSX.IntrinsicElements["primitive"], "object">,
) {
	const modelGLTF = useGLTF("/models/AliciaSolid.vrm", true, true, (loader) => {
		// biome-ignore lint/suspicious/noExplicitAny: Incomplete types.
		loader.register((parser) => new VRMLoaderPlugin(parser as any) as any);
	});
	const vrm = modelGLTF.userData.vrm as VRM | undefined;
	useEffect(() => {
		if (vrm) {
			vrm.scene.traverse((object) => {
				if ((object as THREE.Mesh).isMesh) {
					object.castShadow = true;
				}
			});
		}
	}, [vrm]);
	return vrm ? <primitive object={vrm.scene} {...props} /> : null;
}

export default AvatarModel;
