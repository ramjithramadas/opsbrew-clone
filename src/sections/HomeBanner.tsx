import EllipseDots from "../components/common/EllipseDots";
import { homeBannerImg } from "../constants/svgs";

const HomeBanner = () => {
   return (
      <section>
         <div className="grid grid-cols-1 gap-4 bg-primary-500 md:grid-cols-2">
            <div className="relative px-10 pt-10 md:p-20">
               <button className="flex items-center h-12 p-2 bg-white rounded-md w-38">
                  <img src="/logo/opsbrew.png" alt="opsbrew logo" className="w-32 h-9" />
               </button>
               <div className="my-4 text-xl font-semibold text-white font-body md:text-3xl">
                  <p className="mt-2 md:mt-3">Application Modernization:</p>
                  <p className="mt-2 md:mt-3">Transforming Business</p>
                  <p className="mt-2 md:mt-3">Through Technology</p>
               </div>
               <div className="absolute left-28 top-16">
                  <EllipseDots />
               </div>
               <div className="my-8">
                  <p className="max-w-lg text-xs text-white sm:leading-7 font-body sm:text-sm">
                     Businesses today are constantly dealing with unprecedented disruption. This has prompted many
                     of them to embrace digital transformation as a way of life. Infrastructure Modernization is
                     often deemed as a good start. But, this decision isn’t easy since to unlock the full potential
                     of the cloud, businesses need to alter how they manage their application portfolio
                  </p>
               </div>
            </div>

            <div className="px-10 py-10 md:py-20">
               <div className="flex h-full">{homeBannerImg}</div>
            </div>
         </div>
      </section>
   );
};

export default HomeBanner;
