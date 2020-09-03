import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit {

  chartConfiguation: any = {};
  constructor() { }

  ngOnInit(): void {
    this.chartConfiguation = {
      // type: 'column',
      mainTitle: 'Hello Main Title',
      subTitle: 'Hello Sub Title',
      // xAxisTitle: 'x-axis title',
      // yAxisTitle: 'y-axis title',
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: 0,
          endAngle: 360,
          center: ['50%', '50%'],
          size: '50%'
        }
      },
      series: [{
        type: 'pie',
        name: 'Sales',
        innerSize: '72.5%',
        data: [
          ['Actual', 15],
          ['Budgeted', 85],
        ]
      }]
    };
  }
}

