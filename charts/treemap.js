import React from 'react';
import Highcharts from 'highcharts';
import addHeatmapModule from 'highcharts/modules/heatmap';
import addTreemapModule from 'highcharts/modules/treemap';
import {
  HighchartsChart, HighchartsProvider, Title, XAxis, YAxis, TreemapSeries, Tooltip
} from 'react-jsx-highcharts';


if (typeof Highcharts === 'object') {
// Apply Highcharts modules
addHeatmapModule(Highcharts);
addTreemapModule(Highcharts);
}

const colorAxis = {
  minColor: '#FFFFFF',
  maxColor: '#7fbd42'
};

export const Treemap = ({ title=null, data=[] }) => {

    return (
      <div className="app">
        <HighchartsProvider Highcharts={Highcharts}>
          <HighchartsChart colorAxis={colorAxis}>
            {
                title===null && <Title>{title}</Title>
            }
            <Tooltip useHTML={true} pointFormat={"Number of promises <b>{point.name}</b> is <b>{point.value}"}/>
            <XAxis />
            <YAxis>
              <TreemapSeries name="Tree" data={data} layoutAlgorithm='strip'
              levels={[{
                layoutAlgorithm: "strip",
                level: 1,
                dataLabels: {
                  enabled: true,
                  align: 'center',
                  verticalAlign: 'middle',
                  style: {
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#000000',
                    textTransform: 'uppercase',
                    textOutline: 'none',
                    fontFamily: 'Figtree'
                  }
                  
                }
              }]
            } />
            </YAxis>
            
          </HighchartsChart>
        </HighchartsProvider>
      </div>
    );
  
}

