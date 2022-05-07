import Main from '../components/pages/Main';
import { fetchEntries } from '../utils/contentfulPage';

export default function Home(props) {
  return (
    <>
      <Main {...props} />
    </>
  );
}

export async function getStaticProps() {
  const entries = await fetchEntries();

  let galleryImages = entries.filter(() => true);

  const fields = galleryImages.map((item) => item.fields);

  return galleryImages && fields
    ? {
        props: { galleryImages, fields },
      }
    : {
        props: {},
      };
}

