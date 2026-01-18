"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { Accordion, AccordionItem } from "./ui/Accordion";
import { faq } from "../../content/faq";

export function FAQ() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-orange-600 font-medium mb-4">
            <HelpCircle className="w-5 h-5" />
            FAQ
          </span>
          <h2 className="heading-2 text-gray-900">Häufige Fragen</h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <Accordion>
              {faq.map((item, index) => (
                <AccordionItem key={index} title={item.question}>
                  <p>{item.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
