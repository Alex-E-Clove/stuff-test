import { Collection } from "tinacms";

const staff: Collection = {
  label: "Staff",
  name: "staff",
  path: "content/staff",
  ui: {
    filename: {
      readonly: true,
      slugify: (values: { name?: string; title?: string }) => {
        return `${
          values?.name?.toLowerCase().replace(/ /g, "-") || "no-name"
        }_${values?.title?.toLowerCase().replace(/ /g, "-") || "no-title"}`;
      },
    },
  },
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
      required: true,
    },
    {
      type: "string",
      label: "Title",
      name: "title",
      required: true,
    },
    {
      type: "string",
      label: "Title english",
      name: "titleEnglish",
      required: true,
    },
    {
      type: "image",
      label: "Photo",
      name: "photo",
    },
    {
      type: "string",
      label: "Responsibilities",
      name: "responsibilities",
    },
    {
      type: "string",
      label: "Responsibilities english",
      name: "responsibilitiesEnglish",
    },
  ],
};

export default staff;
