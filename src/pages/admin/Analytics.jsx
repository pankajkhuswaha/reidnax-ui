import ReactApexChart from "react-apexcharts";
import { orders } from "./routes";

const Analytics = () => {
    var data = [
      {
        type: "Jan",
        sales: 0,
      },
      {
        type: "Feb",
        sales: 0,
      },
      {
        type: "Mar",
        sales: 0,
      },
      {
        type: "Apr",
        sales: 0,
      },
      {
        type: "May",
        sales: 0,
      },
      {
        type: "Jun",
        sales: 0,
      },
      {
        type: "July",
        sales: 0,
      },
      {
        type: "Aug",
        sales: 0,
      },
      {
        type: "Sept",
        sales: 0,
      },
      {
        type: "Oct",
        sales: 0,
      },
      {
        type: "Nov",
        sales: 0,
      },
      {
        type: "Dec",
        sales: 0,
      },
    ];

    const monthNames = {
      1: "Jan",
      2: "Feb",
      3: "Mar",
      4: "Apr",
      5: "May",
      6: "Jun",
      7: "Jul",
      8: "Aug",
      9: "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    };

    for (let i = 0; i < orders?.length; i++) {
      var createdAt = new Date(orders[i].orderDate);
      var monthValue = createdAt.getMonth() + 1; 
      const monthName = monthNames[monthValue];
      const index = data.findIndex((d) => d.type === monthName);
      if (index !== -1) {
        data[index].sales += orders[i].orderItems.length;
      }
    } 
  const state = {
    series: [
      {
        data: data.map(d=>d.sales),
      },
    ],
    options: {
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: data.map(d=>d.type),
      },
    },
  };

  return (
    <div>
    <h1 className="h1">Order Report</h1>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default Analytics;
