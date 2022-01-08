import { ReactNode } from "react";
import MainLayout from "./MainLayout";

type Props = {
   children?: ReactNode;
   variant?: "main" | "other";
};

export default function Layout({ variant = "main", children }: Props) {
   console.log("layout");

   return <MainLayout>{children}</MainLayout>;
}
