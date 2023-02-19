import Navbar from "../Dashboard/miniComponents/Navbar";
import Achievements from "./miniComponents/Achievements";
import Bio from "./miniComponents/Bio";
import Rating from "./miniComponents/Rating";

function Profile() {
    return (
        <>
        <Navbar />
            <div className="flex flex-col items-center bg-gray-800 text-gray-300 p-5 ">
                <div className="shadow-sm shadow-white p-8 flex flex-col items-center bg-gray-900 rounded-xl">
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                    className="rounded-full w-32 mb-4 mx-auto"
                    alt="Avatar"
                />
                <h5 className="text-xl font-medium leading-tight mb-2">Anonymous X</h5>
                <p className="text-gray-500">Web designer</p>
                <Rating />

                <Bio />
                </div>
               <Achievements />

            </div>
        </>
    )
}

export default Profile;