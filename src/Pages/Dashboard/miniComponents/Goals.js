function Goals() {
    return (
        <>
            <div className="bg-gray-700 rounded-lg shadow-md p-4 w-[60vw]">
                <div className="flex justify-between mb-4">
                    <div className="text-lg font-medium text-white">Goal Setting</div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                        <div className="w-3/4">
                            <div className="text-gray-300 font-medium text-sm mb-1">Goal 1</div>
                            <div className="text-gray-400 text-sm">Complete 10 online courses on software development by the end of the year.</div>
                        </div>
                        <div className="w-1/4">
                            <div className="text-right">
                                <span className="text-gray-300 font-medium text-sm">Progress:</span> <span className="text-green-500 font-medium text-sm">80%</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-green-500 rounded-full w-[80%]" ></div>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="w-3/4">
                            <div className="text-gray-300 font-medium text-sm mb-1">Goal 2</div>
                            <div className="text-gray-400 text-sm">Spend at least 30 minutes each day learning a new skill or language.</div>
                        </div>
                        <div className="w-1/4">
                            <div className="text-right">
                                <span className="text-gray-300 font-medium text-sm">Progress:</span> <span className="text-green-500 font-medium text-sm">60%</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-green-500 rounded-full w-[60%]"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Goals;