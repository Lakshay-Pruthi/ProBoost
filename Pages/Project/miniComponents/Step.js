function Step(props){
    return(
    <>
            <li className="step step-primary"><div className="text-left"><span className="text-xl text-[#641ae7]">{props.title}</span><p>{props.description}</p></div></li>
    </>
    )
}

export default Step;