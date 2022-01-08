import { ReactNode } from "react";
import Header from "../components/header";

type Props = {
   children?: ReactNode;
};

const MainLayout = ({ children }: Props) => {
   console.log("main layout");

   return (
      <div>
         <Header />
         {children}
      </div>
   );
};

export default MainLayout;
