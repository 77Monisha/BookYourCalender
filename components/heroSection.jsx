import poster from "@/public/assets/poster.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-x-80 mb-24">
      <div className="lg:w-1/2">
        <h1 className="text-7xl gradient-title">Book. Organize. Simplify</h1>
        <p className="text-xl mb-10 text-gray-500">
          Tired of the hassle of scheduling meetings? BookYourCalendar makes it
          easy to set, manage, and track appointments in just a few clicks.
        </p>
      </div>
      <div className="lg:w-1/2">
        <div className="relative w-full max-w-md aspect-square">
          <Image src={poster} alt="poster" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
