import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html'
})
export class DonaHttpComponent implements OnInit {

    // Doughnut
    public doughnutChartLabels: string[] = [];
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [], backgroundColor: ['#0075ED', '#00BAF7', '#00E0DB'] }
      ]
    };
    public doughnutChartType: ChartType = 'doughnut';

  constructor( private graficasService: GraficasService) { }

  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales()
    //     .subscribe({
    //       next: (data) => {
    //         console.log(data);
    //         const labels = Object.keys( data );
    //         const values = Object.values( data );
    //         console.log(values);
    //         console.log(labels);
    //         this.doughnutChartData.labels = labels;
    //         this.doughnutChartData.datasets[0].data = values;
    //       },
    //       error: (err) => {
    //         console.log(err);
    //       }
    //     })

    this.graficasService.getUsuariosRedesSocialesDonaData()
        .subscribe({
          next: ({ labels, values }) => {
            this.doughnutChartData.labels = labels;
            this.doughnutChartData.datasets[0].data = values;
          }
        })
  }


}
