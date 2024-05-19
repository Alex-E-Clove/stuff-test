import { PageSectionsSectionBlocksTitle } from '@/tina/__generated__/types';
import { tinaField } from 'tinacms/dist/react';
import { useRouter } from 'next/router';

const Title = (props: { content: PageSectionsSectionBlocksTitle }) => {
    const { content } = props;
    const locale = useRouter().locale as 'sv' | 'en';
    const markdownContent = locale === 'en' ? content?.text_en : content?.text;
    const fieldKey = locale === 'en' ? 'text_en' : 'text';
    return (
        <h1 className="border-b-4 border-stuff-green pb-4 pl-8 text-4xl" data-tina-field={tinaField(content, fieldKey)}>
            {markdownContent ?? 'Edit me!'}
        </h1>
    );
};

export default Title;
