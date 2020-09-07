import { Component, OnInit, Input } from '@angular/core';

import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  @Input()
  chartConfiguation;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: (this.chartConfiguation.type) ? this.chartConfiguation.type : ''
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      title: {
        text: (this.chartConfiguation.mainTitle) ? this.chartConfiguation.mainTitle : ''
      },
      subtitle: {
        text: (this.chartConfiguation.subTitle) ? this.chartConfiguation.subTitle : ''
      },
      xAxis: {
        categories: this.chartConfiguation.xAxisData ? this.chartConfiguation.xAxisData : '',
        title: {
          text: (this.chartConfiguation.xAxisTitle) ? this.chartConfiguation.xAxisTitle : ''
        }
      },
      yAxis: {
        title: {
          text: (this.chartConfiguation.yAxisTitle) ? this.chartConfiguation.yAxisTitle : ''
        }
      },
      plotOptions: (this.chartConfiguation.plotOptions) ? this.chartConfiguation.plotOptions : {},
      series: (this.chartConfiguation.series) ? this.chartConfiguation.series : []
    };

    /**
     * After window resize only highcharts is properly setting up
     */
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    });
  }

}
