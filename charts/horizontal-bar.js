import Highcharts from 'highcharts/highstock';
import Chart from 'highcharts-react-official';

export const HorizontalBar = ({
  title="",
  pointWidth = 16,
  height = 530,
  yAxisTitle = 'Number',
  data = []
}) => {

  const options = {
    title: {
      text: title,
    },
    chart: {
      type: 'bar',
      height,
    },
    colors: [
      'var(--sivio-kept)',
      'var(--sivio-not-commenced)',
      'var(--sivio-modified)',
      'var(--sivio-broken)',
      'var(--sivio-implemented)'
    ],

    credits: {
      enabled: false,
    },
    subtitle: {
      text: null,
    },
    plotOptions: {
      column: {
        colorByPoint: true,
        borderRadius: 6,
        pointWidth: data.length > 1 ? pointWidth : 25,
      },
    },
    xAxis: {
      categories: data[0].data.map((dt) => dt.name),
    },
    
    yAxis: {
      min: 0,
      title: {
        text: yAxisTitle,
      },
    },
    series: data.map((dt) => {
      return {
        name: dt.sector,
        showInLegend: false, 
        data: dt.data.map((dt) => {
          return {y:dt.y, color: dt.color}
        }),
        showInLegend: false,
        color: 'var(--sivio-kept)'
      };
    }),
  };
  return (
    <Chart
      containerProps={{
        className: 'chartContainer',
      }}
      highcharts={Highcharts}
      options={options}
    />
  );
};
