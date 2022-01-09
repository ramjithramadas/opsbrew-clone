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
         <div className="z-0">
            <TechnologyPartner />
         </div>
         <div className="z-10 hidden opacity-20 custom-shape-divider-bottom md:block">
            <svg width="1000%" height="325" viewBox="0 0 1440 325" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M0 43.0247C70 15 263 -21 715 18.0001C1167 57.0002 1184.28 43.4823 1440 0.5V325H0V43.0247Z"
                  fill="#000"
               />
            </svg>
         </div>
      </section>
   );
}

export default HomeService;
