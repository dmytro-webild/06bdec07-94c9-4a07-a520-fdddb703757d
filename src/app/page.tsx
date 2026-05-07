"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
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
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Books",
          id: "#products",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Coloring Adventures"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "sparkles-gradient",
      }}
      title="Spark Their Imagination, One Page at a Time"
      description="Discover magical worlds and friendly characters through our collection of premium, creative coloring books for kids."
      buttons={[
        {
          text: "Browse Books",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/front-view-young-female-holding-paints-drawing-white-background_140725-103445.jpg"
      imageAlt="cheerful children coloring book illustration"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Why Our Books Matter"
      metrics={[
        {
          icon: Sparkles,
          label: "Fun Hours",
          value: "500+",
        },
        {
          icon: CheckCircle,
          label: "Happy Kids",
          value: "10k+",
        },
        {
          icon: Star,
          label: "Artistic Books",
          value: "50+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Designed for Every Young Artist"
      description="Our coloring books are meticulously crafted to encourage creativity, focus, and joy in children of all ages."
      accordionItems={[
        {
          id: "1",
          title: "Developmentally Appropriate",
          content: "Age-appropriate designs that build motor skills and confidence.",
        },
        {
          id: "2",
          title: "Premium Paper Quality",
          content: "Thick, high-quality paper that works with markers, crayons, and colored pencils without bleeding.",
        },
        {
          id: "3",
          title: "Engaging Themes",
          content: "From space journeys to fairytale landscapes, we keep young minds excited and curious.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-cartoon-apple_23-2151800350.jpg"
      imageAlt="cheerful children coloring book illustration"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Animal Kingdom Wonders",
          price: "$12.99",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-mandala-concept_23-2148812403.jpg",
        },
        {
          id: "2",
          name: "Magical Forest Tales",
          price: "$14.99",
          imageSrc: "http://img.b2bpic.net/free-photo/monochrome-coloring-page-with-pirates-line-art-style_23-2151556587.jpg",
        },
        {
          id: "3",
          name: "Tiny Astronaut Adventures",
          price: "$11.99",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-drawing-tools_23-2149371260.jpg",
        },
        {
          id: "4",
          name: "Ocean Deep Discoveries",
          price: "$13.99",
          imageSrc: "http://img.b2bpic.net/free-vector/cute-friends-bird-coloring-page_6317-5017.jpg",
        },
        {
          id: "5",
          name: "Fairytale Dreamscape",
          price: "$15.99",
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-giraffe-forest-illustration_23-2151983363.jpg",
        },
        {
          id: "6",
          name: "Jungle Party Fun",
          price: "$12.99",
          imageSrc: "http://img.b2bpic.net/free-photo/girl-with-some-books_23-2147783657.jpg",
        },
      ]}
      title="Featured Coloring Books"
      description="Pick the perfect adventure for your little one."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={false}
      plans={[
        {
          id: "individual",
          price: "$12.99",
          name: "Single Book",
          buttons: [
            {
              text: "Select",
              href: "#",
            },
          ],
          features: [
            "1 coloring book",
            "High-quality paper",
            "Digital coloring printable included",
          ],
        },
        {
          id: "starter",
          price: "$29.99",
          name: "Starter Bundle",
          badge: "Popular",
          buttons: [
            {
              text: "Select",
              href: "#",
            },
          ],
          features: [
            "3 coloring books",
            "Free markers set",
            "Digital coloring printable included",
          ],
        },
        {
          id: "pro",
          price: "$49.99",
          name: "Master Artist",
          buttons: [
            {
              text: "Select",
              href: "#",
            },
          ],
          features: [
            "All 6 books",
            "Full art kit",
            "Exclusive member rewards",
          ],
        },
      ]}
      title="Simple Fun Options"
      description="Choose the best way to get our books."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah Miller",
          role: "Parent",
          company: "Happy Home",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/shouting-girl-wearing-flower-basket_23-2148442606.jpg",
        },
        {
          id: "2",
          name: "James Chen",
          role: "Dad",
          company: "DIY Tech",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/father-son-drawing-together-floor_23-2148511507.jpg",
        },
        {
          id: "3",
          name: "Emily Davis",
          role: "Parent",
          company: "Art Studio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/little-cute-girl-wearing-pink-woven-hat-holding-paintbrush-paint-palette_23-2148088518.jpg",
        },
        {
          id: "4",
          name: "Mark Wilson",
          role: "Parent",
          company: "Marketing Co",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/polyamorous-couple-spending-time-together-outdoors-park_23-2149712576.jpg",
        },
        {
          id: "5",
          name: "Lisa Brown",
          role: "Educator",
          company: "School District",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-listens-music-via-headphones-is-drawing-painting-with-oils_8353-10780.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "98%",
          label: "Customer Satisfaction",
        },
        {
          value: "500k",
          label: "Pages Colored",
        },
        {
          value: "15k",
          label: "Creative Families",
        },
      ]}
      title="Loved by Families"
      description="Hear from happy parents about how our books brighten their day."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Is the paper thick enough?",
          content: "Yes, our paper is premium quality and marker-friendly.",
        },
        {
          id: "2",
          title: "Do you ship internationally?",
          content: "Yes, we ship our books worldwide.",
        },
        {
          id: "3",
          title: "Can I return a book?",
          content: "If you are not satisfied, contact us within 30 days for a return.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Need help finding the right book? Check our answers here."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Stay Connected"
      title="Join Our Creative Newsletter"
      description="Sign up for updates on new coloring books, special discounts, and fun activities for your kids."
      inputPlaceholder="Enter parent's email address"
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-father-kid-drawing_23-2148936185.jpg"
      imageAlt="Medium shot father and kid drawing"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/shimmering-wavy-purple-orange-abstract-background_23-2148235979.jpg"
      logoText="Coloring Adventures"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "All Books",
              href: "#products",
            },
            {
              label: "New Arrivals",
              href: "#",
            },
            {
              label: "Bundles",
              href: "#pricing",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Blog",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Help",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Shipping",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
