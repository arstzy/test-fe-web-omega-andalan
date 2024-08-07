import Image from "next/image";

const Hero = () => {
  return (
    <div className="text-start w-full h-full md:pt-20 pt-5 pb-64" id="#">
      <div className="flex flex-col md:flex-row w-full max-h-screen gap-x-10 gap-y-10 justify-between">
        <div className="flex flex-col justify-between pt-1 md:pt-56 gap-y-10">
          <div className="text-start md:text-center font-semibold text-lg md:text-3xl">
            The Best ERP Solution for Your Business Growth
          </div>
          <Image
            src={"/images/hero.png"}
            alt={"hero-image"}
            width={800}
            height={800}
          />
        </div>
        <div className="max-w-3xl lg:text-2xl text-lg font-semibold text-center">
          Manage your business effortlessly with our innovative ERP system. From
          inventory tracking to AI-powered analysis, we provide comprehensive
          solutions for every stage of your business development.
        </div>
      </div>
    </div>
  );
};

export default Hero;
