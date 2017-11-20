import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ChartComponent } from './chart/chart.component';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import exporting from 'highcharts/modules/exporting.src';
import { SidebarModule } from 'ng-sidebar';
import { ComponentComponent } from './component/component.component';
import { GridComponent } from './grid/grid.component';
import { TableComponent } from './aggrid/table/table.component';

// ag-grid
import { AgGridModule }  from "ag-grid-angular";
import { RichGridComponent } from './aggrid/rich-grid/rich-grid.component';
import { ProficiencyRendererComponent } from './aggrid/proficiency-renderer/proficiency-renderer.component';

// map
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [ exporting ];
}

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'chart',
    component: ChartComponent
  },
  {
    path: 'component',
    component: ComponentComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'richgrid',
    component: RichGridComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    ChartComponent,
    ComponentComponent,
    GridComponent,
    TableComponent,
    RichGridComponent,
    ProficiencyRendererComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    ChartModule,
    SidebarModule.forRoot(),
    BrowserModule,
    AgGridModule.withComponents([ 
      ProficiencyRendererComponent
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAJ-G9H_gf3-dPponIcIt691yii1brW228'
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [{ provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }],
  bootstrap: [AppComponent]
})
export class AppModule { }
