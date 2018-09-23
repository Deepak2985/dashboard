import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CardListComponent } from './dashboard/card-list/cardlist.component';
import { CardComponent } from './dashboard/card-list/card/card.component';
import { SearchPanelComponent } from './dashboard/search-panel/search-panel.component';
import { ProfileCompletionComponent } from './dashboard/profile-completion/profile-completion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CardListComponent,
    CardComponent,
    SearchPanelComponent,
    ProfileCompletionComponent,
    DashboardComponent,
    OpportunitiesComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
Chart.plugins.register({
	afterDatasetsDraw: function (chart) {
	  if (chart.options.centerText){
		let ctx = chart.ctx,
		width = chart.canvas.width,
		height = chart.canvas.height;
	  let fontSize = (height / 150).toFixed(2);
	  ctx.font = fontSize + "em Verdana";
	  ctx.textBaseline = "middle";
	  ctx.fillStyle = "black";
	  let text = chart.options.text,
		textX = Math.round((width - ctx.measureText(text).width) / 2),
    textY = height / 2;
    if(!chart.options.subText){
      ctx.fillText(text, textX, textY);
    }else{
      ctx.fillText(text, textX, textY-10);
      ctx.fillStyle = "#989898";
      ctx.fillText(chart.options.subTitle, textX, textY+10);
    }
    
	  ctx.restore();
	  }
	  
	}
  });