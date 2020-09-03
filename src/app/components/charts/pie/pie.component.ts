import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  chartConfiguation: any = {};
  lineData: any = [];
  constructor() { }

  ngOnInit(): void {
    this.chartConfiguation = {
      type: 'pie',
      mainTitle: 'Hello Main Title',
      subTitle: 'Hello Sub Title',
      // xAxisTitle: 'x-axis title',
      // yAxisTitle: 'y-axis title',
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Category',
        colorByPoint: true,
        data: [{
          name: 'Category A',
          y: 0,
          // sliced: true,
          // selected: true
        }, {
          name: 'Category B',
          y: 34
        }, {
          name: 'Category C',
          y: 39
        }, {
          name: 'Category D',
          y: 45
        }, {
          name: 'Category E',
          y: 75
        }, {
          name: 'Category F',
          y: 76
        }, {
          name: 'Others',
          y: 22
        }]
      }]
    };
  }

}
