import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Line } from "react-chartjs-2";
import 'chart.js/auto';

const BarChart = () => {
  const [dataa, setDataa] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    // Replace with your actual API endpoint URL
    try {
      const user= await axios.get("/all");
      console.log(user.data);
      setDataa(user.data);
      
      
    } catch (error) {
      console.log("failed");
      
    }
    // axios
    //   .get("http://localhost:5000/data/all")
    //   .then((res) => {
    //     setDataa(res.data.data);
    //     console.log("hee");
    //     console.log(res.data.data);
    //   })
    //   .catch((err) => console.log(err));
  };

  const labels = dataa.map((el) => el.source);
  
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Based on intensity",
        backgroundColor:"green",
        borderColor: "rgb(255, 99, 132)",
        data: dataa.map((el)=>{
            return  el.intensity 
          }),
      },
      {
        label: "Based on relevance",
        backgroundColor:"blue",
        borderColor: "rgb(75, 192, 192)",
        data: dataa.map((el)=>{
            return  el.relevance 
          }),
      },
      {
        label: "Based on likelihood",
        backgroundColor:"red",
        borderColor: "rgb(201, 203, 207)",
        data: dataa.map((el)=>{
            return  el.likelihood 
          }),
      },
      {
        label: "Based on  end year",
        backgroundColor:"green",
        borderColor: "rgb(255, 99, 100)",
        data: dataa.map((el)=>{
            return  el.end_year
          }),
      },
      {
        label: "Based on  topics",
        backgroundColor:"pink",
        borderColor: "rgb(255, 100, 132)",
        data: dataa.map((el)=>{
            return  el.topic
          }),
      },
      {
        label: "Based on sector",
        backgroundColor:"yellow",
        borderColor: "rgb(222, 99, 132)",
        data: dataa.map((el)=>{
            return  el.sector 
          }),
      },
      {
        label: "Based on  region ",
        backgroundColor:"black",
        borderColor: "rgb(255, 99, 142)",
        data: dataa.map((el)=>{
            return  el.region 
          }),
      },
      {
        label: "Based on  PEST",
        backgroundColor:"blue",
        borderColor: "rgb(255, 999, 132)",
        data: dataa.map((el)=>{
            return  el.pestle
          }),
      },
      {
        label: "Based on  Source",
        backgroundColor:"orange",
        borderColor: "rgb(758, 192, 192)",
        data: dataa.map((el)=>{
            return  el.source
          }),
      },
      {
        label: "Based on country  ",
        backgroundColor:"red",
        borderColor: "rgb(201, 203, 99)",
        data: dataa.map((el)=>{
            return  el.country 
          }),
      },
    ],
  };

  return (
    <div className="chart-container">
      <div className="chart">
        <h1 className="chart-title">Bar Chart Presentation</h1>
        <Bar data={chartData} />
      </div>
      <div className="chart">
        <h1 className="chart-title">Line Chart Presentation</h1>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default BarChart;
