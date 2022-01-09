import { azureLogo } from "../../constants/svgs";

function CloudProviders() {
   return (
      <div className="relative z-20 my-16 bg-white h-60 lg:h-64 rounded-2xl w-72 lg:w-96">
         <div className="flex items-center justify-center h-48">{azureLogo}</div>
         <div className="absolute bottom-0 flex items-center justify-center w-full h-16 bg-primary-200 rounded-b-2xl">
            <p className="text-2xl text-white font-body">Microsoft Azure</p>
         </div>
      </div>
   );
}

export default CloudProviders;
