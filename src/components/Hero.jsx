const Hero = () => {
    return (
      <div>
        <div className="flex justify-center items-center bg-black h-screen">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            <div className="mt-5 max-w-2xl text-center mx-auto">
              <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-5xl dark:text-gray-200 uppercase">
                hi! <br/>
                <span className="bg-clip-text bg-gradient-to-t from-darkcyan to-secondary text-transparent text-8xl font-extrabold font-bebas">
                  I am Hakim
                </span>
              </h1>
            </div>
            <div className="mt-5 max-w-3xl text-center mx-auto">
              <p className="text-lg text-highlight">
                Web Developer & Tech Enthusiast
              </p>
              <p className="text-lg text-highlight">
                Enthusiastic about creating seamless digital experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  