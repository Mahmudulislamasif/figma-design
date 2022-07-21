import React from 'react';
import image1 from '../Assests/Group.png'
import image2 from '../Assests/layer1.png'
import image3 from '../Assests/image 8.png'
import image4 from '../Assests/credit-card (1) 1.png'
import image5 from '../Assests/crm 3.png'
import image6 from '../Assests/Layer_x0020_1.png'
const Design = () => {
    return (
        <div className="rounded-full mt-7 ">
       <div className="border-4 rounded-full border-[#D9F3F4] w-3/4 mx-auto">
          <img className="mx-auto" src={image3} alt="" />
          <img className="top-[-100px] left-[20px] relative" src={image1} alt="" />
          <img className="top-[-50px] left-[-30px] relative" src={image2} alt="" />
          <img className="" src={image4} alt="" />
          <img className="top-[-280px] mx-auto relative" src={image5} alt="" />
       </div>
        </div>
    );
};

export default Design;