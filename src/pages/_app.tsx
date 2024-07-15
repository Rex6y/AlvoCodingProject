import type { AppProps } from "next/app";
import { GoogleAnalytics } from "@next/third-parties/google";
import { PostHogProvider } from "posthog-js/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import posthog from "posthog-js";
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { AnimatePresence } from "framer-motion";
// Store
import { StrictMode } from "react";
import { store } from "@redux/store";
import { Provider } from "react-redux";
// Provider
// import { DimensionsProvider } from "@components/Transitions/DimensionsContext";
// import Curve from "@components/Transitions/Curve";
// import Cursor, { CursorContextProvider } from "@components/Cursor";
// Globals CSS
// import "../styles/globals.css";
// import "../styles/loader.css";
// import "../styles/pluginsbase.css";
import BreakpointsContextProvider from "../context/breakpointsContext";
// import "../styles/main.css";

// if (typeof window !== "undefined") {
//   // checks that we are client-side
//   posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
//     api_host:
//       process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",

//     loaded: (posthog) => {
//       if (process.env.NODE_ENV === "development") posthog.debug(); // debug mode in development
//     },
//   });
// }
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <GoogleAnalytics gaId={process.env.GTAG_ID as string} />
    <DefaultSeo {...SEO} />
    <PostHogProvider client={posthog}>
      <BreakpointsContextProvider>
        {/* ============== */}
        <AnimatePresence mode='wait'>
          {/* <DimensionsProvider> */}
          {/* <Curve backgroundColor="white">
            ==============
            <CursorContextProvider> */}
          <Provider store={store}>
            <Component {...pageProps} />
            {/* <Cursor /> */}
          </Provider>

          {/* </CursorContextProvider>
          </Curve> */}
          {/* </DimensionsProvider> */}
        </AnimatePresence>
      </BreakpointsContextProvider>

    </PostHogProvider>
    <Analytics />
    <SpeedInsights />
  </>
}
