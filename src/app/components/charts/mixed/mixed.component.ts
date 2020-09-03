import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mixed',
  templateUrl: './mixed.component.html',
  styleUrls: ['./mixed.component.scss']
})
export class MixedComponent implements OnInit {

  chartConfiguation: any = {};
  constructor() { }

  ngOnInit(): void {

    this.chartConfiguation = {
      // type: 'column',
      mainTitle: 'Hello Main Title',
      subTitle: 'Hello Sub Title',
      xAxisTitle: 'x-axis title',
      yAxisTitle: 'y-axis title',
      xAxisData: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
      },
      plotOptions: {
        column: {
          stacking: 'percent'
        }
      },
      series: [{
        type: 'column',
        name: 'Jane',
        data: [3, 2, 1, 3, 4]
      }, {
        type: 'column',
        name: 'John',
        data: [2, 3, 5, 7, 6]
      }, {
        type: 'column',
        name: 'Joe',
        data: [4, 3, 3, 9, 0]
      }, {
        type: 'spline',
        name: 'Average',
        data: [3, 2.67, 3, 6.33, 3.33]
      }]
    };
  }

  }
