import downtown from "@/assets/loc-downtown.jpg";
import riverside from "@/assets/loc-riverside.jpg";
import hillcrest from "@/assets/loc-hillcrest.jpg";

export type Service = {
  id: string;
  name: string;
  category: string;
  price: number;
  duration: number;
  description: string;
};

export type Staff = {
  id: string;
  name: string;
  role: string;
  initials: string;
  specialties: string[];
};

export type Hours = { day: string; open: string };

export type Location = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  image: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  mapUrl: string;
  hours: Hours[];
  services: Service[];
  staff: Staff[];
  slots: string[];
};

const svc = (
  id: string,
  name: string,
  category: string,
  price: number,
  duration: number,
  description: string,
): Service => ({ id, name, category, price, duration, description });

export const locations: Location[] = [
  {
    slug: "downtown",
    name: "Downtown Atelier",
    tagline: "Our flagship studio",
    blurb:
      "Twelve stations, a private bridal suite and our full art menu. The place to come when you want the whole Lumi experience.",
    image: downtown,
    address: "218 Marlow Street, Suite 4",
    city: "Los Angeles, CA 90014",
    phone: "+1 (213) 555 0148",
    email: "downtown@lumisugarnails.com",
    mapUrl: "https://maps.google.com/?q=218+Marlow+Street+Los+Angeles",
    hours: [
      { day: "Monday – Tuesday", open: "10:00 – 19:00" },
      { day: "Wednesday – Friday", open: "09:00 – 21:00" },
      { day: "Saturday", open: "09:00 – 20:00" },
      { day: "Sunday", open: "11:00 – 17:00" },
    ],
    services: [
      svc("d1", "Signature Sugar Manicure", "Hands", 48, 45, "Soak, shape, cuticle care and a sugar-scrub finish."),
      svc("d2", "Structured Gel Overlay", "Hands", 72, 75, "Strengthening builder gel shaped to your natural nail."),
      svc("d3", "Luxe Pedicure Ritual", "Feet", 85, 80, "Warm soak, exfoliation, mask and a 15-minute leg massage."),
      svc("d4", "Sculpted Extensions", "Extensions", 110, 120, "Hand-sculpted apex, any length or shape."),
      svc("d5", "Bespoke Nail Art Set", "Art", 95, 90, "Freehand art designed with your artist in the studio."),
      svc("d6", "Chrome & Cat-Eye Finish", "Art", 32, 25, "Add-on mirror chrome, velvet or magnetic finish."),
    ],
    staff: [
      { id: "d-s1", name: "Amara Vance", role: "Studio Director", initials: "AV", specialties: ["Extensions", "Structure"] },
      { id: "d-s2", name: "Priya Raman", role: "Lead Nail Artist", initials: "PR", specialties: ["Freehand art", "Chrome"] },
      { id: "d-s3", name: "Noor Haddad", role: "Senior Technician", initials: "NH", specialties: ["Gel overlay", "Natural nail"] },
      { id: "d-s4", name: "Kaia Lindqvist", role: "Pedicure Specialist", initials: "KL", specialties: ["Pedicure", "Reflexology"] },
    ],
    slots: ["09:30", "10:15", "11:00", "12:30", "14:00", "15:15", "16:45", "18:00", "19:30"],
  },
  {
    slug: "riverside",
    name: "Riverside Lounge",
    tagline: "Warm, unhurried, walk-in friendly",
    blurb:
      "Oak, caramel leather and a wall of colour. Built for quick refreshes on your lunch break and long, slow Sundays alike.",
    image: riverside,
    address: "9 Quay Lane, Riverside Walk",
    city: "Los Angeles, CA 90021",
    phone: "+1 (213) 555 0192",
    email: "riverside@lumisugarnails.com",
    mapUrl: "https://maps.google.com/?q=9+Quay+Lane+Los+Angeles",
    hours: [
      { day: "Monday", open: "Closed" },
      { day: "Tuesday – Friday", open: "10:00 – 20:00" },
      { day: "Saturday", open: "09:00 – 18:30" },
      { day: "Sunday", open: "11:00 – 16:00" },
    ],
    services: [
      svc("r1", "Express Sugar Manicure", "Hands", 34, 30, "File, tidy and polish — in and out in half an hour."),
      svc("r2", "Classic Gel Manicure", "Hands", 55, 55, "Two weeks of high-shine colour with cuticle conditioning."),
      svc("r3", "River Spa Pedicure", "Feet", 68, 65, "Mineral soak, callus care and a hydrating heel mask."),
      svc("r4", "Soft Gel Tips", "Extensions", 88, 95, "Lightweight tips with a natural, wearable finish."),
      svc("r5", "Minimal French Line", "Art", 26, 20, "Micro-French, skinny lines or a single accent."),
      svc("r6", "Paraffin Hand Treatment", "Treatments", 24, 20, "Warm paraffin wrap for very dry hands."),
    ],
    staff: [
      { id: "r-s1", name: "Elif Demir", role: "Salon Manager", initials: "ED", specialties: ["Gel", "French"] },
      { id: "r-s2", name: "Marisol Reyes", role: "Nail Technician", initials: "MR", specialties: ["Express sets", "Pedicure"] },
      { id: "r-s3", name: "June Park", role: "Nail Technician", initials: "JP", specialties: ["Soft gel", "Minimal art"] },
    ],
    slots: ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00"],
  },
  {
    slug: "hillcrest",
    name: "Hillcrest Studio",
    tagline: "Quiet, light-filled, appointment only",
    blurb:
      "A calm two-chair studio for detailed work. Ideal for bridal, wellness treatments and nail health consultations.",
    image: hillcrest,
    address: "44 Beacon Hill Road",
    city: "Los Angeles, CA 90068",
    phone: "+1 (213) 555 0173",
    email: "hillcrest@lumisugarnails.com",
    mapUrl: "https://maps.google.com/?q=44+Beacon+Hill+Road+Los+Angeles",
    hours: [
      { day: "Monday – Wednesday", open: "09:00 – 17:00" },
      { day: "Thursday – Friday", open: "09:00 – 18:30" },
      { day: "Saturday", open: "10:00 – 16:00" },
      { day: "Sunday", open: "Closed" },
    ],
    services: [
      svc("h1", "Nail Health Consultation", "Treatments", 40, 30, "Assessment and a written care plan for damaged nails."),
      svc("h2", "Restorative Manicure", "Hands", 62, 60, "Gentle repair work with strengthening treatment coats."),
      svc("h3", "Bridal Trial & Set", "Bridal", 130, 120, "Design trial plus the full wedding-day application."),
      svc("h4", "Serenity Pedicure", "Feet", 78, 75, "Aromatherapy soak, warm stones and a long massage."),
      svc("h5", "Japanese Buff Finish", "Hands", 45, 40, "Polish-free mirror shine using mineral paste."),
      svc("h6", "Hand Rejuvenation Facial", "Treatments", 58, 45, "Enzyme peel, mask and SPF finish for the hands."),
    ],
    staff: [
      { id: "h-s1", name: "Sena Okafor", role: "Lead Specialist", initials: "SO", specialties: ["Nail health", "Bridal"] },
      { id: "h-s2", name: "Talia Brenner", role: "Spa Therapist", initials: "TB", specialties: ["Pedicure", "Massage"] },
      { id: "h-s3", name: "Yuki Nakamura", role: "Senior Technician", initials: "YN", specialties: ["Japanese buff", "Repair"] },
    ],
    slots: ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);

export const testimonials = [
  {
    quote:
      "The structured overlay Amara gave me lasted five weeks without a single lift. I have never had nails hold up like this.",
    name: "Wendy T.",
    place: "Downtown Atelier",
  },
  {
    quote:
      "Riverside is my lunchtime ritual. Thirty minutes, immaculate work, and nobody rushes you out the door.",
    name: "Grace L.",
    place: "Riverside Lounge",
  },
  {
    quote:
      "Sena rebuilt my nails after years of damage. The consultation alone was worth the trip up the hill.",
    name: "Michelle B.",
    place: "Hillcrest Studio",
  },
];
