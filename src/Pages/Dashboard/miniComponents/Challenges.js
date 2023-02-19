function Challenges() {
    return (
        <>
            <div className="bg-gray-700 rounded-lg shadow-md p-4 w-[680px]">
                <div className="flex justify-between mb-4">
                    <div className="text-lg font-medium text-red-400">Productivity Challenge</div>
                </div>
                <div className="flex items-center mb-2">
                    <div className="w-1/2">
                        <div className="text-gray-300 font-medium text-sm mb-1">Current Streak</div>
                        <div className="text-gray-400 text-4xl font-bold">14</div>
                    </div>
                    <div className="w-1/2">
                        <div className="text-gray-300 font-medium text-sm mb-1">Next Reward</div>
                        <div className="text-gray-400 text-4xl font-bold">+50 points</div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full mr-2">Complete Task</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full ml-2">Skip Task</button>
                </div>
                <div className="mt-4">
                    <div className="text-gray-300 font-medium text-sm mb-1">Current Challenge</div>
                    <div className="text-gray-400 text-sm">Complete 5 tasks in a row to earn +50 points.</div>
                </div>
            </div>

        </>
    )
}

export default Challenges;