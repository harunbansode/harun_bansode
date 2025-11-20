import { myProjects } from "../constants";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import SentimentAnalysisFlow from '../components/SentimentAnalysisFlow.jsx';

const projectCount = myProjects.length;
const Project = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];
    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if(direction === 'previous'){
                return prevIndex === 0? projectCount - 1 : prevIndex - 1;
            }
            else {
                return prevIndex === projectCount - 1? 0 : prevIndex + 1;
            }

        })
    }


    return(
        <section className="sm:px-10 px-5 my-20">
            <h3 className="text-4xl font-semibold mb-2 text-white font-generalsans"> My Work </h3>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>
                    <div className=" flex flex-col gap-5 text-white-600">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                        <p className="text-white">{currentProject.desc}</p>
                        <p className="text-white">{currentProject.subdesc}</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="w-10 h-10 rounded-md p-2 bg-neutral-900 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center">
                                    <img src={tag.path} alt={tag.alt || "Tag icon"} />
                                </div>
                            ))}
                        </div>
                        <a className="flex items-center gap-2 cursor-pointer text-white" href={currentProject.href} target="_blank">
                            <p> Check Live Site</p>
                            <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow"/>
                        </a>
                    </div>
                    <div className="flex justify-between items-center mt-7">
                        <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full" onClick={ () => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4"/>
                        </button>
                        <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full" onClick={ () => handleNavigation('previous')}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4"/>
                        </button>
                    </div>
                </div>
                <div className="h-full w-full bg-black rounded-lg shadow-lg">
                    <Suspense fallback={<p className="text-white text-center mt-20">Loading 3D...</p>}>
                        <SentimentAnalysisFlow />
                    </Suspense>
                </div>
            </div>
        </section>
    )
}

export default Project;