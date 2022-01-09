import ReusableServiceCard from "../components/common/ReusableServiceCard";
import TechnologyPartner from "../components/home-page/TechnologyPartner";
import { commonIcon } from "../constants/svgs";

function HomeService() {
   const cardData = [
      {
         title: "Dynamic scalability",
         content: "We don't stop until the best possible outcome",
      },
      {
         title: "Global-scale data storing and processing",
         content: "We don't stop until the best possible outcome",
      },
      {
         title: "Superior customer experience service",
         content: "We don't stop until the best possible outcome",
      },
      {
         title: "Automation architecture for resource optimization",
         content: "We don't stop until the best possible outcome",
      },
      {
         title: "Support superlative security",
         content: "We don't stop until the best possible outcome",
      },
      {
         title: "Cost-efficiency",
         content: "We don't stop until the best possible outcome",
      },
   ];
   return (
      <section className="relative p-4 py-10 md:p-20">
         <div className="flex flex-col items-center font-body">
            <button className="px-4 py-1 text-base text-white w-28 rounded-2xl bg-primary-500">Service</button>
            <p className="py-4 text-4xl font-semibold text-center">Why App Modernisation</p>
         </div>
         <div className="grid grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 font-body md:px-0">
            {cardData.map((item, key) => (
               <ReusableServiceCard key={key} title={item.title} content={item.content} />
            ))}
         </div>
         <div className="">
            <TechnologyPartner />
         </div>
         <div className="opacity-50 custom-shape-divider-bottom">
            <svg
               data-name="Layer 1"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 1200 120"
               preserveAspectRatio="none"
            >
               <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="shape-fill"
               ></path>
            </svg>
         </div>
      </section>
   );
}

export default HomeService;
