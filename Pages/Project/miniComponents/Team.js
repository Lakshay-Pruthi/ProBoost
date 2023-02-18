import TeamMember from "./TeamMember";

function Team() {
    return (
        <>
        <h1 className="text-[30px] text-purple-400">Team</h1>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                     <TeamMember/>
                     <TeamMember/>
                     <TeamMember/>
                     <TeamMember/>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Team;