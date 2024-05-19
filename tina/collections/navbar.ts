import { Collection } from 'tinacms';

const navbar: Collection = {
    label: 'Meny',
    name: 'navbar',
    path: 'content/navbar',
    format: 'json',
    fields: [
        {
            name: 'logo',
            label: 'Logga',
            type: 'image',
        },
    ],
    ui: {
        global: true,
        router: () => '/',
    },
};

export default navbar;
