import React from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, Title, Tooltip, Legend, LineSeries
} from 'react-jsx-highcharts';


export const LineGraph = ({ series, xAxis='', yAxis='', title=null, categories=[], plotOptions = {
    series: {
      line: {
          color: '#f7a35c'
      }
    }
  } }) => (

  <div>
    <HighchartsProvider Highcharts={Highcharts}>
      <HighchartsChart plotOptions={plotOptions}>
        <Chart />
        {
            title!==null && <Title>{title}</Title>
        }
    

        <Legend layout="vertical" align="right" verticalAlign="middle" />

        <Tooltip useHTML={true} pointFormat={"<b>{point.y} promises were <b>{series.name}</b>"}/>

        <XAxis type="datetime" categories={[]} labels={
          {
            format: '{value:%d}',
            rotation: 45,
            align: 'left',
            formatter: function() {
              return Highcharts.dateFormat('%e', this.value);
            }
          }
        }>
          <XAxis.Title>{xAxis}</XAxis.Title>
        </XAxis>


        <YAxis>
          <YAxis.Title>{yAxis}</YAxis.Title>
          {
              series.map((line, idx) => {
                console.log(line.color)
                return <LineSeries color={line.color} key={idx} name={line.title} data={line.data} />
              })
          }
        </YAxis>
      </HighchartsChart>
    </HighchartsProvider>
  </div>
);
