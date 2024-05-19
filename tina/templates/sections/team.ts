import { Template } from "tinacms";

const teamBlock: Template = {
  name: "team",
  label: "Team",
  fields: [
    {
      label: "Team title",
      name: "teamTitle",
      type: "string",
    },
    {
      label: "Team title english",
      name: "teamTitleEnglish",
      type: "string",
    },
    {
      label: "Team description",
      name: "teamDescription",
      type: "string",
    },
    {
      label: "Team description english",
      name: "teamDescriptionEnglish",
      type: "string",
    },
    {
      type: "object",
      label: "Team list",
      name: "teamList",
      list: true,
      ui: {
        itemProps: (item: { staff?: string }) => {
          // Field values are accessed by item?.<Field name>
          if (item?.staff) {
            return {
              label: item?.staff
                .substring(item?.staff.lastIndexOf("/") + 1)
                .replace(".md", ""),
            };
          }
          return {};
        },
      },
      fields: [
        {
          label: "Staff",
          name: "staff",
          type: "reference",
          collections: ["staff"],
        },
      ],
    },
  ],
};

export default teamBlock;
