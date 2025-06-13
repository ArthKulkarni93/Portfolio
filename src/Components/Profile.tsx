
export default function Profile() {

    return (
        <div className="w-1/2 flex flex-col ">
            <Photos/>
            <Bio/>
            <Socials/>
        </div>
    )
}

function Photos() {

    return (
        <div className="">
            <img className="h-48 w-full rounded-xl relative" src="src/assets/Background.jpg" alt="" />
            <img className="h-24 rounded-full absolute top-40 left-32 z-1 border border-white border-[4px]" src="https://avatars.githubusercontent.com/u/158561171?v=4" alt="" />
        </div>
    ) 
}

function Bio() {

    return (
        <div className=" mt-20">
            <div className="text-black font-oswald **font-bold**  text-4xl pb-4">
                ARTH KULKARNI.
            </div>

            <div>
                <div className="text-lg font-light pb-4">
                    I'm Backend developer based in Maharashtra, India.
                </div>
                <div className="text-lg font-light">
                    20, a developer who prefers working with systems, logic, and clean backends.
                    I believe in minimalism, both in <span className="text-indigo-500">design</span> and in <span className="text-rose-600">thinking</span>, and I’m continuously learning to stay relevant with evolving technologies.
                    I focus on what works, what lasts, and what makes sense.
                </div>
            </div>
        </div>
    )
}

function Socials() {

    return (
        <div className="mt-10 grid grid-col">
            <div  className="w-1/3 flex flex-cols-3 justify-between ">
                <a href="https://x.com/KulkarniArth">
                    <img className="border rounded-full border-zinc-600 border-1 flex justify-center h-8 w-8 p-1" src="src/assets/x2.svg" alt="" />
                </a>

                <a href="https://www.linkedin.com/in/arth-kulkarni-b232bb1b3/">
                        <img className="border rounded-full border-zinc-600 border-1 flex justify-center h-8 w-8 p-1" src="src/assets/linkedin.webp" alt="" />
                </a>

                <a href="https://github.com/ArthKulkarni93">
                        <img className="border rounded-full border-zinc-600 border-1 flex justify-center h-8 w-8 p-1" src="src/assets/github logo.png" alt="" />
                </a>
            </div>

            <div className="w-1/3 mt-8 flex flex-cols-2 gap-10">
                <button className="w-20 px-14 py-2 text-white rounded-full border border-1 bg-black flex items-center justify-center">
                    Resume
                </button>

                <button className="px-6 py-2 text-black rounded-full border border-1 bg-white flex items-center justify-center whitespace-nowrap">
                    Contact me
                </button>
            </div>

        </div>
    )
}