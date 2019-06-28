import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { SignalRService } from '../services/signal-r.service';
import { ChartModel } from '../_interfaces/chartmodel.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lp-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements  OnInit {
  public ArrayData: ChartModel[];

//2nd Chart Props
public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
public doughnutChartData = [120, 150, 180, 90];
public doughnutChartType = 'doughnut';
// End 2nd Chart props

public chartOptions: any = {
  scaleShowVerticalLines: true,
  responsive: true,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};
public chartLabels: string[] = ['Real time data for the chart'];
public chartType: string = 'bar';
public chartLegend: boolean = true;
public colors: any[] = [{ backgroundColor: '#5491DA' }, { backgroundColor: '#E74C3C' }, { backgroundColor: '#82E0AA' }, { backgroundColor: '#E5E7E9' }]

constructor(public signalRService: SignalRService, private http: HttpClient) { }

ngOnInit() {
  this.signalRService.startConnection();
  this.signalRService.addTransferChartDataListener();
  this.signalRService.addBroadcastChartDataListener();
  this.startHttpRequest();
}

private startHttpRequest = () => {
  this.http.get('https://localhost:44342/api/chart')
    .subscribe(res => {
      console.log(res);
    })
}

public chartClicked = (event) => {
  console.log(event);
  this.signalRService.broadcastChartData();
}
}
