// import ToDos from './ToDos'

function Analytics() {
    return (
        <>
            <div className="stats shadow bg-gray-800">

                <div className="stat">
                    <div className="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>

                    </div>
                    <div className="stat-title">Projects Completed</div>
                    <div className="stat-value text-primary">16</div>
                    <div className="stat-desc">5 more than last year</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Productivity Points</div>
                    <div className="stat-value text-secondary">26K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Productivity</div>
                    <div className="stat-desc text-secondary">2% more than last year</div>
                </div>

            </div>
        </>
    )
}

export default Analytics;