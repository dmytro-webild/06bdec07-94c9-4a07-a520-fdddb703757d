"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { CheckCircle, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="large"
        background="fluid"
        cardStyle="glass-elevated"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "#hero" },
        { name: "Books", id: "#products" },
        { name: "Pricing", id: "#pricing" },
        { name: "Testimonials", id: "#testimonials" },
        { name: "FAQ", id: "#faq" },
        { name: "Contact", id: "#contact" },
      ]}
      brandName="Coloring Adventures"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{ variant: "sparkles-gradient" }}
      title="Spark Their Imagination, One Page at a Time"
      description="Discover magical worlds and friendly characters through our collection of premium, creative coloring books for kids."
      buttons={[{ text: "Browse Books", href: "#products" }]}
      imageSrc="http://img.b2bpic.net/free-photo/front-view-young-female-holding-paints-drawing-white-background_140725-103445.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Why Our Books Matter"
      metrics={[
        { icon: Sparkles, label: "Fun Hours", value: "500+" },
        { icon: CheckCircle, label: "Happy Kids", value: "10k+" },
        { icon: Star, label: "Artistic Books", value: "50+" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      gridVariant="three-columns-all-equal-width"
      textboxLayout="split-description"
      useInvertedBackground={false}
      title="Playful Collection"
      description="Find the perfect creative adventure for your little artist."
      products={[
        { id: "1", name: "Animal Kingdom", price: "$12.99", variant: "Fun", imageSrc: "http://img.b2bpic.net/free-photo/3d-cartoon-apple_23-2151800350.jpg?_wi=1" },
        { id: "2", name: "Magical Forest", price: "$14.99", variant: "Dreamy", imageSrc: "http://img.b2bpic.net/free-photo/colorful-giraffe-forest-illustration_23-2151983363.jpg" },
        { id: "3", name: "Space Explorers", price: "$11.99", variant: "Cool", imageSrc: "http://img.b2bpic.net/free-photo/girl-with-some-books_23-2147783657.jpg" }
      ]}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={true}
      title="Friendly Pricing"
      description="Choose the perfect pack to fuel their creativity."
      plans={[
        { id: "1", badge: "Starter", price: "$12.99", subtitle: "Just right for beginners", features: ["1 Coloring Book", "High Quality Paper"], buttons: [{ text: "Get Started" }] },
        { id: "2", badge: "Best Value", price: "$29.99", subtitle: "Our most popular choice", features: ["3 Coloring Books", "Coloring Pencils", "Fun Stickers"], buttons: [{ text: "Pick This" }] }
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      title="Happy Smiles"
      description="See what families say about their coloring adventures."
      textboxLayout="split-description"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sarah J.", role: "Parent", company: "Happy Parent", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/shouting-girl-wearing-flower-basket_23-2148442606.jpg" },
        { id: "2", name: "Mike D.", role: "Father", company: "Happy Parent", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/father-son-drawing-together-floor_23-2148511507.jpg" }
      ]}
      kpiItems={[
        { value: "10k+", label: "Happy Kids" },
        { value: "500+", label: "Fun Books" },
        { value: "4.9", label: "Avg Rating" }
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      title="Curious Minds"
      description="Find answers to your questions here!"
      faqsAnimation="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "Is the paper safe?", content: "Yes, our paper is premium and non-toxic." },
        { id: "2", title: "Do you ship fast?", content: "We ship within 24 hours to your door." }
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-cartoon-apple_23-2151800350.jpg?_wi=2"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      tag="Say Hello!"
      title="Join the Fun"
      description="Sign up for our newsletter to get playful updates."
      useInvertedBackground={true}
      background={{ variant: "sparkles-gradient" }}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "Shop", items: [{ label: "Catalog", href: "#products" }, { label: "Pricing", href: "#pricing" }] },
        { title: "Support", items: [{ label: "FAQ", href: "#faq" }, { label: "Contact", href: "#contact" }] }
      ]}
      bottomLeftText="© 2025 Coloring Adventures"
      bottomRightText="Made with love for kids"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
