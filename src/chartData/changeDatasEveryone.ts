import { IChart } from '.';
import { ChartContextType } from '../App';

export const changeDatasEveryone = (
  valueArray: IChart,

  data: Array<Array<number>>
) => {
  return {
    title: { text: `${valueArray.title.text}` },
    legend: {
      enabled: false,
    },

    series: [
      {
        color: valueArray.series[0].color,
        type: valueArray.series[0].type,
        name: 'some useful value',
        data: data,
      },
    ],
    xAxis: {
      type: 'datetime',
    },
  };
};
