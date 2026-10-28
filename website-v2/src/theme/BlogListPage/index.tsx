import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {PageMetadata, HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import {Container, PageIntro, Section} from '../../components/ui';
import styles from './list.module.css';

type Props = {metadata: any; items: Array<{content: any}>; sidebar: any};

function Metadata({metadata}: {metadata: any}) {
  const {siteConfig: {title: siteTitle}} = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const title = permalink === '/' ? siteTitle : blogTitle;
  return <><PageMetadata title={title} description={blogDescription} /><SearchMetadata tag="blog_posts_list" /></>;
}

export default function BlogListPage(props: Props) {
  const {metadata, items} = props;
  const isFirstPage = metadata.page === 1;
  return <HtmlClassNameProvider className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogListPage)}>
    <Metadata metadata={metadata} />
    <BlogListPageStructuredData {...(props as any)} />
    <Layout>
      <PageIntro eyebrow="Blog" title={metadata.blogTitle} lead={metadata.blogDescription} actions={<div className={styles.links}><Link to="/blog/tags/release/">Releases</Link><Link to="/blog/tags/tutorial/">Tutorials</Link><Link to="/blog/tags/community/">Community</Link><a href="/blog/rss.xml">RSS feed</a></div>} />
      <Section tone="light" className={styles.list}>
        <Container>
          <BlogPostItems items={items} featuredFirst={isFirstPage} />
          <div className={styles.paginator}><BlogListPaginator metadata={metadata} /></div>
        </Container>
      </Section>
    </Layout>
  </HtmlClassNameProvider>;
}
