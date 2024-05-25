import React from "react";
import dollar from "../../../../Assets/dollar.png"
import {DoneOutlined, DoneOutlineOutlined} from "@mui/icons-material";

function PricingPlan({planType,planName,priceM,priceY,keyPoints,isYearly}){
  return (
    <>
      <div className={`preserve-3d flex justify-center relative bg-slate-800 ${isYearly ? 'rotate-y-180' : ''}  text-white items-center border-8 border-orange-500 rounded-[10rem] duration-500 min-h-[30rem] w-1/4 m-5 p-6`}>
        <div className={`absolute h-full backface-hidden`}>
            <div className={`h-20 m-5`}>
              <div className={`text-2xl font-bold`}>
                {planType}
                <p className={`text-sm`}>{planName}</p>
              </div>
              <div className={'flex'}>
                <div className={`flex-1 text-4xl p-6`}>
                  <span><span className={`text-lg top-0 left-0`}>$</span>{priceM}<span
                    className={'text-sm'}>/monthly</span></span>
                </div>
              </div>
            </div>
            <div className={`flex-row h-2/4 my-4 text-left content-center`}>
              {keyPoints.map((feature, index) => (
                <div key={index} className="flex-1">
                  <span className="mx-4"><DoneOutlineOutlined/></span>{feature}
                </div>
              ))}
            </div>
            <div className={'flex-row items-center content-center'}>
              <button className={`bg-orange-500 p-2 rounded border-2 border-white m-5`}>Choose Plan</button>
            </div>
          </div>
        <div className={`absolute h-full rotate-y-180 rounded-[10rem] bg-slate-800 backface-hidden`}>
          <div className={`h-20 m-5`}>
            <div className={`text-2xl font-bold`}>
              {planType}
              <p className={`text-sm`}>{planName}</p>
            </div>
            <div className={'flex'}>
              <div className={`flex-1 text-4xl p-6`}>
                <span><span className={`text-lg top-0 left-0`}>$</span>{priceY}<span
                  className={'text-sm'}>/Yearly</span></span>
              </div>
            </div>
          </div>
          <div className={`flex-row h-2/4 my-4 text-left content-center`}>
            {keyPoints.map((feature, index) => (
              <div key={index} className="flex-1">
                <span className="mx-4"><DoneOutlineOutlined/></span>{feature}
              </div>
            ))}
          </div>
          <div className={'flex-row items-center content-center'}>
              <button className={`bg-orange-500 p-2 rounded border-2 border-white m-5`}>Choose Plan</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default PricingPlan;