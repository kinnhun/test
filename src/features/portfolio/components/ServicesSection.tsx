'use client';

import AppIcon from "@/components/ui/AppIcon";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  benefits: string[];
  deliverables: string[];
}

const services: Service[] = [
  {
    id: "service_1",
    title: "Photography Services",
    icon: "CameraIcon",
    description: "Professional photography services spanning editorial, fashion, commercial, and portrait photography. With 30 years of experience, I bring technical mastery and artistic vision to every shoot.",
    benefits: [
      "High-resolution images optimized for all platforms",
      "Professional post-processing and color grading",
      "Fast turnaround times without compromising quality",
      "Flexible shooting styles from studio to location"
    ],
    deliverables: [
      "Edited high-resolution images",
      "Color-graded files ready for print/digital",
      "Social media optimized versions",
      "Raw files upon request"
    ]
  },
  {
    id: "service_2",
    title: "Modeling & Creative Direction",
    icon: "UserIcon",
    description: "Unique dual expertise as both photographer and model provides unparalleled understanding of both sides of the camera, resulting in more authentic and compelling visual narratives.",
    benefits: [
      "Deep understanding of posing and composition",
      "Ability to direct models with precision",
      "Authentic representation of brand vision",
      "Versatile across fashion, editorial, and commercial"
    ],
    deliverables: [
      "Professional modeling services",
      "Creative direction and styling guidance",
      "Pose and expression direction",
      "Brand alignment consultation"
    ]
  },
  {
    id: "service_3",
    title: "Video Editing & Production",
    icon: "VideoCameraIcon",
    description: "Cinematic video editing and production services with expertise in color grading, motion design, and storytelling. Creating compelling narratives that engage and inspire audiences.",
    benefits: [
      "Cinematic color grading and visual effects",
      "Seamless storytelling and pacing",
      "Multi-format delivery (4K, HD, social media)",
      "Sound design and audio enhancement"
    ],
    deliverables: [
      "Final edited video files",
      "Color-graded master files",
      "Social media optimized versions",
      "Motion graphics and animations"
    ]
  },
  {
    id: "service_4",
    title: "Brand Design & Identity",
    icon: "PaintBrushIcon",
    description: "Comprehensive brand identity design services including logo design, visual systems, and brand guidelines. Creating cohesive brand experiences that resonate with target audiences.",
    benefits: [
      "Strategic brand positioning and identity",
      "Cohesive visual systems across all touchpoints",
      "Modern, timeless design that scales",
      "Complete brand guidelines and assets"
    ],
    deliverables: [
      "Logo and brand identity system",
      "Brand guidelines document",
      "Visual assets and templates",
      "UI/UX design when applicable"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-white/60 border-b border-[#EAD8C2]/30 py-12 lg:py-16 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-[#EAD8C2]/4 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-[#EAD8C2]/3 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="reveal mb-10 text-center">
          <div className="inline-block rounded-full bg-[#EAD8C2]/20 backdrop-blur-sm px-5 py-2 border border-[#EAD8C2]/40 mb-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#2a2a2a]">
              What I Offer
            </p>
          </div>
          <h2 className="font-serif text-4xl font-normal leading-[0.95] tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl xl:text-7xl mb-5 text-shadow-soft">
            Professional Services
          </h2>
          <p className="mx-auto max-w-3xl text-lg font-light leading-[1.95] text-[#3a3a3a] mb-5 lg:text-xl">
            Comprehensive creative services backed by three decades of experience. Each service is tailored to deliver exceptional results that exceed expectations.
          </p>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#EAD8C2] to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`reveal stagger-${index + 1} group relative`}
            >
              <div className="relative bg-white/95 backdrop-blur-md border border-[#EAD8C2]/50 rounded-2xl p-6 lg:p-8 shadow-soft-lg hover:shadow-soft-lg transition-all duration-700 hover:-translate-y-1 hover:scale-[1.01] h-full fade-scale hover-lift-shadow tilt-3d" style={{ transformOrigin: 'center' }}>
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAD8C2]/20 backdrop-blur-sm border border-[#EAD8C2]/40 transition-all duration-600 group-hover:bg-[#EAD8C2]/30 group-hover:scale-110 group-hover:rotate-3">
                  <AppIcon
                    // @ts-expect-error – mapping by string
                    name={service.icon}
                    size={32}
                    className="text-[#2a2a2a]"
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl lg:text-3xl font-normal text-[#1a1a1a] mb-4 text-shadow-soft">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base lg:text-lg font-light leading-[1.9] text-[#3a3a3a] mb-8">
                  {service.description}
                </p>

                {/* Benefits - Simplified */}
                <div className="mb-6 border-t border-[#EAD8C2]/30 pt-6">
                  <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-[#2a2a2a] mb-3">
                    Key Benefits
                  </h4>
                  <ul className="space-y-2.5">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-start gap-2.5 text-sm font-light text-[#3a3a3a]"
                      >
                        <AppIcon name="CheckCircleIcon" size={14} className="text-[#EAD8C2] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-10 text-center">
          <Link
            href="#contact"
            className="btn-premium group magnetic inline-flex items-center gap-3 rounded-full hover:scale-105 px-10 py-4 text-sm font-medium uppercase tracking-[0.1em]"
          >
            <span>Discuss Your Project</span>
            <AppIcon
              name="ArrowRightIcon"
              size={18}
              className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

