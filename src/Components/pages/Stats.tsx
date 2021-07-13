import { Bar, Line, Pie, Radar } from "react-chartjs-2";

const rand = () => Math.floor(Math.random() * 255);

const Stats = () => {
  return (
    <div className="flex flex-wrap justify-center items-start gap-5">
      <div className="w-2/5 p-6 border rounded-md">
        <RadarChart />
      </div>
      <div className="w-2/5 p-6 border rounded-md">
        <PieChart />
      </div>
      <div className="w-2/5 p-6 border rounded-md">
        <LineChart />
      </div>
      <div className="w-2/5 p-6 border rounded-md">
        <VerticalBar />
      </div>
    </div>
  );
};

// LINECHART ====================================
const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Activity overview",
        data: [rand(), rand(), rand(), rand(), rand(), rand()],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return <Line type="line" data={data} options={options} />;
};

// RADAR ==================================================
const RadarChart = () => {
  const data = {
    labels: ["Code review", "Issues", "Pull request", "Commits"],
    datasets: [
      {
        label: "# of contribution",
        data: [rand(), rand(), rand(), rand()],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true },
    },
  };

  return <Radar type="radar" data={data} options={options} />;
};

// PIECHART =============================================
const PieChart = () => {
  const data = {
    labels: ["Rust", "PHP", "Javascript", "Python", "Cpp", "Java"],
    datasets: [
      {
        label: "# of Votes",
        data: [rand(), rand(), rand(), rand(), rand(), rand()],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie type="pie" data={data} />;
};

const VerticalBar = () => {
  const data = {
    labels: [
      "Merge Pull Request",
      "Open Pull Request",
      "Closed Issues",
      "New Issues",
    ],
    datasets: [
      {
        label: "# of request",
        data: [rand(), rand(), rand(), rand()],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Bar type="bar" data={data} options={options} />;
};

export default Stats;
