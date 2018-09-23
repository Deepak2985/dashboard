import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public data:any;
  public doughnutChartLabels: string[] = ['Bid', 'Won'];
  public doughnutChartData: number[] = [125];
  public doughnutChartData1: number[] = [250];
  public doughnutChartType: string = 'doughnut';
  public doughnutChartOptions: any

  public donutColors = [
    {
      backgroundColor: [
        '#8ac43c',
        '#f4f4f4'
      ]
    }
  ];
  public donutColors1 = [
    {
      backgroundColor: [
        '#6fd7d7',
        '#f4f4f4'
      ]
    }
  ];


  ngOnInit() {
    this.data=[{
                doughnutChartData:this.doughnutChartData1,
                donutColors:this.donutColors1,
                doughnutChartLabels:this.doughnutChartLabels,
                doughnutChartOptions:{

                  legend: {
                    display: false
                  }, cutoutPercentage: 70,
                  tooltips: { enabled: false },
                  centerText: true,
                  subText:true,
                  text:this.doughnutChartData1[0],
                  subTitle:this.doughnutChartLabels[0]
                }
                },{
                  donutColors:this.donutColors,
                  doughnutChartData:this.doughnutChartData,
                  doughnutChartLabels:this.doughnutChartLabels,
                  doughnutChartOptions:{

                    legend: {
                      display: false
                    }, cutoutPercentage: 70,
                    tooltips: { enabled: false },
                    centerText: true,
                    subText:true,
                    text:this.doughnutChartData[0],
                    subTitle:this.doughnutChartLabels[1]
                  }
                }
    ];

  }

  closeComponent(element:ElementRef){
    console.log(element);
  }



}
