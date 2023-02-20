import moment from "moment";
import React from "react";
import { Chart } from "react-charts";

import "./styles.css";

export default function App() {
  const data = React.useMemo(
    () => [
      {
        label: "Event",
        data: [
          [moment(2018, "YYYY"), 3],
          [moment(2019, "YYYY"), 2],
          [moment(2020, "YYYY"), 1]
        ]
      }
    ],
    []
  );
  const series = { type: "bar" };
  const axes = React.useMemo(
    () => [
      { primary: true, type: "time", position: "bottom" },
      { type: "linear", position: "left" }
    ],
    []
  );

  return (
    <div
      style={{
        width: "500px",
        height: "300px"
      }}
    >
      <Chart data={data} axes={axes} series={series} />
    </div>
  );
}
