import { useRouter } from 'next/router';
import React from 'react';
import { tinaField } from 'tinacms/dist/react';
import { TeamPerson } from './TeamPerson';
import { PageSectionsTeam, Staff } from '@/tina/__generated__/types';

export const Team = (props: { data: PageSectionsTeam }) => {
    const teamArray = props.data.teamList?.filter((person) => person != null) ?? [];
    const { locale } = useRouter();

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2
                        data-tina-field={tinaField(props.data, locale === 'en' ? 'teamTitleEnglish' : 'teamTitle')}
                        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    >
                        {locale === 'en' ? props.data.teamTitleEnglish : props.data.teamTitle}
                    </h2>
                    <p
                        data-tina-field={tinaField(props.data, locale === 'en' ? 'teamDescriptionEnglish' : 'teamDescription')}
                        className="mt-4 text-lg leading-8 text-gray-600"
                    >
                        {locale === 'en' ? props.data.teamDescriptionEnglish : props.data.teamDescription}
                    </p>
                </div>
                <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                </ul>
            </div>
        </div>
    );
};
