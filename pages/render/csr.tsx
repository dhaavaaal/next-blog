import React from "react";
import axios from "axios";
import TimeSection from "../../components/TimeSection";
export default function CSRPage() {
  const [dateTime, setDateTime] = React.useState<string>();

  React.useEffect(() => {
    axios
      .get("https://worldtimeapi.org/api/ip")
      .then((res) => {
        setDateTime(res.data.datetime);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      <TimeSection dateTime={dateTime} />
    </main>
  );
}
