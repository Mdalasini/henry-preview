"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRightLeft,
  Briefcase,
  Globe,
  Landmark,
  Tractor,
  TrendingUp,
  Users,
} from "lucide-react";
import { useRef } from "react";
import { Testimonial } from "@/components/testimonial";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const pillars = [
  {
    id: 1,
    icon: <Landmark className="w-8 h-8 text-gray-900" />,
    title: "Women Economic & Financial Inclusion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    icon: <Globe className="w-8 h-8 text-gray-900" />,
    title: "Market Access",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    icon: <ArrowRightLeft className="w-8 h-8 text-gray-900" />,
    title: "Trade Facilitation",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    icon: <Tractor className="w-8 h-8 text-gray-900" />,
    title: "Technology in Agriculture",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Winston Churchill",
    authorRole: "Statesman",
    imageUrl: "/images/winston-churchill.webp",
  },
  {
    id: 2,
    quote:
      "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
    author: "Albert Einstein",
    authorRole: "Theoretical Physicist",
    imageUrl: "/images/einstein.webp",
  },
  {
    id: 3,
    quote: "The inner machinations of my mind are an enigma.",
    author: "Patrick Star",
    authorRole: "Philosopher",
    imageUrl: "/images/patrick-star.webp",
  },
];

const stats = [
  {
    id: 1,
    icon: <Globe className="w-8 h-8 text-gray-900" />,
    value: "44",
    label: "African Countries",
  },
  {
    id: 2,
    icon: <Briefcase className="w-8 h-8 text-gray-900" />,
    value: "2,500",
    label: "Registered Businesses",
  },
  {
    id: 3,
    icon: <Users className="w-8 h-8 text-gray-900" />,
    value: "500K+",
    label: "Women & Youth Impacted",
  },
  {
    id: 4,
    icon: <TrendingUp className="w-8 h-8 text-gray-900" />,
    value: "15M",
    label: "Our Target",
  },
];

const Page = () => {
  return (
    <div className="bg-white text-gray-800">
      <main className="container mx-auto px-4 py-16">
        {/* What We Do Section */}
        <section className="text-center mb-24">
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>

        {/* Our Pillars Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Our Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="text-center p-6 border border-gray-200 rounded-lg"
              >
                <div className="flex justify-center mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[useRef(Autoplay({ delay: 3000 })).current]}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="p-1">
                    <Testimonial {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>

        {/* Stats Section */}
        <section>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex items-center justify-center flex-col sm:flex-row"
              >
                <div className="mr-4">{stat.icon}</div>
                <div>
                  <p className="text-4xl font-bold">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
