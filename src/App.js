import logo from './logo.svg';
import './App.css';
import image from '../src/Assests/Group.png'
import image1 from '../src/Assests/layer1.png'
import image2 from '../src/Assests/credit-card (1) 1.png'
import image3 from '../src/Assests/image 8.png'
import image4 from '../src/Assests/Layer_x0020_1.png'
import image5 from '../src/Assests/crm 3.png'
import image6 from '../src/Assests/group (1) 1 (1).png'
import image7 from '../src/Assests/community-manager 1.png'
function App() {
  return (
    <div className="App">
    <div className="w-100 h-96 relative bg-[#D9F3F4] border-dashed border-2 border-[#008C96] rounded-full m-8">
       <div className="w-24 h-20 bg-white shadow-lg absolute right-0 rounded-lg shadow-blue-500/50">
       <img src={image4} className="mx-auto" alt="" />
       <h1 className="text-[#004750] font-bold mt-7">Resident and Tenant Portals</h1>
       </div>
       <div className="w-24 h-20 bg-white absolute bottom-0 right-0 shadow-lg rounded-lg shadow-blue-500/50">
       <img src={image7} className="mx-auto" alt="" />
        <h1 className="text-[#004750] mt-7">Community</h1>
       </div>
       <div className="w-24 h-20 bg-white absolute shadow-lg rounded-lg shadow-blue-500/50">
         <img src={image} className="mx-auto" alt="" />
        <h1 className="text-[#004750] mt-6">Reports</h1>
       </div>
       <div className="w-24 h-20  bg-white shadow-lg rounded-lg  absolute left-1/3 -top-8 shadow-blue-500/50">
        <img src={image5} className="mx-auto" alt="" />
        <h1 className="text-[#004750] mt-4 tooltip tooltip-secondary tooltip-bottom"  
        data-tip="Vitae tortor consequat lacinia nunc sodales potenti cras loi suspendisse tempor liberomu risus nibh eget platea justo">Lead to Lease CRM</h1>
       </div>

       <div className="w-24 h-20 bg-white shadow-lg rounded-lg absolute top-36 -left-8 shadow-blue-500/50">
       <img src={image1} className="mx-auto" alt="" />
        <h1 className="text-[#004750] mt-6">Maintenance</h1>
       </div>
       <div className="w-24 h-20 bg-white shadow-lg rounded-lg absolute -bottom-8 left-1/3 shadow-blue-500/50">
       <img src={image6} className="mx-auto" alt="" />
        <h1 className="text-[#004750] mt-4">Communication</h1>
       </div>
       <div className="w-24 h-20 bg-white shadow-lg rounded-lg absolute bottom-0 left-0 shadow-blue-500/50">
       <img src={image2} className="mx-auto" alt="" />
        <h1 className="text-[#004750]">Payments</h1>
       </div>
       <div className=" rounded-lg absolute top-36 left-1/3 border-2 mt-8 border-[#008C96]">
           <img src={image3} className="mx-auto w-44" alt="" />
       </div>
       
    </div>
    </div>
  );
}

export default App;
