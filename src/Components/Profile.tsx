
export default function Profile() {

    return (
        <div className="w-full lg:w-[520px] lg:fixed lg:h-screen">
            <Photos/>
            <Bio/>
            <Socials/>
        </div>
    )
}

function Photos() {

    return (
        <div className="">
            <img className="h-48 w-full rounded-xl relative" src="https://github.com/ArthKulkarni93/Portfolio/blob/master/src/assets/Background.jpg?raw=true" alt="" />
            <img className="h-24 rounded-full absolute top-40 left-14 z-1 border border-white border-[4px] lg:left-30" src="src/assets/PXL_20250126_072630780.jpg" alt="" />
        </div>
    ) 
}

function Bio() {

    return (
        <div className=" mt-12 lg:mt-16">
            <div className="text-black font-oswald **font-bold**  text-4xl pb-4">
                ARTH KULKARNI.
            </div>

            <div>
                <div className="text-lg font-light pb-4 text-justify">
                    I'm Backend developer based in Maharashtra, India.
                </div>
                <div className="text-lg font-light text-justify">
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
                    <img className="border rounded-full border-zinc-600 border-1 flex justify-center h-8 w-8 p-1" src="https://raw.githubusercontent.com/ArthKulkarni93/Portfolio/61bee69ff951acc906d364778f34bdd4dc946075/src/assets/x2.svg" alt="" />
                </a>

                <a href="https://www.linkedin.com/in/arth-kulkarni-b232bb1b3/">
                        <img className="border rounded-full border-zinc-600 border-1 flex justify-center h-8 w-8 p-1" src="https://raw.githubusercontent.com/ArthKulkarni93/Portfolio/refs/heads/master/src/assets/linkedin.webp" alt="" />
                </a>

                <a href="https://github.com/ArthKulkarni93">
                        <img className="border rounded-full border-zinc-600 border-1 flex justify-center h-8 w-8 p-1" src="https://github.com/ArthKulkarni93/Portfolio/blob/master/src/assets/github%20logo.png?raw=true" alt="" />
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