import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  chartConfiguation: any = {};
  constructor() { }

  ngOnInit(): void {
    this.chartConfiguation = {
      type: 'line',
      mainTitle: 'Hello Main Title',
      subTitle: 'Hello Sub Title',
      xAxisTitle: 'x-axis title',
      yAxisTitle: 'y-axis title',
      xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true // showing data labels
          },
          enableMouseTracking: false  // On hover showing tool tip
        }
      },
      series: [
        {
          name: 'Name - 1',
          data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
          name: 'Name - 2',
          data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }
      ]
    };
  }

}
