import React from "react"
import zed from '../../assets/zed-logo.png'

export function Certification() {
  return (
    <div className="bg-white py-16 w-full"> {/* Changed to white background */}
      <div className="w-full px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full">
          {/* Image Section */}
          <div className="w-full">
            <img
              src={zed}
              alt="ZED MSME Certification"
              className="w-full h-[20em] object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6 w-full">
            <h2 className="text-3xl font-bold text-black">Empowering MSMEs with ZED Certification – A Key Initiative by ILCS</h2> {/* Changed text color to black */}
            <p className="text-black">
              In today's competitive business landscape, Micro, Small, and Medium Enterprises (MSMEs) play a pivotal role in driving economic growth and job creation. However, to thrive in this environment, MSMEs need to adopt world-class practices in quality and sustainability. Recognizing this, the Indian Labour Cooperative Society (ILCS) has taken an important step by partnering with the Ministry of Micro, Small, and Medium Enterprises (MSME) and the Quality Council of India (QCI) to promote the ZED (Zero Defect, Zero Effect) Certification Scheme.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
