import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
    Environment,
    Float,
    ContactShadows,
    OrbitControls,
} from "@react-three/drei";

import { lazy } from "react";

const Developer = lazy(() => import("./Developer"));

export default function AboutScene() {
    return (
        <div className="h-[360px] w-full sm:h-[480px] lg:h-[650px]">
            <Canvas camera={{
                position: [-2.8, 3.2, 10],
                fov: 30,
            }}>

                <Suspense fallback={null}>
                    {/* Lighting */}
                    {/* Ambient */}
                    <ambientLight intensity={0.2} color="#dbeafe" />

                    {/* Main Key Light */}
                    <directionalLight
                        position={[6, 8, 5]}
                        intensity={1.2}
                        color="#7dd3fc"
                    />

                    {/* Purple Rim */}
                    <directionalLight
                        position={[-6, 5, -4]}
                        intensity={0.7}
                        color="#8b5cf6"
                    />

                    {/* Warm Desk Light */}
                    <spotLight
                        position={[1.4, 2.8, 1.5]}
                        target-position={[0, 0.8, 0]}
                        angle={0.45}
                        penumbra={1}
                        intensity={3}
                        distance={8}
                        color="#FFD88A"
                    />


                    {/* HDR Environment */}
                    <Environment preset="studio" environmentIntensity={0.4} />


                    {/*model */}
                    <Float
                        speed={1.8}
                        rotationIntensity={0.18}
                        floatIntensity={0.8}
                    >
                        <mesh position={[0, 1.5, -2]}>
                            <circleGeometry args={[4.5, 64]} />

                            <meshBasicMaterial
                                color="#2563eb"
                                transparent
                                opacity={0.12}
                            />
                        </mesh>
                        <group rotation={[0, -0.25, 0]}>
                            <Developer
                                scale={0.45}
                                position={[0, -2.2, 0]}
                            />
                        </group>

                    </Float>

                    <mesh
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, -2.15, 0]}
                    >
                        <circleGeometry args={[4.8, 80]} />

                        <meshPhysicalMaterial
                            color="#2563eb"
                            transmission={1}
                            roughness={0.05}
                            metalness={0.1}
                            thickness={1}
                            transparent
                            opacity={0.22}
                        />
                    </mesh>



                    {/* Mouse Interaction */}
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}

                        enableDamping
                        dampingFactor={0.08}

                        rotateSpeed={0.9}

                        minAzimuthAngle={-Math.PI / 3}
                        maxAzimuthAngle={Math.PI / 3}

                        minPolarAngle={Math.PI / 2.3}
                        maxPolarAngle={Math.PI / 2.0}
                    />
                    <ContactShadows
                        position={[0, -2.1, 0]}
                        opacity={0.45}
                        blur={3}
                        scale={12}
                        far={5}
                    />
                </Suspense>
                <fog attach="fog" args={["#030712", 10, 22]} />


            </Canvas>
        </div>
    );
}
