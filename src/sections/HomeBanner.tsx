import { homeBannerImg } from "../constants/svgs";

const HomeBanner = () => {
   return (
      <section>
         <div className="grid grid-cols-1 gap-4 bg-primary-500 md:grid-cols-2">
            <div className="py-10 pl-10">
               <button className="flex items-center h-12 p-2 bg-white rounded-md w-38">
                  <img src="/logo/opsbrew.png" alt="opsbrew logo" className="w-32 h-9" />
               </button>
               <div className="my-3 text-lg font-semibold text-white font-body sm:text-xl md:text-3xl">
                  <p>Application Modernization:</p>
                  <p>Transforming Business</p>
                  <p>Application Modernization:</p>
               </div>
               <div>
                  <p className="text-xs text-white font-body sm:text-sm">
                     Businesses today are constantly dealing with unprecedented disruption. This has prompted many
                     of them to embrace digital transformation as a way of life. Infrastructure Modernization is
                     often deemed as a good start. But, this decision isn’t easy since to unlock the full potential
                     of the cloud, businesses need to alter how they manage their application portfolio
                  </p>
               </div>
            </div>

            <div className="p-10">
               <div className="flex h-full">{homeBannerImg}</div>
            </div>
         </div>
      </section>
   );
};

export default HomeBanner;
