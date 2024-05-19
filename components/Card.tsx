import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { tinaField } from 'tinacms/dist/react';

export default function Card(props) {
    const locale: 'sv' | 'en' = 'sv';
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <div className="flex flex-col items-center w-5/12 h-min	border-4 shadow-2xl border-gray-400 rounded-3xl">
                        {props.hasImage ? <div className="h-36 w-full rounded-3xl	bg-orange-700"></div> : ''}
                        <h3 className="my-3.5 px-7 self-start font-bold	text-xl">Rubrik</h3>
                        <p
                            className={` ${open ? '' : 'h-28'} rounded overflow-hidden md:overflow-hidden border-green-700 px-6`}
                            data-tina-field={tinaField(props.data, 'text')}
                        ></p>
                        <Disclosure.Button className="flex items-center mt-2">
                            <span>{'Läs mer'}</span>
                            <ChevronDownIcon className={`h-5 w-5 transition-transform ${open ? '-rotate-180 transform' : ''}`} aria-hidden="true" />
                        </Disclosure.Button>
                    </div>
                </>
            )}
        </Disclosure>
    );
}
