"use client"

const RotatingSection = () => {
  return (
    <section className="w-full h-screen flex justify-center relative">
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

      <div className="rotating-container">

      </div>
    </section>
  )
}

export default RotatingSection