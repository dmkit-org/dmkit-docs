import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/architecture/overview">
            Read the Docs
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/docs/user-guides/getting-started">
            Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: 'Campaign Planning',
    description: 'Build and manage campaigns with worlds, locations, areas, quests, factions, and session notes — all in one place.',
  },
  {
    title: 'Interactive Battle Maps',
    description: 'Run encounters on a grid-based battle map. Place tokens from your entity library, track HP and conditions in real time.',
  },
  {
    title: 'AI World Generation',
    description: 'Generate world map images from a text prompt via Amazon Bedrock and use them as the canvas background for your worlds.',
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout description="D&D campaign management tool for Dungeon Masters">
      <Hero />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, description }) => (
                <div key={title} className={clsx('col col--4')}>
                  <div className="text--center padding-horiz--md padding-vert--lg">
                    <Heading as="h3">{title}</Heading>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
