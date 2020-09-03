import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  columnChartOptions: any = {};
  lineChartOptions: any = {};
  spLineChartOptions: any = {};
  stackedColumnChart: any = {};
  mixedColumnChart: any = {};
  pieChart: any = {};
  donutChart: any = {};
  constructor() { }

  ngOnInit(): void {
    /**
     * Line Chart sample json
     */
    this.lineChartOptions = {
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
      series: [{
        name: 'Name - 1',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      }, {
        name: 'Name - 2',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      }]
    };
    /**
     * spLineChartOptions
     */
    this.spLineChartOptions = {
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
      series: [{
        name: 'Name - 1',
        data: [7.0, 21.5, 13.9, 9.6]
      }, {
        name: 'Name - 2',
        data: [3.9, 15.2, 6.6, 4.8]
      }]
    };
    /**
     * Column Chart sample json
     */
    this.columnChartOptions = {
      type: 'column',
      mainTitle: 'Hello Main Title',
      subTitle: 'Hello Sub Title',
      xAxisTitle: 'x-axis title',
      yAxisTitle: 'y-axis title',
      xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      plotOptions: {},
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }, {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
      }, {
        name: 'London',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
      }, {
        name: 'Berlin',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
      }]
    };
    /**
     * stackedColumnChart
     */
    this.stackedColumnChart = {
      type: 'column',
      mainTitle: 'Hello Main Title',
      subTitle: 'Hello Sub Title',
      xAxisTitle: 'x-axis title',
      yAxisTitle: 'y-axis title',
      xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
    /**
     * mixedColumnChart
     */
    this.mixedColumnChart = {
      mainTitle: 'Hello Main Title',
      subTitle: 'Hello Sub Title',
      xAxisTitle: 'x-axis title',
      yAxisTitle: 'Total fruit consumption',
      xAxisData: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
      },
      plotOptions: {
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
        type: 'column',
        name: 'Quora',
        data: [4, 5, 2, 9, 0]
      }, {
        type: 'spline',
        name: 'Average',
        data: [3, 2.67, 3, 6.33, 3.33]
      }]
    };

    /**
     * pieChart
     */
    this.pieChart = {
      type: 'pie',
      mainTitle: 'Hello Main Title',
      subTitle: 'Hello Sub Title',
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
          y: 0
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
    /**
     * donut Chart
     */
    this.donutChart = {
      type: 'pie',
      mainTitle: 'Hello Main Title',
      subTitle: 'Hello Sub Title',
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
