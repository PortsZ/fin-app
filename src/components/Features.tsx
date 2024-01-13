"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    name: "Me Aposenta!",
    url: "/retire",
    description: "Calculadora de Liberdade Financeira",
    style: "from-sky-300 to-sky-500",
  },
  {
    name: "Calculadora de Financiamento",
    url: "/financing",
    description: "Feature 2 description",
    style: "from-lime-400 to-green-500",
  },
  {
    name: "Assistente de Criação de Portfólio",
    description: "Feature 3 description",
    enabled: "disabled",
    disabledMessage: "Em breve!",
    disabledStyle: "from-slate-100 to-slate-400 opacity-60 cursor-not-allowed",
  },
  {
    name: "Rebalanceamento de Portfólio",
    description: "Feature 4 description",
    enabled: "disabled",
    disabledMessage: "Em breve!",
    disabledStyle: "from-slate-100 to-slate-400 opacity-60 cursor-not-allowed",
  },
];

const Features = () => {
  return (
    <div className="grid grid-cols-2 gap-2 p-2">
      {features.map((feature, index) => {
        return (
          <Link href={feature.url ? feature.url : "/"}>
            <motion.div
              key={index}
              whileHover={feature.enabled === "disabled" ? {} : { scale: 1.02 }}
              whileTap={feature.enabled === "disabled" ? {} : { scale: 0.98 }}
              className={`
                ${
                  feature.enabled === "disabled"
                    ? feature.disabledStyle
                    : feature.style
                }
                p-4 text-black bg-gradient-to-tr rounded-lg cursor-pointer select-none`}
            >
              <h3 className="text-xl">{feature.name}</h3>
              <p className="text-slate-900">
                {feature.enabled === "disabled"
                  ? feature.disabledMessage
                  : feature.description}
              </p>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default Features;
