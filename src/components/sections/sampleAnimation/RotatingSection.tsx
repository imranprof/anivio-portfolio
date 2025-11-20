"use client"

import { useGSAP } from "@gsap/react"
import { hasRotatingSections } from "@/app/animations/hasRotatingSection"

const RotatingSection = () => {

  useGSAP(() => {
    hasRotatingSections();
  })

  return (
    <section id="rotateParentContainer" className="parent-rotate-container">

      <div className="rotate-inside-con">

        <div className="animate-half-cirle">
          <svg width="100%" height="100%" viewBox="0 0 1440 722" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="rotateSvgPath" d="M1459 742C1459 644.822 1439.9 548.595 1402.79 458.814C1365.67 369.033 1311.27 287.456 1242.7 218.741C1174.12 150.026 1092.71 95.5176 1003.11 58.3291C913.513 21.1407 817.481 2 720.5 2C623.519 2 527.487 21.1407 437.888 58.3292C348.289 95.5176 266.878 150.026 198.302 218.741C129.726 287.456 75.328 369.033 38.2149 458.814C1.10185 548.595 -18 644.822 -18 742" stroke="#883237" strokeWidth="4" />
          </svg>
        </div>
        <div className="under-half-cicle">
          <svg width="100%" height="100%" viewBox="0 0 1440 722" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="rotateSvgPath" d="M1459 742C1459 644.822 1439.9 548.595 1402.79 458.814C1365.67 369.033 1311.27 287.456 1242.7 218.741C1174.12 150.026 1092.71 95.5176 1003.11 58.3291C913.513 21.1407 817.481 2 720.5 2C623.519 2 527.487 21.1407 437.888 58.3292C348.289 95.5176 266.878 150.026 198.302 218.741C129.726 287.456 75.328 369.033 38.2149 458.814C1.10185 548.595 -18 644.822 -18 742" stroke="#883237" strokeWidth="4" />
          </svg>
        </div>


        <div id="rotatingContainer" className="">
          <div className="rotate-card rotate-card-1 z-[2]">
            <div className="rotate-title-custom">
              How Pryme Works1
            </div>
            <div className="step-card-custom step2-card-custom">
              <div className="step-card-inner">
                <div className="step-card-title">Decode Your Data</div>
                <button className="step-card-button">Step 1</button>
                <div className="step-card-text">Meet your physician, uncover your history, habits, and goals read more..</div>
              </div>
            </div>
          </div>
          <div className="rotate-card rotate-card-2">
            <div className="rotate-title-custom">
              How Pryme Works2
            </div>
            <div className="step-card-custom step2-card-custom">
              <div className="step-card-inner">
                <div className="step-card-title">Decode Your Data</div>
                <button className="step-card-button">Step 2</button>
                <div className="step-card-text">Meet your physician, uncover your history, habits, and goals read more..</div>
              </div>
            </div>

          </div>
          <div className="rotate-card rotate-card-3">
            <div className="rotate-title-custom">
              How Pryme Works3
            </div>
            <div className="step-card-custom step2-card-custom">
              <div className="step-card-inner">
                <div className="step-card-title">Decode Your Data</div>
                <button className="step-card-button">Step 3</button>
                <div className="step-card-text">Meet your physician, uncover your history, habits, and goals read more..</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default RotatingSection