import Image from "next/image";
import Layout from "@/components/layout";
import { getAllSlugs, getEventData } from "@/utils/events";

export default function Event(props) {
  const { city, cover_image_url } = props.eventData;
  return (
    <Layout>
      <h1>{city.name}</h1>
      <Image src={cover_image_url} width={400} height={300} alt={city.name} />
    </Layout>
  );
}

export const getStaticPaths = () => {
  const paths = getAllSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const eventData = getEventData(params.slug);
  return {
    props: {
      eventData,
    },
  };
};

// export const getStaticProps = ({ params }) => {
//   const eventData = getEventData(params.slug_id);
//   return {
//     props: {
//       eventData,
//     },
//   };
// };
