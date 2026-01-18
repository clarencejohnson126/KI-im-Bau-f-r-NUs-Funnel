import { Hero } from "@/components/Hero";
import { AnimatedHero } from "@/components/AnimatedHero";
import { OpeningHook } from "@/components/OpeningHook";
import { ProblemSection } from "@/components/ProblemSection";
import { DailyReality } from "@/components/DailyReality";
import { PainPointsDetailed } from "@/components/PainPointsDetailed";
import { BrutalNumbers } from "@/components/BrutalNumbers";
import { CostOfChaos } from "@/components/CostOfChaos";
import { GUExpectations } from "@/components/GUExpectations";
import { DigitalizationLie } from "@/components/DigitalizationLie";
import { DeeperPain } from "@/components/DeeperPain";
import { Consequences } from "@/components/Consequences";
import { TurningPoint } from "@/components/TurningPoint";
import { KISolutions } from "@/components/KISolutions";
import { BeforeAfterTransformation } from "@/components/BeforeAfterTransformation";
import { WhatIfSection } from "@/components/WhatIfSection";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SolutionBridge } from "@/components/SolutionBridge";
import { SocialProofBreak } from "@/components/SocialProofBreak";
import { WhoIsThisFor } from "@/components/WhoIsThisFor";
import { ProductReveal } from "@/components/ProductReveal";
import { ValueStack } from "@/components/ValueStack";
import { MidPageCTA } from "@/components/MidPageCTA";
import { Benefits } from "@/components/Benefits";
import { ToolComparison } from "@/components/ToolComparison";
import { GoldenRules } from "@/components/GoldenRules";
import { RealProjects } from "@/components/RealProjects";
import { LessonsLearned } from "@/components/LessonsLearned";
import { Author } from "@/components/Author";
import { DetailedChapterPreview } from "@/components/DetailedChapterPreview";
import { Chapters } from "@/components/Chapters";
import { Objections } from "@/components/Objections";
import { Testimonials } from "@/components/Testimonials";
import { TestimonialsAnimated } from "@/components/TestimonialsAnimated";
import { ProductShowcaseAnimated } from "@/components/ProductShowcaseAnimated";
import { FAQAnimated } from "@/components/FAQAnimated";
import { StatsShowcase } from "@/components/StatsShowcase";
import { TransformationTimeline } from "@/components/TransformationTimeline";
import { Guarantee } from "@/components/Guarantee";
import { DecisionSection } from "@/components/DecisionSection";
import { Urgency } from "@/components/Urgency";
import { FinalStackRecap } from "@/components/FinalStackRecap";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <main>
      {/* ============================================== */}
      {/* SECTION 1: HOOK - Grab attention immediately */}
      {/* Animated hero with parallax construction tools */}
      {/* ============================================== */}
      <AnimatedHero />

      {/* ============================================== */}
      {/* SECTION 2: OPENING HOOK - Set the scene */}
      {/* "Es ist 17:30 Uhr. Die Baustelle ist dicht..." */}
      {/* ============================================== */}
      <OpeningHook />

      {/* ============================================== */}
      {/* SECTION 3: PROBLEM OVERVIEW - Surface the pain */}
      {/* ============================================== */}
      <ProblemSection />

      {/* ============================================== */}
      {/* SECTION 3a: DAILY REALITY - Real construction site photos */}
      {/* Team meetings, paperwork, stundenzettel - authentic images */}
      {/* ============================================== */}
      <DailyReality />

      {/* ============================================== */}
      {/* SECTION 3b: DETAILED PAIN POINTS - Concrete cases */}
      {/* 6 interactive expandable cards with real stories */}
      {/* ============================================== */}
      <PainPointsDetailed />

      {/* ============================================== */}
      {/* SECTION 4: BRUTAL NUMBERS - The hard data */}
      {/* 40-60% admin time, detailed breakdown */}
      {/* ============================================== */}
      <BrutalNumbers />

      {/* ============================================== */}
      {/* SECTION 5: COST OF CHAOS - What it really costs */}
      {/* Missed Nachträge, lost offers, turnover, life */}
      {/* ============================================== */}
      <CostOfChaos />

      {/* ============================================== */}
      {/* SECTION 6: GU EXPECTATIONS - Perspective shift */}
      {/* What the GU expects from you */}
      {/* ============================================== */}
      <GUExpectations />

      {/* ============================================== */}
      {/* SECTION 7: THE LIE - False digitalization */}
      {/* Excel is not digitalization */}
      {/* ============================================== */}
      <DigitalizationLie />

      {/* ============================================== */}
      {/* SECTION 8: DEEPER PAIN - Emotional story */}
      {/* The Thursday night story */}
      {/* ============================================== */}
      <DeeperPain />

      {/* ============================================== */}
      {/* SECTION 9: CONSEQUENCES - What happens next */}
      {/* 6 months, 1 year, 3 years */}
      {/* ============================================== */}
      <Consequences />

      {/* ============================================== */}
      {/* SECTION 10: TURNING POINT - The discovery */}
      {/* January 2023, ChatGPT moment */}
      {/* ============================================== */}
      <TurningPoint />

      {/* ============================================== */}
      {/* SECTION 10b: KI SOLUTIONS - How AI helps concretely */}
      {/* Voice Agents, WhatsApp, Email, RAG, Documents, Workflows */}
      {/* ============================================== */}
      <KISolutions />

      {/* ============================================== */}
      {/* SECTION 10c: BEFORE/AFTER TRANSFORMATION - Happy worker images */}
      {/* From stressed to relaxed, featuring happy construction boss */}
      {/* ============================================== */}
      <BeforeAfterTransformation />

      {/* ============================================== */}
      {/* SECTION 11: WHAT IF - The vision */}
      {/* What could be possible */}
      {/* ============================================== */}
      <WhatIfSection />

      {/* ============================================== */}
      {/* SECTION 11b: BEFORE/AFTER SLIDER - Interactive comparison */}
      {/* Drag to compare time savings */}
      {/* ============================================== */}
      <BeforeAfterSlider />

      {/* ============================================== */}
      {/* SECTION 11c: STATS SHOWCASE - Numbers with floating tools */}
      {/* Animated counters and ROI calculation */}
      {/* ============================================== */}
      <StatsShowcase />

      {/* ============================================== */}
      {/* SECTION 12: SOLUTION BRIDGE - Concrete savings */}
      {/* Before/after with numbers */}
      {/* ============================================== */}
      <SolutionBridge />

      {/* ============================================== */}
      {/* SECTION 13: SOCIAL PROOF #1 - First testimonial */}
      {/* ============================================== */}
      <SocialProofBreak variant={1} />

      {/* ============================================== */}
      {/* SECTION 14: WHO IS THIS FOR - Qualification */}
      {/* Ideal customer vs not for you */}
      {/* ============================================== */}
      <WhoIsThisFor />

      {/* ============================================== */}
      {/* SECTION 15: PRODUCT REVEAL - The bundle */}
      {/* What you get */}
      {/* ============================================== */}
      <ProductReveal />

      {/* ============================================== */}
      {/* SECTION 15b: PRODUCT SHOWCASE - Interactive flip cards */}
      {/* Expandable product details */}
      {/* ============================================== */}
      <ProductShowcaseAnimated />

      {/* ============================================== */}
      {/* SECTION 16: VALUE STACK - Detailed breakdown */}
      {/* Each item with price */}
      {/* ============================================== */}
      <ValueStack />

      {/* ============================================== */}
      {/* SECTION 17: MID-PAGE CTA #1 */}
      {/* First call to action */}
      {/* ============================================== */}
      <MidPageCTA variant="default" />

      {/* ============================================== */}
      {/* SECTION 18: BENEFITS - What changes */}
      {/* 5 main benefits with icons */}
      {/* ============================================== */}
      <Benefits />

      {/* ============================================== */}
      {/* SECTION 19: TOOL COMPARISON - The big test */}
      {/* Claude vs ChatGPT, €10,550 example */}
      {/* ============================================== */}
      <ToolComparison />

      {/* ============================================== */}
      {/* SECTION 20: GOLDEN RULES - 5 rules */}
      {/* The formula for success */}
      {/* ============================================== */}
      <GoldenRules />

      {/* ============================================== */}
      {/* SECTION 21: SOCIAL PROOF #2 - More testimonials */}
      {/* ============================================== */}
      <SocialProofBreak variant={2} />

      {/* ============================================== */}
      {/* SECTION 22: REAL PROJECTS - Credibility */}
      {/* Omniturm, Leiq, etc. */}
      {/* ============================================== */}
      <RealProjects />

      {/* ============================================== */}
      {/* SECTION 23: LESSONS LEARNED - 4 key lessons */}
      {/* From 13 years of experience */}
      {/* ============================================== */}
      <LessonsLearned />

      {/* ============================================== */}
      {/* SECTION 24: ABOUT THE AUTHOR - Full bio */}
      {/* Clarence Johnson */}
      {/* ============================================== */}
      <Author />

      {/* ============================================== */}
      {/* SECTION 25: DETAILED CHAPTERS - What's inside */}
      {/* 7 parts, 21 chapters, expandable */}
      {/* ============================================== */}
      <DetailedChapterPreview />

      {/* ============================================== */}
      {/* SECTION 26: CHAPTERS - Quick overview */}
      {/* Accordion view */}
      {/* ============================================== */}
      <Chapters />

      {/* ============================================== */}
      {/* SECTION 27: MID-PAGE CTA #2 - Dark variant */}
      {/* ============================================== */}
      <MidPageCTA variant="dark" />

      {/* ============================================== */}
      {/* SECTION 28: OBJECTION HANDLING - FAQ style */}
      {/* Address concerns */}
      {/* ============================================== */}
      <Objections />

      {/* ============================================== */}
      {/* SECTION 28b: FAQ ANIMATED - Smooth accordion FAQ */}
      {/* Categorized questions with animations */}
      {/* ============================================== */}
      <FAQAnimated />

      {/* ============================================== */}
      {/* SECTION 29: TESTIMONIALS - Extended social proof */}
      {/* Animated carousel with 3D flip transitions */}
      {/* ============================================== */}
      <TestimonialsAnimated />

      {/* ============================================== */}
      {/* SECTION 30: GUARANTEE - Risk reversal */}
      {/* 14-day money back */}
      {/* ============================================== */}
      <Guarantee />

      {/* ============================================== */}
      {/* SECTION 30b: TRANSFORMATION TIMELINE - Visual journey */}
      {/* From chaos to control step by step */}
      {/* ============================================== */}
      <TransformationTimeline />

      {/* ============================================== */}
      {/* SECTION 31: DECISION - Two options */}
      {/* Status quo vs KI */}
      {/* ============================================== */}
      <DecisionSection />

      {/* ============================================== */}
      {/* SECTION 32: URGENCY - Why now */}
      {/* ROI calculation, cost of waiting */}
      {/* ============================================== */}
      <Urgency />

      {/* ============================================== */}
      {/* SECTION 33: FINAL STACK RECAP - Last summary */}
      {/* Everything they get, final price */}
      {/* ============================================== */}
      <FinalStackRecap />

      {/* ============================================== */}
      {/* SECTION 34: MID-PAGE CTA #3 - Gradient variant */}
      {/* ============================================== */}
      <MidPageCTA variant="gradient" />

      {/* ============================================== */}
      {/* SECTION 35: FINAL CTA - Last push */}
      {/* With P.S. message */}
      {/* ============================================== */}
      <FinalCTA />

      {/* ============================================== */}
      {/* FOOTER */}
      {/* ============================================== */}
      <Footer />

      {/* ============================================== */}
      {/* STICKY MOBILE CTA */}
      {/* ============================================== */}
      <StickyMobileCTA />
    </main>
  );
}
