import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";
import gsap from "gsap";
import {useGSAP } from "@gsap/react";

const Target = (props) => {
    const targetRef = useRef();
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

    useGSAP(() => {
        gsap.to(targetRef.current.position,{
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            // ease: "power2.inOut"  // ease-in-out is the default easing function for gsap, but you can also use any easing function provided by GSAP.js
    })
    });

    return(
        <mesh {... props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Target;