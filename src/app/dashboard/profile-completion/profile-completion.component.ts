import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'xv-profile-completion',
  templateUrl: './profile-completion.component.html',
  styleUrls: ['./profile-completion.component.css']
})
export class ProfileCompletionComponent implements OnInit {

  public doughnutChartLabels: string[] = ['Complete', 'Incomplete'];
  public doughnutChartData: number[] = [75, 25];
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

  ngOnInit() {
    

    this.doughnutChartOptions = {

      legend: {
        display: false
      }, cutoutPercentage: 60,
      tooltips: { enabled: false },
      centerText: true,
      text:this.doughnutChartData[0]+"%"
    }

  }
  closeComponent(template:ElementRef){
    console.log(template);
  }


}
