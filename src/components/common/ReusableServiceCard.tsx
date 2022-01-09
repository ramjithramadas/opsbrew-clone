import { commonIcon } from "../../constants/svgs";

type Props = {
   title?: string;
   content?: string;
};

function ReusableServiceCard({ title, content }: Props) {
   return (
      <div className="flex w-68">
         <div className="w-12">{commonIcon}</div>
         <div className="py-4 pl-4">
            <p className="text-lg font-bold w-60">{title}</p>
            <p className="w-48 py-4 text-base">{content}</p>
         </div>
      </div>
   );
}

export default ReusableServiceCard;
