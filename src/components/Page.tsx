import Head from "next/head";
import { forwardRef, ReactNode } from "react";

type Props = {
   children?: ReactNode;
   meta?: ReactNode;
   title: string;
};

const Page = forwardRef<HTMLDivElement, Props>(({ children, meta, title, ...other }, ref) => (
   <>
      <Head>
         <title>{title}</title>
         {meta}
      </Head>
      <div ref={ref} {...other}>
         {children}
      </div>
   </>
));

export default Page;
