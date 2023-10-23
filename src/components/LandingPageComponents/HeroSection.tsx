import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className="bg-teal-dark text-gray-light h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-4">Divisa Dex</h1>
            <h2 className="text-4xl mb-6">Your view of global value</h2>
            <div className="flex space-x-4">
                <button className="bg-teal-light py-2 px-6 rounded-lg text-teal-dark font-semibold">Join Now</button>
            </div>
        </div>
    )
}

export default HeroSection;