import Navbar from "../Dashboard/miniComponents/Navbar";
import Bio from "./miniComponents/Bio";
import Rating from "./miniComponents/Rating";

function Profile() {
    return (
        <>
        <Navbar />
            <div className="flex flex-col items-center bg-gray-900 h-[100vh] text-gray-300 p-5">
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                    className="rounded-full w-32 mb-4 mx-auto"
                    alt="Avatar"
                />
                <h5 className="text-xl font-medium leading-tight mb-2">John Doe</h5>
                <p className="text-gray-500">Web designer</p>
                <Rating />

                <Bio />
                <h1 className="text-[50px]  w-full text-center" >Achievements</h1>
                <div className="flex justify-evenly w-full pt-10 ">
                    <img className="rounded-full w-44 mb-4 mx-auto" src="https://png.pngtree.com/png-vector/20210529/ourlarge/pngtree-monthly-best-employee-badge-png-image_3373552.jpg" alt="" />
                    <img className="rounded-full w-44 mb-4 mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0niEh9tDkT7EHDCX4Q9Ei1rjGUkSU0ZyCw&usqp=CAU" alt="" />
                    <img className="rounded-full w-44 mb-4 mx-auto" src="https://png.pngtree.com/png-vector/20210529/ourlarge/pngtree-monthly-best-employee-badge-png-image_3373552.jpg" alt="" />
                    <div className="flex flex-col items-evenly w-[700px] justify-evenly">
                <h1 className="text-left text-[30px] text-pink-500">Feedback from the mentor</h1>
                        <p className="w-[600px]" >Your skills in web development are truly exceptional, and I have been consistently impressed with the high-quality solutions you've delivered for our clients. Your attention to detail and ability to balance functionality and design have not gone unnoticed, and your commitment to staying up-to-date with the latest trends and best practices in the field is truly admirable. Keep up the great work!</p>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Profile;