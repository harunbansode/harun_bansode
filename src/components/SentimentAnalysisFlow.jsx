import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

const steps = [
  { id: 1, name: "1. Import pd & np", position: [-3, 2, 0] },
  { id: 2, name: "2. df = pd.read_csv('tweets.csv')", position: [0, 2, 0] },
  { id: 3, name: "3. df['clean_text'] = df['text'].apply(clean_text)", position: [3, 2, 0] },
  { id: 4, name: "4. vectorizer = TfidfVectorizer()\nX = vectorizer.fit_transform(df['clean_text'])", position: [-3, -1, 0] },
  { id: 5, name: "5. model = LogisticRegression()\nmodel.fit(X, df['label'])", position: [0, -1, 0] },
  { id: 6, name: "6. print(classification_report(y_test, y_pred))", position: [3, -1, 0] },
];

const connections = [
  [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]
];

const Node = ({ position, label, code }) => (
  <mesh position={position}>
    <sphereGeometry args={[0.4, 32, 32]} />
    <meshStandardMaterial color="cyan" />
    <Html position={[0, 0.7, 0]} center>
      <div style={{
        color: "white", fontSize: "11px",
        background: "rgba(0, 0, 0, 0.8)",
        padding: "5px", borderRadius: "5px",
        maxWidth: "120px", textAlign: "center",
        transform: "translateY(-10px)"  // Moves text higher
      }}>
        <b>{label}</b>
        <pre style={{
          fontSize: "10px",
          marginTop: "3px",
          whiteSpace: "pre-wrap",
          lineHeight: "1.2em"
        }}>{code}</pre>
      </div>
    </Html>
  </mesh>
);

const Connection = ({ start, end }) => {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line>
      <bufferGeometry attach="geometry" {...lineGeometry} />
      <lineBasicMaterial attach="material" color="white" linewidth={2} />
    </line>
  );
};

export default function SentimentAnalysisFlow() {
  return (
    <Canvas camera={{ position: [0, 0, 7] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {steps.map((step) => (
        <Node key={step.id} position={step.position} label={step.name} code={step.code} />
      ))}
      {connections.map(([startId, endId], index) => {
        const startNode = steps.find((n) => n.id === startId);
        const endNode = steps.find((n) => n.id === endId);
        return <Connection key={index} start={startNode.position} end={endNode.position} />;
      })}
      <OrbitControls />
    </Canvas>
  );
}



