import { HomePageComponent } from './home/home';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrelloService } from './services/trello.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatRippleModule, MatGridListModule, MatCardModule, MatToolbarModule, MatIconModule, MatSelectModule } from '@angular/material';

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatGridListModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatSelectModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
  ,
}) 

export class MaterialModule { };

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [TrelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
