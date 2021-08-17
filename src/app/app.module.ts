import { NgModule } from '@angular/core';

/*** imports */
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


// https://angular.io/guide/animations
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*** providers */
import { LocationProviders } from './app-routing.module';
//import { ErrorProvider } from './app.error-handler';

// https://ng-bootstrap.github.io/#/getting-started
// Instead of importing the whole library with NgbModule, you could only import modules with components you need, ex. pagination and alert.
//import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/*** declarations */
// the bootstrap Component
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [    
    // app wrapper
    AppComponent, 
    MainComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    // https://angular.io/guide/animations
    //BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    //StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [
    ...LocationProviders,
    //ErrorProvider    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
