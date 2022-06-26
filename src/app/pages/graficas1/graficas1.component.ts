import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ]
})
export class Graficas1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  graficos: any = {
    'grafico1': {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data':  {
        'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
        'datasets': [
          {
            'data': [24, 30, 46]
          }
        ]
      },
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  {
        'labels': ['Hombres', 'Mujeres'],
        'datasets': [
          {
            'data': [4500, 6000]
          }
        ]
      },
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  {
        'labels': ['Si', 'No'],
        'datasets': [
          {
            'data': [95, 5]
          }
        ]
      },
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  {
        'labels': ['No', 'Si'],
        'datasets': [
          {
            'data': [85, 15]
          }
        ]
      },
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    },
  };

}
