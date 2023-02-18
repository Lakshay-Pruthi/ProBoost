function Reminder() {
   return(
   <>
        <div className="bg-gray-800 rounded-lg shadow-md p-4">
            <div className="flex justify-between mb-4">
                <div className="text-lg font-medium text-pink-500">Reminders</div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center mb-2">
                    <div className="w-3/4">
                        <div className="text-gray-300 font-medium text-sm mb-1">Upcoming Event</div>
                        <div className="text-gray-400 text-sm">Team Meeting at 2:00 PM on Friday, March 5th, 2023.</div>
                    </div>
                    <div className="w-1/4">
                        <div className="text-right">
                            <span className="text-gray-300 font-medium text-sm">Time Left:</span> <span className="text-red-500 font-medium text-sm">2 days</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-2">
                    <div className="w-3/4">
                        <div className="text-gray-300 font-medium text-sm mb-1">Upcoming Deadline</div>
                        <div className="text-gray-400 text-sm">Project Proposal Due at 11:59 PM on Sunday, March 12th, 2023.</div>
                    </div>
                    <div className="w-1/4">
                        <div className="text-right">
                            <span className="text-gray-300 font-medium text-sm">Time Left:</span> <span className="text-red-500 font-medium text-sm">9 days</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
   )
}

export default Reminder;