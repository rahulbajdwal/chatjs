import React from "react";
import ReactDOM from "react-dom";
import { Bar } from "react-chartjs-2";

import "./styles.css";

const data = {
  labels: ["Red", "Blue"],
  datasets: [
    {
      label: "Success Count",
      stack: "Stack 0",
      data: [12, 19],
      backgroundColor: "green"
    },
    {
      label: "Failure Count",
      stack: "Stack 0",
      data: [6, 2],
      backgroundColor: "red"
    }
  ]
};

const options = {
  scales: {
    xAxes: [
      {
        stacked: true
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

function App() {
  return (
    <div className="App">
      <h1>ChartJS Sandbox</h1>
      <Bar data={data} options={options} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
