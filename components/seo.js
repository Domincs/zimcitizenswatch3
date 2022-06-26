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
      content='african citizens watch, policy tracker, zambia policy tracker, malawi policy tracker, zimbabwe policy tracker'
    />
    <meta name='author' content='Dominic Chingoma' />
    <meta name='image' content={image} />
    <meta name='og:title' content={`AfricanCitizensWatch: ${title}`} />
    <meta name='og:description' content={description} />
    <meta name='og:image' content={image} />
    <meta name='og:url' content='https://africancitizenswatch.org' />
    <meta name='og:site_name' content={`AfricanCitizensWatch: ${title}`} />
    <meta name='og:type' content='website' />
    <meta name='twitter:card' content='summary' />
    <meta name='twitter:title' content={`AfricanCitizensWatch: ${title}`} />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image' content={image} />
    <meta name='twitter:site' content='@sivioinstitute' />
    <meta name='twitter:creator' content='@sivioinstitute' />
    <title>SIVIO Institute: {title}</title>
  </Head>
);
