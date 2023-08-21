
import About from "@/components/layout/About";
import Balancer from "react-wrap-balancer";


export default async function Home() {

  return (
    <>
      <div className="z-10 w-full py-8 px-2 xl:px-0">
      <div className="mx-auto max-w-2xl lg:text-center">
        <a
          href="https://twitter.com/steventey/status/1613928948915920896"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <p className="text-base font-semibold text-[#1d9bf0]">
            About our company
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>A Propos de JLS WORLD</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-600 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            
           Lorem ipsum dolor sit amet consectetur adipiscing elit 
           interdum ullamcorper sed pharetra sene.Lorem ipsum dolor sit amet consectetur adipiscing elit 
           interdum ullamcorper sed pharetra sene.
          </Balancer>
         
        </p>
        </div>
      </div>
    
    </>
  );
}
