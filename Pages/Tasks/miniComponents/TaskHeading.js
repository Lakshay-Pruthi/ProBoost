function TaskHeading(){
    return(
        <>
        
       
            <thead className="bg-purple-900   bg-gradient-to-b from-purple-900 via-purple-700 to-purple-500 text-white">
                <tr>
                    <th scope="col" className="px-6 py-4 font-medium ">S.No.</th>
                    <th scope="col" className="px-6 py-4 font-medium ">Task</th>
                    <th scope="col" className="px-6 py-4 font-medium ">State</th>
                    <th scope="col" className="px-6 py-4 font-medium ">Opened</th>
                    <th scope="col" className="px-6 py-4 font-medium text-center">Expected Completion Date</th>
                    <th scope="col" className="px-6 py-4 font-medium  text-center">Task Difficulty</th>
                </tr>
            </thead>
            
        </>
    )
}

export default TaskHeading;