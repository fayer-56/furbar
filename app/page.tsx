"use client";

import Grainient from "@/components/Grainient";
import { Bagel_Fat_One, Nunito } from "next/font/google";
import Link from "next/link";
const display = Bagel_Fat_One({ subsets: ["latin"], weight: "400" });
const body = Nunito({ subsets: ["latin"], weight: "400" });
export default function Home() {
  return (
    <div
      className={`${display.className} min-h-screen bg-fb-bg text-fb-on-bg transition-colors`}
    >
      <main className="relative h-screen min-h-screen flex flex-col justify-center items-center space-y-4 text-center px-8 bg-fb-hero text-fb-on-hero">
        <div className="top-0 bottom-0 left-0 right-0 w-full h-full z-0 absolute">
          <Grainient
            colors={["#3b2417", "#744c33", "#9c6745", "#e6d3c3"]}
            angle={55}
            flow={0.8}
            silk={0.35}
            grainAmount={0.08}
            type="linear"
            bands={1}
            softness={1}
            scale={1}
            speed={1}
            grainSize={0.5}
            grainAnimated={false}
            contrast={1}
            saturation={1}
            variation={0}
            interactive={false}
            stir={1}
            clickSwirl
            intro
            lightMode={false}
          />
        </div>
        <div className="top-0 bottom-0 left-0 right-0 w-full h-full z-1 absolute backdrop-blur"></div>
        <h1 className="text-4xl z-50">
          Le Furbar du Pays de Lorient arrivent bientôt...
        </h1>
        <p className={`${body.className}  z-50`}>
          Pour plus d&apos;information, merci de contacter :{" "}
          <Link className="underline" href="mailto:furbar.lorient@proton.me">
            furbar.lorient@proton.me
          </Link>
        </p>
      </main>
    </div>
  );
}
