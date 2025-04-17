export default function About() {
    return (
        <section className="bg-white dark:bg-gray-900 my-[170px] mx-[100px] p-10 rounded-lg shadow-lg"> 
            <div className="container mx-auto flex flex-col items-center justify-center px-4 py-8">
                <div className="">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">About Me</h1>
                </div>

                <div className="md:w-2/3 lg:w-1/2 mt-6 mb-8">
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
        </section>

    )
}