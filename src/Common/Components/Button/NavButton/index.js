import React from 'react';

function NavButton({btnText}) {
  return (<>
      <button className={`text-white border-2 border-b-white rounded p-2 hover:bg-amber-600 hover:font-bold`}> {btnText}</button>
    </>);
}

export default NavButton;