import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';



function FloatingCube({ position, color }) {
    const mesh = useRef();
    useFrame(() => {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    });
    return (
      <mesh ref={mesh} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  }

  function AnimatedText({ text, position, color }) {
    const textRef = useRef();
    useFrame(({ clock }) => {
      textRef.current.position.y = position[1] + Math.sin(clock.elapsedTime) * 0.2;
    });
    return (
      <Text
        ref={textRef}
        position={position}
        color={color}
        fontSize={0.5}
        maxWidth={2}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="/fonts/Inter_Bold.json"
      >
        {text}
      </Text>
    );
  }

export default function Background() {
  return (
    <div>
      <div className="fixed inset-0 z-0">
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <Stars />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <FloatingCube position={[-4, 2, -5]} color="blue" />
            <FloatingCube position={[4, -2, -5]} color="purple" />
            <FloatingCube position={[-3, -3, -5]} color="green" />
            <AnimatedText text="Future" position={[-2, 0, -5]} color="white" />
            <AnimatedText text="Tech" position={[2, 0, -5]} color="white" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
