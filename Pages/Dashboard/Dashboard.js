import Navbar from './miniComponents/Navbar'
import Analytics from './miniComponents/Analytics'
import WorkingTime from './miniComponents/WorkingTime';
import Goals from './miniComponents/Goals';
import Reminder from './miniComponents/Reminder';
import Challenges from './miniComponents/Challenges';
import TimeTracking from './miniComponents/TimeTracking';
import Footer from './miniComponents/Footer';

function Dashboard() {
    return (
        <>
            <Navbar />
            <div className='p-4'>
        <div className='flex justify-evenly pt-5'>
            <Analytics />
            <WorkingTime />
        </div>
        <div className='flex justify-between pt-5'>
            <Goals />
            <Reminder />
            </div>
            <div className='flex justify-between pt-5'>
            <Challenges />
            <TimeTracking />
            </div>
            </div>
            <Footer/>


          



        </>
    )
}

export default Dashboard;