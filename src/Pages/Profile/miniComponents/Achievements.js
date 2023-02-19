import image from './Badge.webp'
import image1 from './Badge1.webp'
import image2 from './Badge2.webp'

function Achievements(){
    return(
        <>
         <div className="flex justify-absolute w-[90vw] pt-10 ">
            <div className="shadow-sm shadow-white w-full mr-8 p-4 flex bg-gray-900 rounded-xl">
                    <img className="rounded-full w-44 mb-4 mx-auto" src={image} alt="" />
                    <img className="rounded-full w-44 mb-4 mx-auto" src={image1} alt="" />
                    <img className="rounded-full w-44 mb-4 mx-auto" src={image2} alt="" />
                    </div>
                    <div className="flex flex-col items-evenly w-[700px] justify-evenly shadow-sm shadow-white p-8 flex bg-gray-900 rounded-xl">
                <h1 className="text-left text-[30px] text-pink-500">Feedback from the mentor</h1>
                        <p className="w-[600px]" >Your skills in web development are truly exceptional, and I have been consistently impressed with the high-quality solutions you've delivered for our clients. Your attention to detail and ability to balance functionality and design have not gone unnoticed, and your commitment to staying up-to-date with the latest trends and best practices in the field is truly admirable. Keep up the great work!</p>
                    </div>
                </div>

        </>
    )
}

export default Achievements;