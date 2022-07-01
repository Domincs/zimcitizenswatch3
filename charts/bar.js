import Highcharts from 'highcharts/highstock';
import Chart from 'highcharts-react-official';

export const Bar = ({
  data,
  title,
  pointWidth = 16,
  height = 530,
  yAxisTitle = 'Number of Respondents',
}) => {
  const options = {
    title: {
      text: title,
    },
    chart: {
      type: 'column',
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
      console.log(dt.sector)
      return {
        name: dt.sector,
        data: dt.data.map((dt) => dt.y),
        showInLegend: true,
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
