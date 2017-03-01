import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HtmlComponent } from './templatecomponents/html/html.component';
import { PageComponent } from './page/page.component';

import { PagedataService } from './services/pagedata.service';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HtmlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'page/:token',
        component: PageComponent
      },
      {
        path: '',
        redirectTo: 'page/Page1',
        pathMatch: 'full'
      }
    ])
  ],

  providers: [PagedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
