import { tinaField } from 'tinacms/dist/react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Card from '../Card';

const Home = (props: { data: any }) => {
    const locale: string = 'se';
    return (
        <div className="w-screen flex flex-col justify-center align-middle items-center">
            <div className="flex w-full flex-col justify-center align-middle items-center">
                <div className="text-3xl z-10 text-white backdrop-blur-sm absolute" data-tina-field={tinaField(props.data, 'imageTitle')}>
                    {props.data.imageTitle}
                </div>
                <div className="bg-green-700 w-full h-56 hidden md:block"></div>
                {/* <img alt="background" src="/uploads/stuff-background.png" className="hidden md:block"></img> */}
                <div className="bg-green-700 w-full h-56 block md:hidden"></div>
            </div>
            <div className="grid home-grid relative	">
                <img src="/uploads/left-leaves.svg" className="hidden lg:block row-span-1 self-auto " />
                <div className="flex flex-col items-center row-span-1">
                    <div className="border-y-green-700 h-14 w-full border-b-2 m-4 mx-4">
                        <h2 className=" text-black flex self-start px-7 mb-0" data-tina-field={tinaField(props.data, 'paragraphTitle')}>
                            {props.data.paragraphTitle}
                        </h2>
                    </div>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <p
                                    className={`m-4 ${open ? '' : 'h-28'} w-4/5	overflow-hidden md:overflow-hidden`}
                                    data-tina-field={tinaField(props.data, 'text')}
                                >
                                    {props.data.text}
                                </p>
                                <Disclosure.Button className="flex items-center mt-2">
                                    <span>{locale === 'en' ? 'Read more' : 'Läs mer'}</span>
                                    <ChevronDownIcon className={`h-5 w-5 transition-transform ${open ? '-rotate-180 transform' : ''}`} aria-hidden="true" />
                                </Disclosure.Button>
                            </>
                        )}
                    </Disclosure>
                    <button
                        data-tina-field={tinaField(props.data, 'buttonText')}
                        type="button"
                        className="rounded-full w-56 h-20 mt-24 bg-green-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                        {props.data.buttonText}
                    </button>
                    <div className="flex flex-col items-center w-full">
                        <div className="border-y-green-700 h-14 w-full border-b-2 m-4 mx-4">
                            <h2 className=" text-black flex self-start px-7 mb-0" data-tina-field={tinaField(props.data, 'paragraphTitle')}>
                                {props.data.paragraphTitle}
                            </h2>
                        </div>
                        <div className=" flex flex-wrap justify-center w-full gap-y-5 gap-x-3	">
                            <Card hasImage={true}></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card hasImage={true}></Card>
                        </div>
                        <button
                            data-tina-field={tinaField(props.data, 'buttonText')}
                            type="button"
                            className="rounded-full w-56 h-20 m-24 bg-green-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        >
                            {props.data.buttonText}
                        </button>
                    </div>
                </div>
                <img src="uploads/did-you-know.svg" className="self-center hidden lg:block row-span-1"></img>
            </div>
        </div>
    );
};
