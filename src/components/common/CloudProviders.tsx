import { azureLogo } from "../../constants/svgs";

function CloudProviders() {
   return (
      <div className="relative my-16 bg-white h-60 lg:h-64 rounded-2xl w-72 lg:w-96">
         <div className="flex items-center justify-center h-48">{azureLogo}</div>
         <div className="absolute bottom-0 w-full h-16 bg-primary-200 rounded-b-2xl"></div>
      </div>
   );
}

export default CloudProviders;
