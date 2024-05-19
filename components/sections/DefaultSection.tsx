import { PageSectionsSection } from '@/tina/__generated__/types';
import Blocks from '../blocks/Blocks';

export const DefaultSection = (props: { content: PageSectionsSection }) => {
    return (
        <section className="w-full flex">
            <aside className="flex-1"></aside>
            <article className="flex flex-col max-w-4xl grow w-full gap-5">
                <Blocks content={props.content} />
            </article>
            <aside className="flex-1"></aside>
        </section>
    );
};
