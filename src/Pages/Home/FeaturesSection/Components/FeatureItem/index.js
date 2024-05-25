import React from "react";
import { Tilt } from 'react-tilt';

const defaultOptions = {
  zIndex:         150,
  reverse:        false,  // reverse the tilt direction
  max:            90,     // max tilt rotation (degrees)
  perspective:    500,   // Transform perspective, the lower the more extreme the tilt gets.
  scale:          1.0,    // 2 = 200%, 1.5 = 150%, etc..
  speed:          500,   // Speed of the enter/exit transition
  transition:     true,   // Set a transition on enter/exit.
  axis:           null,   // What axis should be disabled. Can be X or Y.
  reset:          true,    // If the tilt effect has to be reset on exit.
  easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
function FeatureItem({image,name,desc}){

  return (
    <>
      <Tilt options={defaultOptions}>
        <div className={`flex-1 p-8 justify-center content-center bg-slate-800 rounded-tr-[4rem] rounded-bl-[4rem] hover:m-6 hover:rounded-tl-[4rem] hover:rounded-br-[4rem] hover:rounded-tr-[1rem] hover:rounded-bl-[1rem] m-2 hover:border-2 hover:border-orange-500 transform`}>
          <img className={`m-auto`} src={image} alt={name} />
          <h3 className={`text-orange-500 text-lg text-bold`}>{name}</h3>
          <p className={`text-slate-300`}>{desc}</p>
        </div>
      </Tilt>
    </>
  );
}

export default FeatureItem;