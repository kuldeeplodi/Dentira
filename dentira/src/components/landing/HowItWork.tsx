import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, ZapIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import React from "react";

function HowItWork() {
  return (
    <section className="relative py-30 px-6 z-10 max-w-7xl mx-auto outline-hidden ">
      {/* header */}
      <div className="text-center mb-20">
        <div className=" inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from -primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
          <ZapIcon className="size-4 text-primary" />
          <span className="text-primary  font-medium text-sm">
            Simple Process
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="bg-gradient-to-b from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            Three steps to
          </span>
          <br />
          <span className="bg-gradient-to-b from-primary  to-primary/70 bg-clip-text text-transparent">
            better dental health
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed mt-4">
          Our streamlined process makes dental care accessible and convenient
          for everyone.
        </p>
      </div>

      {/* steps */}
      <div className="relative ">
        {/* connection line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2 hidden lg:block"></div>
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {/* step 1 */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary ">
              {/* step number */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                1
              </div>
              {/* icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
              <Image 
              src={"/ask.png"} 
              alt=""
              width={20}
              height={20}
              className="w-20 h-20 object-contain rounded-2xl"
               
              /></div>

              <h3 className="text-2xl font-bold mb-4 text-center ">
                Ask Questions
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                Chat with our AI assistant about any dental concerns. get
                instant answers about symptoms,treatments, and oral health tips
              </p>
              {/* feature pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  24/7 Available
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Instant Response
                </span>
              </div>
            </div>
          </div>
          {/* step 2 */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary ">
              {/* step number */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                2
              </div>
              {/* icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
              <Image 
              src={"/brain.png"} 
              alt=""
              width={20}
              height={20}
              className="w-20 h-20 object-contain rounded-2xl"
               
              /></div>

              <h3 className="text-2xl font-bold mb-4 text-center ">
                Get Expert Advice
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">
               receive personalized recommendations based on thousands of dental cases. Our AI providers professional-grade insights.
              </p>
              {/* feature pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  AI-Powered
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Personalized
                </span>
              </div>
            </div>
          </div>

          {/* steps 3 */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary ">
              {/* step number */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                3
              </div>
              {/* icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
              <Image 
              src={"/book.png"} 
              alt=""
              width={20}
              height={20}
              className="w-20 h-20 object-contain rounded-2xl"
               
              /></div>

              <h3 className="text-2xl font-bold mb-4 text-center ">
               Book & Get Care
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">
               Schedule with verified dentista and receive comprehensive follow-up care. Track your progress seamlessly.
              </p>
              {/* feature pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  verified Docters
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                Follow-up care
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* bottom CTA */}
        <div className="text-center mt-16">
          <SignUpButton mode={"modal"}>
            <Button size={"lg"}>
              <ArrowRightIcon className="mr-2 size-5"/>
              Get Started
            </Button>
          </SignUpButton>
        </div>
    </section>
  );
}

export default HowItWork;
