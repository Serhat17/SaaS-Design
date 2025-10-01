'use client'

import React, { useRef, useEffect, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import * as THREE from 'three'

// Hyper-realistic VW T-Roc inspired SUV with professional animations
function HyperRealisticSUV() {
  const carRef = useRef<THREE.Group>(null)
  const wheelRefs = useRef<THREE.Mesh[]>([])
  const headlightRefs = useRef<THREE.Mesh[]>([])
  const [speed, setSpeed] = useState(0)
  
  // Advanced PBR materials
  const carPaint = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#F59C1A',
    metalness: 0.95,
    roughness: 0.05,
    clearcoat: 1.0,
    clearcoatRoughness: 0.03,
    reflectivity: 0.9
  }), [])
  
  const glass = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#1a1a2e',
    transmission: 0.95,
    opacity: 0.1,
    ior: 1.52,
    thickness: 0.1
  }), [])
  
  const chrome = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#ffffff',
    metalness: 1.0,
    roughness: 0.05,
    reflectivity: 1.0
  }), [])

  useFrame((state) => {
    if (!carRef.current) return
    
    const time = state.clock.elapsedTime
    const cycleTime = 8
    const progress = (time % cycleTime) / cycleTime
    
    // Driving simulation
    if (progress < 0.5) {
      setSpeed(progress * 2 * 60) // 0-60 km/h
    } else {
      setSpeed((1 - (progress - 0.5) * 2) * 60)
    }
    
    // Wheel rotation
    const wheelSpeed = (speed / 60) * Math.PI * 2 * 0.016
    wheelRefs.current.forEach((wheel, i) => {
      if (wheel) {
        wheel.rotation.x += wheelSpeed
        if (i < 2) wheel.rotation.y = Math.sin(time * 0.3) * 0.2 // Steering
      }
    })
    
    // Headlight intensity
    headlightRefs.current.forEach((light) => {
      if (light?.material) {
        const mat = light.material as THREE.MeshPhysicalMaterial
        mat.emissiveIntensity = 0.5 + Math.sin(time * 0.1) * 0.3
      }
    })
    
    // Showcase rotation
    carRef.current.rotation.y = Math.sin(time * 0.2) * 0.3
    carRef.current.position.y = Math.sin(time * 4) * 0.01
  })

  return (
    <group ref={carRef} position={[0, -0.2, 0]} scale={[1.4, 1.4, 1.4]}>
      
      {/* Main Body - Authentic T-Roc proportions */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.8, 0.85, 1.35]} />
        <primitive object={carPaint} />
      </mesh>
      
      {/* SUV Cabin */}
      <mesh position={[0, 1.1, 0]} scale={[0.88, 0.75, 0.94]} castShadow>
        <boxGeometry args={[2.8, 0.85, 1.35]} />
        <primitive object={carPaint} />
      </mesh>
      
      {/* Windshield */}
      <mesh position={[0.75, 1.15, 0]} rotation={[0, 0, -0.28]} castShadow>
        <boxGeometry args={[0.95, 0.85, 1.25]} />
        <primitive object={glass} />
      </mesh>
      
      {/* Wheels */}
      {[
        [-1.0, 0.0, 0.8] as [number, number, number],   // FL
        [1.0, 0.0, 0.8] as [number, number, number],    // FR  
        [-1.0, 0.0, -0.8] as [number, number, number],  // RL
        [1.0, 0.0, -0.8] as [number, number, number]    // RR
      ].map((pos, i) => (
        <group key={i} position={pos}>
          <mesh 
            ref={(el) => { if (el) wheelRefs.current[i] = el }}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
          >
            <cylinderGeometry args={[0.35, 0.35, 0.22, 32]} />
            <meshPhysicalMaterial color="#1a1a1a" roughness={0.9} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.28, 0.28, 0.20, 32]} />
            <primitive object={chrome} />
          </mesh>
        </group>
      ))}
      
      {/* LED Headlights */}
      <group position={[1.45, 0.4, 0]}>
        <mesh 
          position={[0, 0, 0.48]} 
          ref={(el) => { if (el) headlightRefs.current[0] = el }}
          castShadow
        >
          <sphereGeometry args={[0.18, 24, 24]} />
          <meshPhysicalMaterial 
            color="#f8f8ff"
            emissive="#ffffff"
            emissiveIntensity={0.5}
          />
        </mesh>
        <mesh 
          position={[0, 0, -0.48]} 
          ref={(el) => { if (el) headlightRefs.current[1] = el }}
          castShadow
        >
          <sphereGeometry args={[0.18, 24, 24]} />
          <meshPhysicalMaterial 
            color="#f8f8ff"
            emissive="#ffffff"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>
      
      {/* Taillights */}
      <group position={[-1.45, 0.35, 0]}>
        <mesh position={[0, 0, 0.48]} castShadow>
          <boxGeometry args={[0.1, 0.28, 0.18]} />
          <meshPhysicalMaterial 
            color="#ff0000"
            emissive="#ff0000"
            emissiveIntensity={0.4}
            transparent
            opacity={0.85}
          />
        </mesh>
        <mesh position={[0, 0, -0.48]} castShadow>
          <boxGeometry args={[0.1, 0.28, 0.18]} />
          <meshPhysicalMaterial 
            color="#ff0000"
            emissive="#ff0000"
            emissiveIntensity={0.4}
            transparent
            opacity={0.85}
          />
        </mesh>
      </group>
      
      {/* Grille */}
      <mesh position={[1.42, 0.45, 0]} castShadow>
        <boxGeometry args={[0.06, 0.45, 1.1]} />
        <meshPhysicalMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Brand emblem */}
      <mesh position={[1.45, 0.45, 0]} castShadow>
        <cylinderGeometry args={[0.09, 0.09, 0.03, 32]} />
        <meshPhysicalMaterial 
          color="#4a90e2"
          metalness={0.9}
          roughness={0.1}
          emissive="#4a90e2"
          emissiveIntensity={0.15}
        />
      </mesh>
    </group>
  )
}

// Enhanced lighting scene for hyper-realistic rendering
function Scene() {
  return (
    <>
      {/* Professional studio lighting setup */}
      <ambientLight intensity={0.4} color="#ffffff" />
      
      {/* Main directional light (sun) */}
      <directionalLight 
        position={[15, 20, 10]} 
        intensity={1.8}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      {/* Fill light */}
      <directionalLight 
        position={[-10, 15, 5]} 
        intensity={0.6}
        color="#87ceeb"
      />
      
      {/* Accent lighting */}
      <pointLight position={[0, 5, -8]} intensity={0.8} color="#F59C1A" />
      <pointLight position={[8, 3, 3]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-8, 3, 3]} intensity={0.5} color="#ffffff" />
      
      {/* Ground reflection */}
      <pointLight position={[0, -2, 0]} intensity={0.3} color="#f0f0f0" />
      
      {/* Showroom spotlight */}
      <spotLight
        position={[0, 10, 0]}
        angle={Math.PI / 6}
        penumbra={0.5}
        intensity={1.2}
        color="#ffffff"
        castShadow
      />
      
      {/* Environment lighting */}
      <hemisphereLight 
        args={["#87ceeb", "#f0f0f0", 0.3]}
      />
      
      <HyperRealisticSUV />
    </>
  )
}

interface Hero3DProps {
  className?: string
}

export function Hero3D({ className = '' }: Hero3DProps) {
  const [isClient, setIsClient] = useState(false)
  const [isLowPerformance, setIsLowPerformance] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Simple performance detection
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    
    if (!gl) {
      setIsLowPerformance(true)
      return
    }

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
    if (debugInfo) {
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
      // Basic check for integrated graphics
      if (renderer.includes('Intel') && !renderer.includes('Iris')) {
        setIsLowPerformance(true)
      }
    }
  }, [])

  if (!isClient) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="w-32 h-32 bg-brand-gradient rounded-full animate-pulse" />
      </div>
    )
  }

  if (isLowPerformance) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="w-32 h-32 bg-brand-gradient rounded-full flex items-center justify-center animate-float">
          <div className="w-16 h-16 border-4 border-white rounded-full animate-rotate-slow" />
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <Canvas
        camera={{ 
          position: [3, 2, 5], 
          fov: 45,
          near: 0.1,
          far: 100
        }}
        gl={{ 
          antialias: true, 
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
          outputColorSpace: THREE.SRGBColorSpace
        }}
        shadows
        style={{ background: 'transparent' }}
      >
        <Scene />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 3}
          maxAzimuthAngle={Math.PI / 4}
          minAzimuthAngle={-Math.PI / 4}
          dampingFactor={0.05}
          enableDamping
        />
      </Canvas>
    </div>
  )
}
