import {
    PresentationControls,
    Stage,
} from "@react-three/drei";

import Bomb from './Bomb'

const Helper4b = () => {
    return (
        <PresentationControls
            speed={2}
            global
            polar={[-0.1, Math.PI / 4]}
            rotation={[Math.PI / 8, Math.PI / 4, 0]}
        >
            <Stage environment="city" intensity={0.6} castShadow={false}>
                <Bomb />
            </Stage>
        </PresentationControls>

    );
}

export default Helper4b;