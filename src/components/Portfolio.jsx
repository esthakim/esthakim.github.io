const Portfolio = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap h-96 px-7 py-4 mx-auto justify-center items-center bg-gradient-to-b from-highlight to-bgcolor">
        <div className="card mx-auto justify-center items-center">
          <div className="relative bg-black w-[300px] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center">
            <div className="bg-waveHaikei bg-cover opacity-80 rounded-3xl transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16">
              <p className="font-bebas text-[16px] text-primary bg-transp rounded-2xl p-5">
                Sorry if you did not find anything here.
              </p>
            </div>
            <button className="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900">
              HKM
            </button>
            <div className="tp transition-all duration-1000 group-hover:duration-100 bg-secondary absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
            <div className="lft transition-all duration-700 absolute w-full h-full bg-secondary [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
            <div className="rgt transition-all duration-700 absolute w-full h-full bg-secondary [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
            <div className="btm transition-all duration-700 absolute w-full h-full bg-secondary [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
          </div>
        </div>
        <div className="card mx-auto justify-center items-center">
          <div className="relative bg-black w-[300px] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center">
            <div className="bg-waveHaikei bg-cover opacity-80 rounded-3xl transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16">
              <p className="font-bebas text-[16px] text-primary bg-transp rounded-2xl p-5">
                Sorry if you did not find anything here.
              </p>
            </div>
            <button className="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900">
              HKM
            </button>
            <div className="tp transition-all duration-1000 group-hover:duration-100 bg-secondary absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
            <div className="lft transition-all duration-700 absolute w-full h-full bg-secondary [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
            <div className="rgt transition-all duration-700 absolute w-full h-full bg-secondary [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
            <div className="btm transition-all duration-700 absolute w-full h-full bg-secondary [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
