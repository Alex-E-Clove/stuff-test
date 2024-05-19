import { Template } from "tinacms";

const homeBlock: Template = {
  name: "home",
  label: "Home",
  fields: [
    {
      label: "Image title",
      name: "imageTitle",
      type: "string",
    },
    {
      label: "Paragraph title",
      name: "paragraphTitle",
      type: "string",
    },
    {
      label: "Paragraph",
      name: "text",
      type: "string",
    },
    {
      label: "Button",
      name: "buttonText",
      type: "string",
    },
    {
      label: "Line",
      name: "greenLine",
      type: "string",
    },
  ],
};

export default homeBlock;
