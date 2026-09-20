import type { HaloTheme, Niche } from "@/lib/axiom/types";

/**
 * THIS IS THE ONLY FILE YOU EDIT TO MAKE A CLIENT SHOP.
 */
export const BUSINESS: {
  active: boolean;
  id: string;
  name: string;
  niche: Niche;
  tagline: string;
  about: string;
  halo: HaloTheme;
  pin: string;
  locationName: string;
  locationNote: string;
  heroImage: string | null;
  team: { name: string; role: string; bio: string }[];
  offerings: {
    member: number;
    title: string;
    description: string;
    minutes: number;
    cents: number;
    kind: "service" | "menu";
  }[];
  posts: string[];
} = {
  active: true,
  id: "pap-loco",
  name: "Pap Loco",
  niche: "food_truck",
  tagline: "Book through the night.",
  about: "The owner fills the rest in Desk.",
  halo: "solstice",
  pin: "4242",
  locationName: "",
  locationNote: "",
  heroImage: null,
  team: [
    { name: "Chair 1", role: "Artist", bio: "Owner replaces this in Desk." },
    { name: "Chair 2", role: "Artist", bio: "Owner replaces this in Desk." },
  ],
  offerings: [],
  posts: [],
};
