
import Head from 'next/head';
import Grid from './components/Grid';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Spreadsheet App</title>
        <meta name="description" content="A spreadsheet-like application built with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-2xl font-bold mb-4">Spreadsheet Application</h1>
        <Grid />
      </main>
    </div>
  );
}
