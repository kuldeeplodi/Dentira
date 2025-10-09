import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { CalendarIcon, MicIcon, StarIcon } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-70" />

      {/* Optional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* left content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from -primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-primary rounded full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary">
                    AI-Powered Dental Assistant
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-b from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    Your dental
                  </span>
                  <br />
                  <span className="bg-gradient-to-b from-primary  to-primary/70 bg-clip-text text-transparent">
                    questions
                  </span>
                  <br />
                  <span className="bg-gradient-to-b from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    answered instantly
                  </span>
                </h1>

                {/* subtitle */}
                <p className="text-lg text-muted-foreground max-w-xl font-medium leading-relaxed">
                  Dentira is an AI-powered dental assistant that provides
                  instant answers to your dental questions,book smart
                  appointments, and offers personalized oral care tips.
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <SignUpButton mode={"modal"}>
                  <Button size={"lg"}>
                    <MicIcon className="mr-2 size-5" />
                    Try voice agent
                  </Button>
                </SignUpButton>
                <SignUpButton mode={"modal"}>
                  <Button size={"lg"} variant={"outline"}>
                    <CalendarIcon className="mr-2 size-5" />
                    Book Appointment
                  </Button>
                </SignUpButton>
              </div>
              {/* user testimonials */}
              <div className="pt-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex -space-x-3">
                    <Image
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
                      alt="Jessica Davis"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                      alt="Sam Miller"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    />
                    <Image
                       src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
                      alt="Anna Lopez"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face"
                      alt="Mike Rodriguez"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face"
                      alt="Katie Lee"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                    />
                  </div>

                  {/* rateing and stars */}

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon
                            key={star}
                            className="h-4 w-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        4.9/5
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground max-w-md">
                      Trusted by{" "}
                      <span className="font-semibold text-foreground">
                        1,200 + patients
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* right content */}
            <div className="relative lg:pl-8">
              {/* gradient orbs */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl"></div>

              <Image
                src={"/hero.png"}
                alt=""
                width={600}
                height={600}
                className="
  w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
