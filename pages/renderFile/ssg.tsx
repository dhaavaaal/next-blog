import axios from "axios";
import TimeSection from "../../components/TimeSection";

export default function SSGPage({ dateTime }) {
  return (
    <main>
      <TimeSection dateTime={dateTime} />
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get("https://worldtimeapi.org/api/ip");
  console.log("props");
  return {
    props: { dateTime: res.data.datetime },
    revalidate: 10,
  };
};
