import Timeline from "./Timeline";
import { useState } from "react";
import Team from "./Team";
import image from "../assets/PImage.jpg"

function ProjectDetails() {

    const [timelineVisible, setTimelineVisible] = useState(false);

    const handleViewTimelineClick = () => {
        setTimelineVisible(!timelineVisible);
    };

    const [teamVisible, setTeamVisible] = useState(false);

    const handleViewteamClick = () => {
        setTeamVisible(!teamVisible);
    };

    return (
        <>
            <div className="w-[95vw] mx-auto rounded-lg overflow-x-hidden shadow-lg">
                <img className="w-full h-[60vh] object-cover object-center" src={image} alt="Project" />
                <div className="px-6 py-4">
                    <h2 className="text-[40px] font-semibold mb-2 text-pink-500">Hackathon Project</h2>
                    <p className="text-gray-300 text-base mb-2">This will help employers improve the experience of the employees and help employees improve their productivity.</p>
                    <div className="flex items-center justify-between pb-4">
                        <p className="text-gray-400 text-sm">Date: 2023-02-18</p>
                        <div className="w-[250px] flex justify-between">
                        <button className="bg-purple-700 hover:bg-purple-600 items-left text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out" onClick={handleViewTimelineClick}>

                            {timelineVisible ? 'Hide Timeline' : 'View Timeline'}
                        </button>
                        <button className="bg-purple-600 hover:bg-purple-500 items-left text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out" onClick={handleViewteamClick}>

                            {teamVisible ? 'Hide Team' : 'View Team'}
                        </button>
                        </div>
                    </div>
                    {timelineVisible && (
                        <Timeline />

                    )}
                     {teamVisible && (
                        <Team />

                    )}
                </div>
            </div>



        </>
    )
}

export default ProjectDetails;