import axios from "axios";
import TimeSection from "../../components/TimeSection";

export default function SSRPage({ dateTime }) {
  const splittingTime = dateTime.split("T");
  const time = splittingTime[1].substring(0, 8);
  console.log(time);
  return (
    <main>
      <TimeSection dateTime={time} />
    </main>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("https://worldtimeapi.org/api/ip");
  //   console.log(res);
  return {
    props: { dateTime: res.data.datetime },
  };
};
