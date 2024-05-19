// import Nav from "./Nav";
import Link from 'next/link';
import Head from 'next/head';
import { Layout } from './Layout';
import { Blocks } from './blocks';
import { useTina, tinaField } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { Exact, Page, PageQuery } from '@/tina/__generated__/types';
import Sections from './sections/Sections';

export default function PageComponent(props: StaticProps) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });
    const page = data.page;

    return (
        <Layout navItems={props.navItems} footerProps={props.footerProps} navbarProps={props.navbarProps}>
            {/* <div data-tina-field={tinaField(data.page, "body")}>
  return (
    <Layout
      navItems={props.navItems}
      footerProps={props.footerProps}
      navbarProps={props.navbarProps}
    >
      {/* <div data-tina-field={tinaField(data.page, "body")}>
        <TinaMarkdown content={content} components={{ HTMLEmbed }} />
      </div> */}
            {/* <Blocks data={data.page as Page}></Blocks> */}
            <Sections content={data.page as Page}></Sections>
        </Layout>
    );
}
