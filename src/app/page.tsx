"use client";

import Autoplay from "embla-carousel-autoplay";
import { Noto_Serif, Noto_Sans, Allura } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Testimonial } from "@/components/testimonial";

const titleFont = Noto_Serif({ subsets: ["latin"] });
const paragraphFont = Noto_Sans({ subsets: ["latin"] });
const accentFont = Allura({ weight: "400", subsets: ["latin"] });

const pillars = [
  {
    id: 1,
    image: "/images/financial-inclusion.svg",
    title: "Financial Inclusion",
    description:
      "We don't just talk about access to capital, we create it. Through financial literacy training, investor linkages, and blended finance partnerships, we help members secure funding and build bankable businesses.",
  },
  {
    id: 2,
    image: "/images/market-access.svg",
    title: "Market Access",
    description:
      "Local buyers. Regional trade. AfCFTA opportunities. B2B and B2C connections. We bring the markets to you, and your products to them. Our digital marketplace (launching soon) will connect sellers and buyers across the continent.",
  },
  {
    id: 3,
    image: "/images/trade-facilitation.svg",
    title: "Trade Facilitation",
    description:
      "Compliance. Standards. Certifications. Rules of origin. We break down the barriers that keep small businesses out of big markets, with training and resources tailored to AfCFTA and beyond.",
  },
  {
    id: 4,
    image: "/images/technology-innovation.svg",
    title: "Technology & Innovation",
    description:
      "Our E-Hub is your one-stop resource for mechanization, precision farming, soil testing, climate-smart tech, and quality control. Stay ahead of the curve with tools that make your operation more competitive.",
  },
];

const stats = [
  {
    value: "44",
    description: "represented across the continent",
  },
  {
    value: "2,500+",
    description: "agribusinesses connected through our network",
  },
  {
    value: "500k",
    description: "women and youth already impacted",
  },
  {
    value: "15M",
    description: "our goal,because scale creates power",
  },
];

const testimonials = [
  {
    quote: "Man, I'm pretty!",
    author: "Jonny Bravo",
    authorRole: "Model",
    imageUrl: "/images/jonny-bravo.jpg",
  },
  {
    quote: "The inner machinations of my mind are an enigma.",
    author: "Patrick Star",
    authorRole: "Entrepreneur",
    imageUrl: "/images/patrick-star.webp",
  },
  {
    quote: "You're despicable!",
    author: "Duffy Duck",
    authorRole: "Performer",
    imageUrl: "/images/duffy-duck.jpg",
  },
];

const Page = () => {
  return (
    <>
      <section id="hero" className="pt-12 pb-6">
        <div className="px-4 text-left">
          <h2 className={`${titleFont.className} text-xl [word-spacing:3px]`}>
            <span className={`text-orange-500 ${accentFont.className}`}>
              Grow{" "}
            </span>
            together.
          </h2>
          <p
            className={`${paragraphFont.className} text-base mt-8 leading-relaxed`}
          >
            AWAN Afrika connects women and youth agribusiness owners across the
            continent, building pathways from farm to market, and ambition to
            impact.
          </p>
          <Button
            variant="default"
            size="lg"
            className={`${paragraphFont.className} mt-8 text-sm rounded-full bg-stone-800`}
          >
            Join Us
          </Button>
        </div>
      </section>
      <section id="about" className="py-6 bg-yellow-100 rounded-3xl">
        <div className="px-4 text-left pt-5">
          <h3 className={`${titleFont.className} text-lg [word-spacing:3px]`}>
            We exist to turn <i className="text-orange-500">agribusiness </i>
            into
            <i className="text-orange-500"> wealth </i>
            for African women and youth
          </h3>
          <p
            className={`${paragraphFont.className} text-sm mt-12 leading-relaxed`}
          >
            Agriculture feeds Africa. But for long, the people doing the work,
            especially women, have been locked out of the profits. AWAN Africa
            changes that. We give our 2,500+ members the tools, networks, and
            market access to turn their businesses into engines of economic
            power. From financial literacy to continental trade, we're building
            an ecosystem where growth isn't just possible, it's inevitable.
          </p>
        </div>
      </section>
      <section id="stats" className="py-6">
        <div className="px-4 text-left pt-5">
          <h3 className={`${titleFont.className} text-lg [word-spacing:3px]`}>
            Networks unlocks
            <i className="text-orange-500"> markets</i>.
          </h3>
          <div className="flex flex-wrap gap-8 mt-12">
            {stats.map((stat) => (
              <div className="max-w-64" key={stat.value}>
                <div className="bg-orange-500 w-32 h-4 rounded-2xl"></div>
                <p className={`text-bold text-xl my-2 ${titleFont.className}`}>
                  {stat.value}
                </p>
                <p className={`${paragraphFont.className}`}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="pillars" className="py-6">
        <div className="px-4 text-left pt-5">
          <h3 className={`${titleFont.className} text-lg [word-spacing:3px]`}>
            How we support you
          </h3>
          <div className="flex flex-wrap gap-8 mt-9">
            {pillars.map((pillar) => (
              <div className="flex items-start gap-4" key={pillar.id}>
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  width={120}
                  height={120}
                  className="object-contain"
                />
                <div>
                  <h4 className={`${titleFont.className} text-base`}>
                    {pillar.title}
                  </h4>
                  <p
                    className={`${paragraphFont.className} text-sm mt-2 leading-relaxed`}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-6 bg-yellow-100 rounded-t-3xl">
        <div className="px-4 text-left pt-5">
          <h3 className={`${titleFont.className} text-lg [word-spacing:3px]`}>
            <i className="text-orange-500">Here from</i> our members
          </h3>
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.author}>
                  <Testimonial {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Page;
