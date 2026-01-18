"use client";

import React from "react";
import { Shield, Download, Lock, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/Button";
import { copy } from "../../content/copy";

export function Hero() {
  const { hero } = copy;

  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById("final-cta");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-concrete-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 gradient-mesh" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Large 40% Background Number */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[30rem] text-orange-500/[0.04] leading-none select-none pointer-events-none">
          40%
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border-l-4 border-t-4 border-orange-500/20 rounded-tl-3xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 border-r-4 border-b-4 border-orange-500/20 rounded-br-3xl" />
      </div>

      <div className="section-container relative z-10 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-in-down opacity-0 delay-100">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-concrete-900 text-white text-sm font-heading font-semibold tracking-wide uppercase rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-orange-400" />
              {hero.badge}
            </span>
          </div>

          {/* Main Headline - Bold Display Typography */}
          <h1 className="animate-fade-in-up opacity-0 delay-200">
            <span className="block font-display text-display-xl text-concrete-900 mb-2">
              40% deiner Arbeitszeit
            </span>
            <span className="block font-display text-display-xl">
              <span className="relative inline-block">
                <span className="relative z-10 text-orange-500">verschwindet</span>
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-orange-300" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </span>
            <span className="block font-display text-display-xl text-concrete-900">
              im Papierkrieg
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up opacity-0 delay-300 text-body-lg text-concrete-600 mt-8 mb-10 max-w-2xl leading-relaxed">
            {hero.subheadline}
          </p>

          {/* CTA Section */}
          <div className="animate-fade-in-up opacity-0 delay-400 flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
            <Button
              onClick={scrollToCheckout}
              variant="primary"
              size="lg"
              className="group text-xl px-10 py-5 shadow-brutal-orange hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              <span>{hero.cta}</span>
              <span className="mx-2">–</span>
              <span className="font-display text-2xl">{hero.price}</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex items-center gap-2 text-concrete-500">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-concrete-200 to-concrete-300 border-2 border-white" />
                ))}
              </div>
              <span className="text-sm font-medium">+300 Nachunternehmer über 13 Jahre</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="animate-fade-in-up opacity-0 delay-500 flex flex-wrap gap-6">
            {[
              { icon: Shield, text: hero.trustBadges[0], color: "text-green-600" },
              { icon: Download, text: hero.trustBadges[1], color: "text-blue-600" },
              { icon: Lock, text: hero.trustBadges[2], color: "text-purple-600" },
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-concrete-600">
                <badge.icon className={`w-5 h-5 ${badge.color}`} />
                <span className="font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Visual - Floating Card */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[400px]">
          <div className="animate-float relative">
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-elevated p-8 border border-concrete-100">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-3xl blur-xl" />

              <div className="relative">
                {/* Book Mockup */}
                <div className="relative mx-auto w-48 h-64 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg shadow-2xl transform rotate-3">
                    <div className="absolute inset-2 border border-white/20 rounded" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-4">
                        <p className="font-display text-2xl leading-tight">KI IM BAU</p>
                        <p className="text-xs mt-2 opacity-80">STARTER KIT</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-full h-full bg-concrete-300 rounded-lg -z-10 transform rotate-6" />
                </div>

                {/* Bundle Info */}
                <div className="text-center">
                  <p className="font-heading font-bold text-lg text-concrete-900">
                    Das komplette Paket
                  </p>
                  <p className="text-sm text-concrete-500 mt-1">
                    E-Book • Prompts • Checklisten • Matrix
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <span className="text-sm text-concrete-400 line-through">200 €</span>
                    <span className="font-display text-3xl text-orange-500">47 €</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-subtle">
              -76%
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg text-sm font-medium text-concrete-700 border border-concrete-100">
              📖 300+ Seiten
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
