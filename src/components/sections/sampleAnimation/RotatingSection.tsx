"use client"

const RotatingSection = () => {
  return (
    <section className="w-full h-[1016px] flex justify-center relative overflow-hidden">
      <div className="w-full h-full flex flex-col justify-between items-center py-[120px]">
        <h2 className="text-[64px] font-medium">Your Path to Personalized Precision</h2>
        <div className="step-card-container w-[318px] h-[276px] relative">
          <div className="step-card step1-card absolute h-full w-full top-0 rounded-[16px] border border-[#883237]">
            <div className="h-full flex flex-col justify-between p-6 items-center">
              <div className="text-[24px] font-medium text-[#883237]">Map Your Story</div>
              <button className="button  bg-[#883237] text-white rounded-[98px] py-4 px-8">Step 1</button>
              <div className="text-[#883237] font-medium">Meet your physician, uncover your history, habits, and goals read more..</div>
            </div>
          </div>
          <div className="step-card step2-card  absolute h-full w-full top-0 rounded-[16px] border border-[#883237] opacity-0">
            <div className="h-full flex flex-col justify-between p-6 items-center">
              <div className="text-[24px] font-medium text-[#883237]">Decode Your Data</div>
              <button className="button  bg-[#883237] text-white rounded-[98px] py-4 px-8">Step 2</button>
              <div className="text-[#883237] font-medium">Meet your physician, uncover your history, habits, and goals read more..</div>
            </div>
          </div>
          <div className="step-card step3-card  absolute h-full w-full top-0 rounded-[16px] border border-[#883237] opacity-0">
            <div className="h-full flex flex-col justify-between p-6 items-center">
              <div className="text-[24px] font-medium text-[#883237]">Evolve with Precision</div>
              <button className="button  bg-[#883237] text-white rounded-[98px] py-4 px-8">Step 3</button>
              <div className="text-[#883237] font-medium">Meet your physician, uncover your history, habits, and goals read more..</div>
            </div>
          </div>
        </div>
        <div className="bg-[#883237] py-2 px-4 rounded-2xl text-white">
          Begin Your Plan
        </div>
      </div>

      <div className="rotating-container w-full h-[1480px] absolute top-1/3 left-0">
        <div className="w-full h-1/2 absolute top-0 z-[1]">
          <svg width="100%" height="100%" viewBox="0 0 1440 722" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1459 742C1459 644.822 1439.9 548.595 1402.79 458.814C1365.67 369.033 1311.27 287.456 1242.7 218.741C1174.12 150.026 1092.71 95.5176 1003.11 58.3291C913.513 21.1407 817.481 2 720.5 2C623.519 2 527.487 21.1407 437.888 58.3292C348.289 95.5176 266.878 150.026 198.302 218.741C129.726 287.456 75.328 369.033 38.2149 458.814C1.10185 548.595 -18 644.822 -18 742" stroke="#883237" stroke-width="4" />
          </svg>
        </div>


        <div className="w-full h-full flex justify-center">
          <div className="list-item1 z-[2] absolute translate-y-[-50%]">
            <div className=" py-2  px-4 rounded-[98px] border border-[#883237] bg-white ">
              How Pryme Works
            </div>
          </div>
          <div className="list-item2 z-[2] absolute -rotate-90 top-1/2 left-0 translate-x-[-50%] translate-y-[-50%]">
            <div className=" py-2  px-4 rounded-[98px] border border-[#883237] bg-white ">
              How Pryme Works2
            </div>
          </div>
          <div className="list-item3 z-[2] absolute rotate-180 bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%]">
            <div className=" py-2  px-4 rounded-[98px] border border-[#883237] bg-white ">
              How Pryme Works3
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default RotatingSection