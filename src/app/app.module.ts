import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * HighCharts
 */
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartComponent } from './chart/chart.component';

/**
 * Components
 */
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LineComponent } from './components/charts/line/line.component';
import { SplineComponent } from './components/charts/spline/spline.component';
import { BasicColumnComponent } from './components/charts/basic-column/basic-column.component';
import { StackedColumnComponent } from './components/charts/stacked-column/stacked-column.component';
import { MixedComponent } from './components/charts/mixed/mixed.component';
import { DonutComponent } from './components/charts/donut/donut.component';
import { PieComponent } from './components/charts/pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    DashboardComponent,
    LineComponent,
    SplineComponent,
    BasicColumnComponent,
    StackedColumnComponent,
    MixedComponent,
    DonutComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
