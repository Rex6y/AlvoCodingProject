import { Inter } from "next/font/google";
import { useContext } from "react";
import { BreakpointsContext } from "../context/breakpointsContext";
import LayoutHome from "@layouts/LayoutHome";
import Intro from "@views/HomeView/Intro";
import Why from "@views/HomeView/Why";
import Mission from "@views/HomeView/Mission";
import { Divider } from "antd";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isMaxWidth } = useContext(BreakpointsContext)

  return (
    <LayoutHome>
      <Intro />
      <Divider style={{ backgroundColor: 'black', height: '2rem', margin: 0 }} />
      <Why />
      <Divider style={{ background: 'linear-gradient(0deg,#00797a 10%, #4cc990 90%)', height: '2rem', margin: 0 }} />
      <Mission />
    </LayoutHome>
  );
}
