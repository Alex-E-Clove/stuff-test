import { useRouter } from 'next/router';
import { HeartIcon } from '@heroicons/react/20/solid';

function KodvetLove() {
    const { locale } = useRouter();

    return (
        <span className="flex justify-center items-center text-xs opacity-70 gap-1 mt-12">
            {locale === 'en' ? (
                <span className="flex h-3 gap-1 items-center">
                    Made with <HeartIcon style={{ animationDuration: '3s' }} className="animate-pulse text-red-600 h-3"></HeartIcon> by
                </span>
            ) : (
                <span className="flex h-3 gap-1 items-center">
                    Gjord med <HeartIcon style={{ animationDuration: '3s' }} className="animate-pulse text-red-600 h-3"></HeartIcon> av
                </span>
            )}
            <a
                title="Kodvet 23/24: Matilda Zackrisson, Alex Eklöw, Gustaf Norberg, Fredrik Fernlund, Marius Martin, Caroline Estgren, Joachim Örtegren"
                href="https://kodvet.kogvet.se/"
                target="_blank"
                className="h-4"
            >
                <img style={{ filter: 'drop-shadow(0 0 2px #24c6b9)' }} className="hover:animate-spin h-full" src="/kodvet-logo.svg" alt="Kodvet logo" />
            </a>
        </span>
    );
}

export default KodvetLove;
