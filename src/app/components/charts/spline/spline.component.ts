import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spline',
  templateUrl: './spline.component.html',
  styleUrls: ['./spline.component.scss']
})
export class SplineComponent implements OnInit {

  chartConfiguation: any = {};
  constructor() { }

  ngOnInit(): void {
    this.chartConfiguation = {
      type: 'spline',
      mainTitle: 'Hello Main Title',
      subTitle: 'Hello Sub Title',
      xAxisTitle: 'x-axis title',
      yAxisTitle: 'y-axis title',
      xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      plotOptions: {
        spline: {
          dataLabels: {
            enabled: true // showing data labels
          },
          enableMouseTracking: false  // On hover showing tool tip
        }
      },
      series: [
        {
          name: 'Name - 1',
          data: [7.0, 21.5, 13.9, 9.6]
        }, {
          name: 'Name - 2',
          data: [3.9, 15.2, 6.6, 4.8]
        }
      ]
    };
  }


}
