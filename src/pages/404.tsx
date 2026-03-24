import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function NotFound(): JSX.Element {
  return (
    <Layout title="Page Not Found">
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          gap: '1rem',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <Heading as="h1" style={{ fontSize: '4rem', margin: 0 }}>
          404
        </Heading>
        <Heading as="h2">You rolled a natural 1.</Heading>
        <p>This page has vanished into the Astral Plane. It may never have existed, or a beholder ate it.</p>
        <Link className="button button--primary button--lg" to="/">
          Return to Safety
        </Link>
      </main>
    </Layout>
  );
}
