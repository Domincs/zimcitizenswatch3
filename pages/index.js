import { SEO } from '../components/seo';
import { NavbarContainer } from '../containers/navbar';

export default function Home({}) {
  return (
    <div>
      <SEO title='SIVIO Home' />
      <NavbarContainer />

      <main>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      reports,
      slide: slides[0],
      events,
    },
    revalidate: 60,
  };
}
