import Head from 'next/head';

export const SEO = ({
  title,
  description = 'SIVIO Institute is a Zimbabwean based independent policy research organisation (Think-Tank).',
  image = 'https://sivioinstitute.org/images/webhero.jpg',
}) => (
  <Head>
    <link rel='icon' href='/favicon.ico' />
    <meta name='description' content={description} />
    <meta
      name='keywords'
      content='sivio institute, think tank, zimbabwe think tanks, citizens, public policy'
    />
    <meta name='author' content='Joseph Mukorivo' />
    <meta name='image' content={image} />
    <meta name='og:title' content={`SIVIO Institute: ${title}`} />
    <meta name='og:description' content={description} />
    <meta name='og:image' content={image} />
    <meta name='og:url' content='https://sivioinstitute.org' />
    <meta name='og:site_name' content={`SIVIO Institute: ${title}`} />
    <meta name='og:type' content='website' />
    <meta name='twitter:card' content='summary' />
    <meta name='twitter:title' content={`SIVIO Institute: ${title}`} />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image' content={image} />
    <meta name='twitter:site' content='@sivioinstitute' />
    <meta name='twitter:creator' content='@sivioinstitute' />
    <title>SIVIO Institute: {title}</title>
  </Head>
);
