import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "location", "year", "order"],
    listSearchableFields: ["title", "location"],
  },
  access: { read: () => true },
  defaultSort: "order",
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        description:
          "URL-safe id (e.g. saujana, subang, klang). Stays the same across locales.",
      },
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: {
        description: "Display order in the grid. Lower numbers come first.",
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Design & Build", value: "design-build" },
        { label: "Renovation", value: "renovation" },
        { label: "Interior", value: "interior" },
      ],
    },
    {
      name: "showZoomIcon",
      type: "checkbox",
      defaultValue: false,
      admin: { description: "Show the corner zoom icon on the card." },
    },

    // ------------- Card + modal header copy -------------
    {
      type: "row",
      fields: [
        { name: "title", type: "text", required: true, localized: true },
        { name: "eyebrow", type: "text", required: true, localized: true },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "location", type: "text", required: true, localized: true },
        { name: "year", type: "text", required: true },
      ],
    },
    {
      name: "priceLine",
      type: "text",
      required: true,
      localized: true,
      admin: { description: "Subtitle on the card (e.g. 'BINA MAX · 2,000 sqft · from RM430,000')." },
    },
    {
      name: "lead",
      type: "textarea",
      required: true,
      localized: true,
      admin: { description: "Modal hero subtitle paragraph." },
    },

    // ------------- Modal — design intent -------------
    {
      name: "intent",
      type: "textarea",
      required: true,
      localized: true,
      admin: { description: "Long-form 'Design intent' copy. Blank lines split into paragraphs." },
    },

    // ------------- Media -------------
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: { description: "Card thumbnail + modal hero image." },
    },
    {
      name: "planImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "planCaption",
      type: "text",
      required: true,
      localized: true,
    },

    // ------------- Specs (key/value) -------------
    {
      name: "specs",
      type: "array",
      required: true,
      minRows: 1,
      labels: { singular: "Spec", plural: "Specs" },
      fields: [
        { name: "k", type: "text", required: true, localized: true, admin: { width: "40%" } },
        { name: "v", type: "text", required: true, localized: true, admin: { width: "60%" } },
      ],
    },

    // ------------- Materials -------------
    {
      name: "materials",
      type: "array",
      required: true,
      minRows: 1,
      labels: { singular: "Material", plural: "Materials" },
      fields: [{ name: "label", type: "text", required: true, localized: true }],
    },

    // ------------- Gallery -------------
    {
      name: "gallery",
      type: "array",
      labels: { singular: "Gallery image", plural: "Gallery" },
      fields: [
        { name: "image", type: "upload", relationTo: "media", required: true },
        { name: "caption", type: "text", required: true, localized: true },
      ],
    },

    // ------------- Highlights -------------
    {
      name: "highlights",
      type: "array",
      minRows: 1,
      labels: { singular: "Highlight", plural: "Highlights" },
      fields: [
        { name: "n", type: "text", required: true, admin: { width: "20%", description: "Number, e.g. 01" } },
        { name: "t", type: "text", required: true, localized: true, admin: { width: "30%" } },
        { name: "d", type: "textarea", required: true, localized: true, admin: { width: "50%" } },
      ],
    },
  ],
};
