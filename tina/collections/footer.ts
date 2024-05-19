import { Collection } from "tinacms";

const footer: Collection = {
  label: "Sidfot",
  name: "footer",
  path: "content/footer",
  format: "json",
  fields: [
    {
      name: "logo",
      label: "Logga",
      type: "image",
    },
    {
      name: "columns",
      label: "Kolumner",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.header };
        },
      },
      fields: [
          {
            name: "header_sv",
            label: "Rubrik",
            type: "string",
          },
          {
            name: "header_en",
            label: "Rubrik engelska",
            type: "string",
          },
          {
            name: "rows",
            label: "Rader",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.text };
              },
            },
            fields: [
              {
                name: "href",
                label: "Länk",
                type: "string",
                required: false,
              },
              {
                name: "text_sv",
                label: "Länktext",
                type: "string",
              },
              {
                name: "text_en",
                label: "Länktext engelska",
                type: "string",
              },
              {
                name: "isHeader",
                label: "Är underrubrik",
                type: "boolean",
              },
            ],
          },
      ],
    },
  ],
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    global: true,
    router: () => "/"
  },
};

export default footer;
