import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {
  @Input('nombre') leyenda: string = '';
  @Input('chartLabels') doughnutChartLabels: string[] = [];
  @Input('chartData') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [] }
    ]
  };
  @Input('chartType') doughnutChartType: ChartType = 'doughnut';

  constructor() {
  }

  ngOnInit(): void {
    console.log('chartLabels',this.doughnutChartLabels);
    console.log('chartData',this.doughnutChartData);
    console.log('chartType',this.doughnutChartType);
  }

}
