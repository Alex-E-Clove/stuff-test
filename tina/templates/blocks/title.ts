import { Template } from 'tinacms';

const titleBlock: Template = {
    name: 'title',
    label: 'Rubrik',
    fields: [
        {
            label: 'Rubrikstext',
            name: 'text',
            type: 'string',
        },
        {
            label: 'Rubrikstext engelska',
            name: 'text_en',
            type: 'string',
        },
    ],
    ui: {
        itemProps: (item: { text?: string }) => ({
            label: `Rubrik ${item.text ? `(${item.text})` : ''}`,
        }),
    },
};

export default titleBlock;
