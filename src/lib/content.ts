// All text, images and videos on the front page live here.
// Change a value and the site updates — no component changes needed.

// Set to false when final content is in place to hide the "AVVENTER" labels.
export const showPendingLabels = true;

export type Tag = "Kundeoppdrag" | "Eget konsept" | "AI-konsept";

export const site = {
  name: "Motion4Frames",
  email: "", // legg inn e-postadresse her for å vise den i footeren
  instagram: "https://www.instagram.com/motion4frames/",
  instagramHandle: "@motion4frames",
};

export const nav = [
  { label: "Arbeid", href: "/#arbeid" },
  { label: "Tjenester", href: "/#tjenester" },
  { label: "Kontakt", href: "/#kontakt" },
];

// Rød knapp øverst til høyre
export const headerCta = { label: "Kontakt", href: "/#kontakt" };

export const hero = {
  title: "Vi markedsfører biler",
  subtitle:
    "Foto, film og visuelle konsepter for bilbedrifter, bilutleie og biler som skal selges.",
  videoDesktop: "/media/video/hero-desktop.mp4",
  videoMobile: "/media/video/hero-mobile.mp4",
  posterDesktop: "/media/img/hero-desktop-poster.jpg",
  posterMobile: "/media/img/hero-mobile-poster.jpg",
  primary: { label: "Se hva vi har laget", href: "#arbeid" },
  secondary: { label: "Kontakt", href: "#kontakt" },
};

export const intro = {
  label: "Motion4Frames",
  title: "Gi bilen et førsteinntrykk som vekker interesse",
  text: "Vi forvandler dine eksisterende bilder til profesjonelle bilbilder for FINN. Gjennom nøye tilpassede farger, lys, kamerauttrykk og detaljfokus fremhever vi bilens kvaliteter. Du velger omgivelsene, vi bevarer bilens ekte detaljer og gir annonsen et uttrykk som fanger blikket.",
};

export const featuredCase = {
  label: "Utvalgt prosjekt",
  tag: "Kundeoppdrag" as Tag,
  client: "Prime Norge",
  title: "Prime × Motion Limited",
  car: "Ferrari 458 Italia",
  description:
    "Kampanjefilm og stillbilder av en Ferrari 458 Italia for Prime Norge, filmet på en høstvei for å gi bilen en filmatisk og eksklusiv ramme.",
  deliverables: ["Kampanjefilm", "Stillbilder", "Sosiale medier"],
  video: "/media/video/prime-ferrari.mp4",
  poster: "/media/img/hero-mobile-poster.jpg",
  results: [
    { src: "/media/img/case-ferrari-1.jpg", alt: "Ferrari 458 Italia på snødekt vei i fjellet" },
    { src: "/media/img/case-ferrari-2.jpg", alt: "Ferrari 458 Italia i snøvær om kvelden" },
    { src: "/media/img/case-ferrari-3.jpg", alt: "Ferrari 458 Italia i snøen" },
    { src: "/media/img/case-ferrari-4.jpg", alt: "Ferrari 458 Italia på vinterveg i skumringen" },
  ],
};

export const manyLooks = {
  label: "Én bil. Flere uttrykk.",
  title: "Den samme bilen kan oppleves forskjellig",
  text: "Gjennom lys, farger, miljø og komposisjon utvikler vi uttrykket etter merkevaren, målgruppen og hvor innholdet skal brukes.",
  // Legg bilder i public/media/uttrykk/<folder>. Alle bilder i mappen vises, sortert etter filnavn.
  // Bildet som heter "forside.jpg" blir forsidebildet til galleriet.
  galleries: [
    { name: "Audi", folder: "audi", tag: "AI-konsept" as Tag },
    { name: "Ferrari", folder: "ferrari", tag: "AI-konsept" as Tag },
  ],
};

export const rental = {
  label: "Bilutleie",
  tag: "Kundeoppdrag" as Tag,
  client: "Bilfleks Bilutleie",
  title: "M4F × Bilfleks",
  text: "Video og bildeinnhold for Bilfleks som viser bilflåten i ekte omgivelser – fra Porsche Taycan til Mercedes – til bruk i sosiale medier og markedsføring.",
  deliverables: ["Reels", "Stories", "Bilder av flåten"],
  video: "/media/video/bilfleks-reel.mp4",
  poster: "/media/img/bilfleks-reel-poster.jpg",
  gallery: [
    { src: "/media/img/bilfleks-03.jpg", alt: "Porsche Taycan fra Bilfleks" },
    { src: "/media/img/bilfleks-07.jpg", alt: "Mercedes fra Bilfleks" },
    { src: "/media/img/bilfleks-08.jpg", alt: "Bilfleks-flagg ved Porsche Taycan" },
    { src: "/media/img/bilfleks-12.jpg", alt: "Bil fra Bilfleks i bymiljø" },
  ],
  quote: null as null | { text: string; name: string }, // kun ekte, godkjente sitater
};

export const stillToVideo = {
  label: "Fra bilbilder til levende innhold",
  title: "Fra bilbilder til levende innhold",
  text: "Eksisterende bilmateriale kan bearbeides, kombineres med ekte opptak eller brukes som utgangspunkt for nytt innhold.",
  steps: [
    "Eksisterende bilder eller opptak",
    "Kreativ utvikling og etterarbeid",
    "Ferdig innhold til nettside, annonser og sosiale medier",
  ],
  video: "/media/video/still-to-video.mp4",
  poster: "/media/img/still-to-video-poster.jpg",
};

export const services = {
  label: "Tjenester",
  title: "Hva vi leverer",
  items: [
    "Bilfoto",
    "Reklamefilm og korte videoer",
    "Sosiale medier og kampanjeinnhold",
    "Kreativ retning, redigering og fargearbeid",
    "AI-assisterte konsepter",
    "FINN-presentasjon",
  ],
};

// Brukes på /finn-siden
export const finnTeaser = {
  title: "Skal du selge bil på FINN?",
  text: "Vi hjelper private selgere og bilforhandlere med lys, bakgrunn, farger og et mer helhetlig visuelt uttrykk. Bilen skal fortsatt vises slik den faktisk er.",
  cta: { label: "Utforsk FINN-løsningen", href: "/finn" },
  image: "/media/img/finn-audi.jpg",
};

export const contact = {
  label: "Kontakt",
  title: "La oss presentere bilen eller bilmerkevaren bedre",
  text: "Fortell kort hva du trenger, så tar vi kontakt. Skal du selge bil på FINN, bruk heller skjemaet på FINN-siden.",
  needs: ["Foto", "Film", "Sosiale medier", "Kampanje", "Bilutleie", "FINN", "Annet"],
};

export const footer = {
  tagline: "Visuell markedsføring for biler og bilbedrifter",
  links: [
    { label: "Arbeid", href: "/#arbeid" },
    { label: "Tjenester", href: "/#tjenester" },
    { label: "Kontakt", href: "/#kontakt" },
  ],
};
