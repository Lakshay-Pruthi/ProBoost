function TimeTracking() {
    return (
        <>
            <div className="bg-gray-800 rounded-lg shadow-md p-4 w-[50vw]">
                <div className="flex justify-between mb-4">
                    <div className="text-lg font-medium text-purple-500">Time Tracking</div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                        <div className="w-3/4">
                            <div className="text-gray-300 font-medium text-sm mb-1">Task 1</div>
                            <div className="text-gray-400 text-sm">Development work on project XYZ</div>
                        </div>
                        <div className="w-1/4">
                            <div className="text-right">
                                <div className="text-gray-300 font-medium text-sm">Time Spent:</div>
                                <div className="text-gray-400 font-medium text-sm">2h 15m</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-3/4">
                            <div className="text-gray-300 font-medium text-sm mb-1">Task 2</div>
                            <div className="text-gray-400 text-sm">Design work on project ABC</div>
                        </div>
                        <div className="w-1/4">
                            <div className="text-right">
                                <div className="text-gray-300 font-medium text-sm">Time Spent:</div>
                                <div className="text-gray-400 font-medium text-sm">1h 30m</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-3/4">
                            <div className="text-gray-300 font-medium text-sm mb-1">Task 3</div>
                            <div className="text-gray-400 text-sm">Research for new project</div>
                        </div>
                        <div className="w-1/4">
                            <div className="text-right">
                                <div className="text-gray-300 font-medium text-sm">Time Spent:</div>
                                <div className="text-gray-400 font-medium text-sm">45m</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TimeTracking;