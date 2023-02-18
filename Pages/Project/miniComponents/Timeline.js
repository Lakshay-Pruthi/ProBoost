import data from '../Data/TimelineData'
import Step from './Step';

function Timeline() {

const Steps = data.map((d)=>{
        console.log(d);
        return(
            <>
            <Step title = {d.title} description = {d.description} />
            </>
        )
    })


function loadSteps(){
    return(
        <>
        {Steps}
        </>
    )
}

    return (
        <>
        <h1  className="text-[30px] text-[#8d1cff] pb-4 pt-4 border-t-2 border-dotted border-gray-300">Project Timeline</h1>
            <ul className="steps steps-vertical w-[70vw]">
        {loadSteps()}
                
            </ul>
        </>
    )
}

export default Timeline;