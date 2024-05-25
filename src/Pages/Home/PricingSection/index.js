import React, {useState} from "react";
import dollar from "../../../Assets/dollar.png"
import {Switch} from "@mui/material";
import PricingPlan from "./PricingPlan";

function PricingSection(){
  const keyPointsStarter = [
    "Convert 3 PDFs/month",
    "Basic customization",
    "Standard viewer",
    "Limited support"
  ];

  const keyPointsPro = [
    "Convert 20 PDFs/month",
    "Advanced customization",
    "Ad-free viewer",
    "Priority support",
    "Analytics "
  ];

  const keyPointsBusiness = [
    "Unlimited conversions",
    "Full customization",
    "branded viewer",
    "Priority support",
    "Detailed analytics",
    "Team collaboration"
  ];
  const [isYearly, setIsYearly] = useState(false);
  const onSwitchToggle = () => {
    setIsYearly(prevState => !prevState);
  };
  return (
    <>
      <div className={`my-8`}>
        <div className={`text-6xl text-white`}>
          Choose Your Pricing Plan
          <p className={`text-lg text-orange-500 m-5`}>All plans FREE for 30days</p>
          <div className={'text-lg'}>
            Monthly <Switch color={`warning`} checked={isYearly} onChange={onSwitchToggle}/> Yearly
          </div>
        </div>
        <div className={`flex mt-8 w-full justify-center`}>
          <PricingPlan planType="Basic" isYearly={isYearly} priceM="0" priceY="0" planName="Starter Plan" keyPoints={keyPointsStarter}/>
          <PricingPlan planType="Standard" isYearly={isYearly} priceM="19" priceY="120" planName="Pro Plan" keyPoints={keyPointsPro}/>
          <PricingPlan planType="Premium" isYearly={isYearly} priceM="49" priceY="450" planName="Business Plan" keyPoints={keyPointsBusiness}/>
        </div>
      </div>
    </>
  );
}

export default PricingSection;