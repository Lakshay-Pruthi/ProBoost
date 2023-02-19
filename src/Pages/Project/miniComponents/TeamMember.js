function TeamMember(){
    return(
        <>
           <tr className="hover:bg-gray-800 bg-gray-900">
                            <th className="flex gap-3 px-6 py-4 font-normal text-gray-300">
                                <div className="relative h-10 w-10">
                                    <img
                                        className="h-full w-full rounded-full object-cover object-center"
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                                </div>
                                <div className="text-sm">
                                    <div className="font-medium text-gray-700">Steven Jobs</div>
                                    <div className="text-gray-400">jobs@sailboatui.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <span
                                    className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                    Active
                                </span>
                            </td>
                            <td className="px-6 py-4">Product Designer</td>
                            <td className="px-6 py-4">
                                <div className="flex gap-2">
                                    <span
                                        className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                                    >
                                        Design
                                    </span>
                                    <span
                                        className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
                                    >
                                        Product
                                    </span>
                                    <span
                                        className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                                    >
                                        Develop
                                    </span>
                                </div>
                            </td>
                            <td>
                            <button className="bg-purple-500 text-gray-200 px-3 py-1 rounded-[30px]">Ask for Help</button>
                            </td>
                        </tr>
        </>
    )
}
export default TeamMember;