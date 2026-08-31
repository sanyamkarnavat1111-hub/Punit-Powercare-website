export const SITE = {
  name: "Punit Powercare",
  tagline: "Switch to Success with Punit Powercare",
  phone: "+919579853838",
  phoneDisplay: "+91 95798 53838",
  email: "punitpowercare@gmail.com",
  contact: "Ganesh Yeole",
  office:
    "Flat No. 11, Geetganga Society, Saptashrungi Nagar, Old Saykheda Road, Jail Road, Nashik – 422101",
  workshop: "MIDC Ambad, Nashik, Maharashtra – 422110",
} as const;

export const WORLD_CLIPS = [
  {
    id: "approach",
    label: "The Yard",
    still: "/assets/world/approach.jpg",
    clip: "/assets/vid/approach.mp4",
    linger: 0.38,
  },
  {
    id: "assembly",
    label: "The Line",
    still: "/assets/world/assembly.jpg",
    clip: "/assets/vid/assembly.mp4",
    linger: 0.32,
  },
  {
    id: "interior",
    label: "Inside",
    still: "/assets/world/interior.jpg",
    clip: "/assets/vid/interior.mp4",
    linger: 0.48,
  },
  {
    id: "live",
    label: "Unity",
    still: "/assets/world/live.jpg",
    clip: "/assets/vid/live.mp4",
    linger: 0.4,
  },
] as const;

export const GALLERY = [
  {
    src: "/assets/gallery/cabinet.jpg",
    alt: "Closed Thyristorised APFC cabinet in the Nashik workshop",
  },
  {
    src: "/assets/gallery/open-panel.jpg",
    alt: "Open APFC panel showing capacitor bank and copper busbars",
  },
  {
    src: "/assets/gallery/thyristor.jpg",
    alt: "Thyristor SCR switching modules with heat sinks",
  },
  {
    src: "/assets/gallery/meters.jpg",
    alt: "Live APFC panel door with mint LCD meters and status lamps",
  },
] as const;

export const SERVICES = [
  {
    title: "Contactor-based APFC panels",
    body: "Manufactured in-house, built for reliable step-switching.",
  },
  {
    title: "Thyristor-based APFC panels",
    body: "Our specialty — precise, sparkless, maintenance-free switching.",
  },
  {
    title: "LT Panels — PCC, MCC, PDB, PLC",
    body: "Plus fire panels and temperature control panels, made to spec.",
  },
  {
    title: "Voltage stabilizers",
    body: "Servo and relay-based, normal and odd range, supplied and installed.",
  },
  {
    title: "UPS supply",
    body: "Sized and supplied for your facility's backup power needs.",
  },
  {
    title: "ACB & VCB servicing",
    body: "Handled by an expert, well-trained field team.",
  },
  {
    title: "AMC — APFC & LT panels",
    body: "Comprehensive and non-comprehensive annual maintenance contracts.",
  },
  {
    title: "Panel material supply",
    body: "A single source for the electrical panel components you need.",
  },
  {
    title: "RKVAH, AHF & ASVG",
    body: "Leading RKVAH solutions plus active harmonic filter and ASVG supply.",
  },
] as const;

export const INDUSTRIES = [
  "Rolling Mills",
  "Furnace Loads",
  "Cement Plants",
  "Steel Plants",
  "Automobile Industry",
  "Any Industrial Unit",
  "Commercial Complexes",
  "Rice Mills",
  "Stone Crushers",
  "Hospitals",
  "Restaurants",
  "Hotels",
] as const;

export const CLIENTS = [
  "Croma",
  "Datar",
  "RIM Group",
  "SB Polygreen",
  "Agromark",
  "MediLiv Hospital",
  "Liebherr",
  "Jakson",
  "Ashoka",
  "Medicover Hospitals",
] as const;

export const FAQS = [
  {
    q: "What is an APFC panel and how does it work?",
    a: "An Automatic Power Factor Correction (APFC) panel monitors your facility's power factor in real time and automatically switches capacitor banks in or out to keep it as close to unity (1.0) as possible. It continuously measures reactive power demand and compensates by injecting leading VAR, reducing the phase angle between voltage and current. This eliminates reactive power penalties on your electricity bill and reduces overall current draw on your distribution network.",
  },
  {
    q: "What is power factor, and why does it affect my electricity bill?",
    a: "Power factor is the ratio of active (working) power in KW to total apparent power in KVA. A power factor below 0.90 means you are drawing more current than needed for the same useful load — forcing your utility to supply reactive power it cannot bill directly. So they impose a power factor penalty or surcharge on your monthly bill. Improving power factor removes these penalties and can reduce your maximum demand charges.",
  },
  {
    q: "What is the difference between a thyristor-based and a contactor-based APFC panel?",
    a: "A contactor-based APFC panel uses electromechanical contactors to switch capacitor steps — moving parts that wear out and generate inrush current spikes, chattering, and sparking. A Thyristorised APFC panel uses solid-state thyristors (SCRs) that switch at the precise zero-crossing point of the AC waveform — zero inrush current, no surge, no chattering, no sparking, and no moving parts. The result is a genuinely maintenance-free panel that protects capacitors, transformers, and downstream equipment far better.",
  },
  {
    q: "How much does an APFC panel cost in India?",
    a: "The cost of a power factor correction panel in India varies with KVAR rating, technology (contactor-based vs. Thyristorised), number of steps, and load profile. Contactor-based panels are less expensive upfront; Thyristorised panels carry a premium that is quickly recovered through lower maintenance costs and better equipment protection. Contact Punit Powercare with your load details for an accurate, obligation-free quotation.",
  },
  {
    q: "How long does it take for an APFC panel to pay for itself?",
    a: "For most industrial and commercial facilities in Maharashtra, a well-sized APFC panel pays for itself within 3 to 15 months, depending on your current power factor, monthly electricity bill, tariff structure, and load profile. Facilities with large reactive loads — rolling mills, induction furnaces, spinning mills — often see payback at the shorter end of that range.",
  },
  {
    q: "What KVAR rating or panel size does my facility need?",
    a: "The required KVAR rating depends on your current power factor, target power factor (typically 0.95–0.99), and connected KVA demand. The standard formula is: Required KVAR = KW × (tan φ1 − tan φ2). Punit Powercare will conduct a site assessment, review your electricity bills, and recommend the correct KVAR rating and number of steps for your specific load.",
  },
  {
    q: "Can a Thyristorised APFC panel help avoid power factor penalties?",
    a: "Yes. A Thyristorised APFC panel automatically maintains your power factor close to unity (0.99) at all times, eliminating reactive power penalty charges that MSEDCL and other state utilities levy when PF falls below 0.90 or 0.95. Unlike fixed capacitor banks, which can over-compensate at light loads and push PF into the leading zone, a Thyristorised APFC panel adjusts step-by-step to match your actual load.",
  },
  {
    q: "What industries benefit most from power factor correction panels?",
    a: "Any industry with significant inductive loads benefits. Rolling mills, steel plants, cement plants, induction furnace loads, spinning mills, automobile manufacturers, stone crushers, rice mills, hospitals, hotels, and large commercial complexes all typically see meaningful savings. Essentially, any facility running motors, transformers, furnaces, or variable-speed drives is a strong candidate.",
  },
  {
    q: "Does Punit Powercare provide installation and AMC services?",
    a: "Yes. Punit Powercare offers both comprehensive and non-comprehensive Annual Maintenance Contracts (AMC) for APFC panels and LT panels. Our field service team handles installation, commissioning, and ongoing maintenance. We also offer 24×7 emergency service backup — a qualified technician can be dispatched at any time, including weekends and public holidays.",
  },
  {
    q: "What is the difference between fixed capacitor banks and automatic power factor correction?",
    a: "Fixed capacitor banks supply a constant amount of reactive power regardless of actual load. When load drops, a fixed bank can over-compensate and push power factor into the leading range, causing its own penalty. An APFC panel continuously monitors load and switches capacitor steps in and out automatically, keeping power factor in the optimal range under all conditions — without over- or under-compensation.",
  },
  {
    q: "Where is Punit Powercare located, and which areas do you service?",
    a: "Punit Powercare's registered office is in Nashik (Saptashrungi Nagar, Nashik – 422101) and our workshop is in MIDC Ambad, Nashik – 422110. We primarily serve clients across Maharashtra, with a strong presence in Nashik and the surrounding industrial belt. Contact us at +91 95798 53838 or punitpowercare@gmail.com.",
  },
  {
    q: "Do you provide 24×7 emergency service support?",
    a: "Yes. Punit Powercare provides 24×7, seven-days-a-week service backup. Whether your panel has tripped in the middle of the night or you need urgent commissioning support, our team is available to respond. This round-the-clock support applies during the warranty period and under AMC agreements.",
  },
] as const;
