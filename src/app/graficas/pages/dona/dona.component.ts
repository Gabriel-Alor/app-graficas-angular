import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Color } from 'chartjs-plugin-datalabels/types/options';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html'
})
export class DonaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor: ['#0075ED', '#00BAF7', '#00E0DB'] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';





}
