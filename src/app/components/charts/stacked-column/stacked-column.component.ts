import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacked-column',
  templateUrl: './stacked-column.component.html',
  styleUrls: ['./stacked-column.component.scss']
})
export class StackedColumnComponent implements OnInit {

  chartConfiguation: any = {};
  columnData: any = [];
  constructor() { }

  ngOnInit(): void {
    this.columnData = {
      xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total fruit consumption'
        }
      },
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
        name: 'John',
        data: [5, 3, 4, 7, 2]
      }, {
        name: 'Jane',
        data: [2, 2, 3, 2, 1]
      }, {
        name: 'Joe',
        data: [3, 4, 4, 2, 5]
      }]
    };
    this.chartConfiguation = {
      type: 'column',
      mainTitle: 'Hello Main Title',
      subTitle: 'Hello Sub Title',
      xAxisTitle: 'x-axis title',
      yAxisTitle: 'y-axis title',
      data: this.columnData
    };
  }

}
