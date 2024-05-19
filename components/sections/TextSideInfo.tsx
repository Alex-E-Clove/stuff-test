import { tinaField } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { PageSectionsTextSideInfo } from '@/tina/__generated__/types';
import { useRouter } from 'next/router';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import { TeamPerson } from './Team/TeamPerson';
import React from 'react';

export const TextSideInfo = (props: { data: PageSectionsTextSideInfo }) => {
    const router = useRouter();
    const locale = router.locale as 'sv' | 'en';
    const teamArray = props.data.teamList?.filter((person) => person != null) ?? [];

    return (
        <div className="overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl lg:px-8 px-6">
                <div className="grid text-side-info-grid gap-x-8 gap-y-8 lg:items-start">
                    <div style={{ gridColumn: '1/-1' }}>
                        <h2 className="text-base font-semibold leading-7 text-stuff-green" data-tina-field={tinaField(props.data, `category_title_${locale}`)}>
                            {props.data[`category_title_${locale}`]}
                        </h2>
                        <p
                            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                            data-tina-field={tinaField(props.data, `title_${locale}`)}
                        >
                            {props.data[`title_${locale}`]}
                        </p>
                    </div>
                    <div className="tina-markdown-container text-lg leading-8 text-gray-600" data-tina-field={tinaField(props.data, `text_${locale}`)}>
                        <TinaMarkdown content={props.data[`text_${locale}`]} />
                    </div>
                    {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-stuff-green" aria-hidden="true" />
                                        {feature.name}
                                    </dt>{' '}
                                    <dd className="inline">{feature.description}</dd>
                                </div>
                            ))}
                        </dl> */}
                    <div role="list" className="mx-auto">
                        {teamArray.map((staffObject, i) => {
                            if (staffObject != null && staffObject.staff != null) {
                                const { staff } = staffObject;
                                return (
                                    <React.Fragment key={i + (staff.__typename ?? '')}>
                                        <TeamPerson data={staff}></TeamPerson>
                                    </React.Fragment>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextSideInfo;
