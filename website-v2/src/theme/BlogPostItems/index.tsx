import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {BlogPostProvider, useBlogPost} from '@docusaurus/plugin-content-blog/client';
import styles from './blog.module.css';

/** Card for one post in list views (blog index, tag pages). */
function BlogCard({featured = false}: {featured?: boolean}) {
  const {metadata, frontMatter} = useBlogPost();
  const {title, permalink, date, readingTime, authors, description, tags} = metadata;
  const cover = (frontMatter as {image?: string}).image;
  const formatted = new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'});
  return <article className={clsx(styles.card, featured && styles.featured)}>
    <Link to={permalink} className={styles.cover} aria-hidden="true" tabIndex={-1}>
      {cover ? <img src={cover} alt="" loading={featured ? 'eager' : 'lazy'} decoding="async" /> : <span className={styles.coverFallback} />}
    </Link>
    <div className={styles.body}>
      <div className={styles.meta}>
        {tags.length > 0 && <Link to={tags[0].permalink} className={styles.tag}>{tags[0].label}</Link>}
        <time dateTime={date}>{formatted}</time>
        {typeof readingTime === 'number' && <span>{Math.ceil(readingTime)} min read</span>}
      </div>
      <h2 className={styles.title}><Link to={permalink}>{title}</Link></h2>
      {description && <p className={styles.excerpt}>{description}</p>}
      <div className={styles.authors}>
        {authors.map(author => <span key={author.name} className={styles.author}>
          {author.imageURL && <img src={author.imageURL} alt="" width="28" height="28" loading="lazy" />}
          <span>{author.name}</span>
        </span>)}
      </div>
    </div>
  </article>;
}

export default function BlogPostItems({items, featuredFirst = false}: {items: Array<{content: any}>; featuredFirst?: boolean; component?: unknown}) {
  return <div className={styles.grid}>
    {items.map(({content: BlogPostContent}, index) => (
      <BlogPostProvider key={BlogPostContent.metadata.permalink} content={BlogPostContent}>
        <BlogCard featured={featuredFirst && index === 0} />
      </BlogPostProvider>
    ))}
  </div>;
}
