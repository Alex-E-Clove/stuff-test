import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

export const runtime = 'edge'; // 'nodejs' (default) | 'edge'

export const Layout = (props: { navItems: NavItem[]; children: ReactNode; footerProps: FooterProps; navbarProps: NavbarProps }) => {
    const { navItems } = props;
    return (
        <>
            <Head>
                <title>Tina App</title>
                <meta name="description" content="Stuff" />
                <link rel="icon" href="/stuff-favicon.png" />
            </Head>
            <div className="min-h-dvh">
                <Navbar navItems={navItems} tinaProps={props.navbarProps}></Navbar>

                <main className="w-full ">{props.children}</main>
            </div>
            <Footer data={props.footerProps.data} query={props.footerProps.query} variables={props.footerProps.variables} />
        </>
    );
};
