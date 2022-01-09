import CloudProviders from "./CloudProviders";
import EllipseDots from "../common/EllipseDots";

const TechnologyPartner = () => {
   return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 bg-primary-500 rounded-2xl">
         <div className="relative flex flex-col items-start justify-center px-8 pt-8 md:p-16">
            <div className="my-4">
               <button className="p-1 text-base font-semibold bg-white text-primary-500 w-28 rounded-2xl w-34 hover:animate-bounce">
                  Our Partner
               </button>
            </div>
            <EllipseDots />
            <div className="text-lg font-semibold text-white md:my-3 font-body sm:text-xl md:text-3xl">
               <p>Technology Partner</p>
            </div>
            <div className="my-4">
               <p className="w-64 text-xs text-white font-body sm:text-sm md:w-96">
                  Partnership is a form of business organization wherein two or more persons join together in order
                  to carry out business.
               </p>
            </div>
         </div>

         <div className="flex justify-center">
            <CloudProviders />
         </div>
      </div>
   );
};

export default TechnologyPartner;
