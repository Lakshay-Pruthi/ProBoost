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
            <ul className="steps steps-vertical">
        {loadSteps()}
                
            </ul>
        </>
    )
}

export default Timeline;