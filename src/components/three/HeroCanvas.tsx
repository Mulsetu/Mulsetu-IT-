"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const count = 3000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.5 + Math.random() * 2.5;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.04;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.06;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#0ec88c"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

function NetworkMesh() {
  const ref = useRef<THREE.Group>(null!);
  const nodeCount = 18;

  const nodes = useMemo(() => {
    return Array.from({ length: nodeCount }, (_, i) => {
      const theta = (i / nodeCount) * Math.PI * 2;
      const phi = Math.acos(2 * (i / nodeCount) - 1);
      const r = 1.2;
      return new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    });
  }, []);

  const lineGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 1.4) {
          points.push(nodes[i].clone(), nodes[j].clone());
        }
      }
    }
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, [nodes]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.3;
  });

  return (
    <group ref={ref}>
      {/* Connection lines */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#0ec88c" transparent opacity={0.25} />
      </lineSegments>

      {/* Node spheres */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#12f0a8" />
        </mesh>
      ))}

      {/* Central glowing core */}
      <mesh>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshBasicMaterial color="#0ec88c" transparent opacity={0.15} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshBasicMaterial color="#12f0a8" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

function FloatingRings() {
  const ref1 = useRef<THREE.Mesh>(null!);
  const ref2 = useRef<THREE.Mesh>(null!);
  const ref3 = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref1.current) {
      ref1.current.rotation.x = t * 0.2;
      ref1.current.rotation.y = t * 0.15;
    }
    if (ref2.current) {
      ref2.current.rotation.x = -t * 0.12;
      ref2.current.rotation.z = t * 0.18;
    }
    if (ref3.current) {
      ref3.current.rotation.y = t * 0.08;
      ref3.current.rotation.z = -t * 0.1;
    }
  });

  const ringMat = (opacity: number) => (
    <meshBasicMaterial color="#0ec88c" transparent opacity={opacity} wireframe />
  );

  return (
    <>
      <mesh ref={ref1}>
        <torusGeometry args={[1.6, 0.004, 2, 80]} />
        {ringMat(0.3)}
      </mesh>
      <mesh ref={ref2}>
        <torusGeometry args={[2.1, 0.003, 2, 100]} />
        {ringMat(0.18)}
      </mesh>
      <mesh ref={ref3}>
        <torusGeometry args={[2.6, 0.002, 2, 120]} />
        {ringMat(0.1)}
      </mesh>
    </>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 55 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#0ec88c" />
        <ParticleField />
        <NetworkMesh />
        <FloatingRings />
      </Canvas>
    </div>
  );
}
