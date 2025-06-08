import { WrenchIcon, PenToolIcon as ToolIcon, AlertCircleIcon, BatteryChargingIcon, ClipboardCheckIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ElementType;
  benefits: string[];
  process: {
    title: string;
    steps: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const services: Service[] = [
  {
    id: "repair",
    title: "Sump Pump Repair",
    slug: "sump-pump-repair",
    shortDescription: "Professional diagnosis and repair of all sump pump issues to restore optimal function and prevent basement flooding.",
    fullDescription: "Our sump pump repair service addresses all components of your system, from the pump itself to the discharge lines, electrical connections, and float switches. We identify the root cause of issues like unusual noises, failure to pump, intermittent operation, or inadequate water removal, then implement lasting repairs using quality replacement parts. Our technicians are trained on all major sump pump brands and models.",
    icon: WrenchIcon,
    benefits: [
      "Restore full functionality to your sump pump system",
      "Prevent costly water damage from pump failure",
      "Identify underlying issues that may cause future problems",
      "Extend the lifespan of your existing sump pump",
      "Guaranteed repairs with 1-year warranty on parts and labor"
    ],
    process: {
      title: "Our Repair Process",
      steps: [
        "Comprehensive diagnostic assessment of your entire sump pump system",
        "Clear explanation of the problem and recommended repairs",
        "Transparent upfront pricing with no hidden fees",
        "Professional repair using quality replacement parts",
        "System testing to ensure proper operation",
        "Final cleanup and removal of old parts",
        "Repair documentation and maintenance recommendations"
      ]
    },
    faqs: [
      {
        question: "How long does a typical sump pump repair take?",
        answer: "Most repairs can be completed in 1-2 hours, though complex issues may take longer. We always provide time estimates before beginning work."
      },
      {
        question: "Will you try to repair my pump or just recommend replacement?",
        answer: "We always attempt repair when it's cost-effective and reliable. We only recommend replacement when repair costs would exceed 50% of replacement cost or when the pump is near the end of its useful life."
      },
      {
        question: "Can you repair any brand of sump pump?",
        answer: "Yes, our technicians are trained to repair all major brands including Zoeller, Wayne, Liberty, Basement Watchdog, Flotec, and many others."
      },
      {
        question: "Do you offer emergency sump pump repair?",
        answer: "Absolutely! We provide 24/7 emergency repair service throughout Bergen County. Call our emergency line at 973-329-8158 for immediate assistance."
      }
    ]
  },
  {
    id: "installation",
    title: "Sump Pump Installation",
    slug: "sump-pump-installation",
    shortDescription: "Expert installation of primary and backup sump pump systems to protect your basement from water damage.",
    fullDescription: "Our comprehensive sump pump installation service includes everything needed for a complete, reliable system. We handle site evaluation, pump selection, pit preparation, pump mounting, discharge line installation, electrical connections, and thorough testing. Whether you need a new system in a previously unprotected basement or replacement of an aging pump, our installations are designed for maximum reliability and longevity.",
    icon: ToolIcon,
    benefits: [
      "Protection from basement water damage and flooding",
      "Proper sizing to match your specific water management needs",
      "Professional installation that meets or exceeds building codes",
      "Extended pump life through correct installation techniques",
      "Quieter operation with proper mounting and discharge configuration"
    ],
    process: {
      title: "Our Installation Process",
      steps: [
        "Site evaluation to determine optimal pump location and discharge routing",
        "Personalized recommendations for pump type and capacity",
        "Professional installation by licensed technicians",
        "All necessary electrical work in compliance with local codes",
        "Complete discharge line installation or reconfiguration",
        "System calibration and thorough testing",
        "Owner orientation and maintenance guidelines"
      ]
    },
    faqs: [
      {
        question: "How long does a sump pump installation take?",
        answer: "A standard installation takes 3-4 hours. New pit installations or complex setups may require 4-6 hours or occasionally a second day for concrete work."
      },
      {
        question: "What size or type of sump pump do I need?",
        answer: "This depends on your specific situation including basement size, water table, soil conditions, and local rainfall patterns. We assess these factors to recommend the ideal pump size, typically 1/3 to 1/2 HP for most Bergen County homes."
      },
      {
        question: "Should I add a battery backup system?",
        answer: "We strongly recommend battery backup systems for all Bergen County homes due to our frequent power outages during storms. This provides crucial protection when you need it most."
      },
      {
        question: "Do you install water-powered backup pumps?",
        answer: "Yes, we install both battery backup and water-powered backup systems. We'll discuss the pros and cons of each approach for your specific situation."
      }
    ]
  },
  {
    id: "maintenance",
    title: "Sump Pump Maintenance",
    slug: "sump-pump-maintenance",
    shortDescription: "Regular preventative maintenance to ensure your sump pump system operates reliably when you need it most.",
    fullDescription: "Our preventative maintenance service helps extend the life of your sump pump and prevent unexpected failures. We perform comprehensive system checks, clean vital components, test operation under load, verify electrical connections, check discharge lines, and inspect backup systems. Regular maintenance significantly reduces the risk of pump failure during critical weather events and identifies potential issues before they cause flooding.",
    icon: ClipboardCheckIcon,
    benefits: [
      "Prevent unexpected sump pump failures",
      "Extend the operational life of your system",
      "Identify potential issues before they cause damage",
      "Maintain manufacturer warranty requirements",
      "Reduce lifetime ownership costs through preventative care"
    ],
    process: {
      title: "Our Maintenance Process",
      steps: [
        "Visual inspection of pit, pump, and all connections",
        "Testing of pump operation, cycling, and capacity",
        "Cleaning of pump intake screen and pit",
        "Check and testing of check valve and discharge line",
        "Verification of float switch operation",
        "Backup system testing and battery check (if applicable)",
        "Detailed report with any recommendations"
      ]
    },
    faqs: [
      {
        question: "How often should I have my sump pump maintained?",
        answer: "We recommend professional maintenance once per year for most homes, with additional check-ups before major storm seasons. Homes with high water tables or frequent pump operation may benefit from bi-annual service."
      },
      {
        question: "What's included in your maintenance service?",
        answer: "Our 20-point maintenance includes testing of all components, cleaning the pump and pit, checking electrical connections, verifying proper discharge, testing alarms and backup systems, and more. You'll receive a detailed condition report after service."
      },
      {
        question: "Can you maintain any brand of sump pump?",
        answer: "Yes, our technicians are trained to service all major brands and models of residential sump pumps."
      },
      {
        question: "Do you offer maintenance plans?",
        answer: "Yes, we offer annual maintenance plans that include priority scheduling, discounted rates, and documentation for warranty purposes. These plans often qualify for homeowner's insurance discounts as well."
      }
    ]
  },
  {
    id: "emergency",
    title: "Emergency Sump Pump Service",
    slug: "emergency-sump-pump-service",
    shortDescription: "24/7 emergency response for sump pump failures to prevent or minimize water damage to your home.",
    fullDescription: "Our emergency sump pump service provides rapid response throughout Bergen County when your pump fails during critical situations. We understand that sump pump emergencies often coincide with storms and power outages, which is why we maintain 24/7 availability with technicians ready to deploy throughout the county. Our emergency service includes water extraction, pump repair or replacement, and guidance on preventing water damage while waiting for service.",
    icon: AlertCircleIcon,
    benefits: [
      "Rapid response to minimize water damage",
      "Available 24/7, including nights, weekends and holidays",
      "Service throughout Bergen County",
      "Temporary solutions while permanent repairs are arranged",
      "Prevention of mold and structural damage from prolonged water exposure"
    ],
    process: {
      title: "Our Emergency Response Process",
      steps: [
        "Immediate phone guidance to minimize damage while waiting",
        "Priority dispatch of the nearest available technician",
        "Quick assessment of the situation upon arrival",
        "Emergency repairs or temporary pumping solutions",
        "Permanent repair or replacement options",
        "Water removal assistance",
        "Follow-up to ensure continued operation"
      ]
    },
    faqs: [
      {
        question: "How quickly can you respond to an emergency?",
        answer: "Our average response time is 60-90 minutes throughout Bergen County, though this may vary during major storm events when call volume is high. We prioritize based on flooding severity."
      },
      {
        question: "What should I do while waiting for emergency service?",
        answer: "If safe to do so, try to determine if the issue is electrical (check breakers) and move valuable items to higher ground. Never enter standing water that may contact electrical outlets or panels."
      },
      {
        question: "Do you charge extra for emergency service?",
        answer: "Emergency service does include a response fee and after-hours rates may apply depending on timing. However, we provide transparent pricing upfront before performing any work."
      },
      {
        question: "Can you help with water removal and damage?",
        answer: "We focus primarily on restoring pump operation but can assist with initial water removal. For extensive water damage, we coordinate with trusted water restoration partners."
      }
    ]
  },
  {
    id: "backup",
    title: "Battery Backup Installation",
    slug: "battery-backup-installation",
    shortDescription: "Installation of reliable battery backup systems to keep your sump pump running during power outages.",
    fullDescription: "Our battery backup installation service provides critical protection during power outages, which often coincide with the storms that cause basement flooding. We install complete backup systems that automatically activate when your primary pump loses power or fails. Options include standard battery backups with marine deep-cycle batteries, premium AGM battery systems with extended runtime, and water-powered backup systems for homes with municipal water service.",
    icon: BatteryChargingIcon,
    benefits: [
      "Protection during power outages and storms",
      "Automatic operation without homeowner intervention",
      "Alarm systems to alert you to pump or power issues",
      "Peace of mind when away from home during storms",
      "Potential insurance premium discounts for some policies"
    ],
    process: {
      title: "Our Backup Installation Process",
      steps: [
        "Assessment of your specific backup needs",
        "Recommendation of appropriate backup type and capacity",
        "Professional installation with all necessary components",
        "Integration with existing primary pump system",
        "Alarm and notification system setup",
        "Complete system testing under various conditions",
        "Maintenance guidelines and battery care instructions"
      ]
    },
    faqs: [
      {
        question: "How long will a battery backup run during a power outage?",
        answer: "Standard systems provide 24-48 hours of protection depending on water volume and cycling frequency. Premium systems can provide 72+ hours of operation. Water-powered systems run indefinitely as long as municipal water pressure is maintained."
      },
      {
        question: "What maintenance do backup batteries require?",
        answer: "Standard lead-acid batteries need regular water level checks and terminal cleaning. Maintenance-free AGM batteries require only periodic testing and terminal inspection. We recommend annual professional testing of all backup systems."
      },
      {
        question: "Can a backup system be added to any existing sump pump?",
        answer: "In most cases, yes. We can add backup systems to most existing sump pump installations, though some configurations may require modifications to the pit or discharge setup."
      },
      {
        question: "Are battery backup systems worth the investment?",
        answer: "Absolutely. Given Bergen County's frequent storm-related power outages, a backup system is one of the most important investments you can make to protect your basement from flooding. The cost is minimal compared to potential water damage."
      }
    ]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};