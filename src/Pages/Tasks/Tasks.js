import data from './Data/TaskData'
import Task from '../Tasks/miniComponents/Task'
import TaskHeading from '../Tasks/miniComponents/TaskHeading'
import Navbar from '../Dashboard/miniComponents/Navbar'
import Footer from '../Dashboard/miniComponents/Footer'

function Tasks() {



    const Employees = data.map((d) => {
        const { taskNumber, taskName, State, openingDate, expectedCompletionDate, difficulty } = d

        return (
            <Task taskNumber={taskNumber} taskName={taskName} State={State} openingDate={openingDate} expectedCompletionDate={expectedCompletionDate} difficulty={difficulty} />
        )
    })

    function loadEmployees() {
        return (
            <>
                {Employees}
            </>
        )
    }

    return (
        <>
            <Navbar />
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <TaskHeading />
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100" id="empTable">

                        {loadEmployees()}

                    </tbody>

                </table>
            </div>
            <Footer/>
        </>
    )
}

export default Tasks;