import type { VRM } from "@pixiv/three-vrm";
import { VRMLoaderPlugin } from "@pixiv/three-vrm";
import { useGLTF } from "@react-three/drei";
import type JSX from "react";

function AvatarModel(
	props: Omit<JSX.IntrinsicElements["primitive"], "object">,
) {
	const gltf = useGLTF("/models/AliciaSolid.vrm", true, true, (loader) => {
		// biome-ignore lint/suspicious/noExplicitAny: Incomplete types.
		loader.register((parser) => new VRMLoaderPlugin(parser as any) as any);
	});
	const vrm = gltf.userData.vrm as VRM | undefined;
	return vrm ? <primitive object={vrm.scene} {...props} /> : null;
}

export default AvatarModel;
