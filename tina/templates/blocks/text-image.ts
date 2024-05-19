import { Template } from 'tinacms';

const textImageBlock: Template = {
    name: 'textImage',
    label: 'Bild + text',
    fields: [
        {
            label: 'Image',
            name: 'image',
            type: 'image',
        },
        {
            label: 'Text',
            name: 'content_sv',
            type: 'rich-text',
        },
        {
            label: 'Text english',
            name: 'content_en',
            type: 'rich-text', // XXX a field with the same name must share the type of other fields in other files in the same folder
        },
        {
            name: 'flip',
            label: 'Flippa',
            type: 'boolean',
        },
    ],
};

export default textImageBlock;
