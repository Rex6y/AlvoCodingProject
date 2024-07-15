import { Inter } from "next/font/google";
import { useContext } from "react";
import { BreakpointsContext } from "../context/breakpointsContext";
import LayoutHome from "@layouts/LayoutHome";
import Intro from "@views/HomeView/Intro";
import Why from "@views/HomeView/Why";
import Mission from "@views/HomeView/Mission";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isMaxWidth } = useContext(BreakpointsContext)

  return (
    <LayoutHome>
      <Intro />
      <Why />
      <Mission />
    </LayoutHome>
  );
}
