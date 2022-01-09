import { ReactNode } from "react";
import MainLayout from "./MainLayout";

type Props = {
   children?: ReactNode;
   variant?: "main" | "other";
};

export default function Layout({ variant = "main", children }: Props) {
   return <MainLayout>{children}</MainLayout>;
}
