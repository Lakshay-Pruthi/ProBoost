import Quote from './MiniComponents/Quote'
import EmailInput from './MiniComponents/EmailInput'
import PasswordInput from './MiniComponents/PasswordInput'
import GoogleButton from './MiniComponents/GoogleButton'
import FacebookButton from './MiniComponents/FacebookButton'
import ForgotPassword from './MiniComponents/ForgotPassword'
import SignInButton from './MiniComponents/SignInButton'


function SignUp() {
    return (
        <>
            <div>
                <div
                    className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden">

                </div>
                <div className="relative   min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl">


                    <Quote />

                    <div className="flex justify-center self-center  z-10">
                        <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
                            <div className="mb-7">
                                <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                                <p className="text-gray-400"> Don'thave an account? <span className="text-sm text-purple-700 hover:text-purple-700">Sign Up</span>
                                </p>
                            </div>
                            <div className="space-y-6">
                                <EmailInput />
                                <PasswordInput />
                                <ForgotPassword />
                                <SignInButton />

                                <div className="flex items-center justify-center space-x-2 my-5">
                                    <span className="h-px w-16 bg-gray-100"></span>
                                    <span className="text-gray-300 font-normal">or</span>
                                    <span className="h-px w-16 bg-gray-100"></span>
                                </div>

                                <div className="flex justify-center gap-5 w-full ">
                                    <GoogleButton />
                                    <FacebookButton />
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
                <footer className="mt-[-1000px] z-100">
                    <img src="logo_transparent.png" className="w-48" alt="" />
                </footer>
            </div>
            <svg className="absolute bottom-0 left-0 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fillOpacity="1"
                    d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
                </path>
            </svg>
            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js"></script>

        </>
    )
}

export default SignUp;