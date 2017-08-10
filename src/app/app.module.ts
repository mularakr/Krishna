import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AppComponent }  from './app.component';
import { ChildComponent } from './components/childComponent/child.component';
import { NavigationComponent } from './components/navigation/navigation-component';
import { RouterLinkActive } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRootModule } from './app.router.module';
import { HttpModule } from '@angular/http';
import { AjaxService } from './services/ajax.service';
import { routingComponents } from './app.router.module';
import 'hammerjs';
@NgModule({
  imports:      [ //modules
    BrowserModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    MaterialModule,
    AppRootModule,
    HttpModule,
    FormsModule 
  ],
  declarations: [ NavigationComponent,routingComponents],// components
  providers:[ AjaxService , RouterLinkActive],//services or injectables
  bootstrap:    [ NavigationComponent ] //classes or comps to be loaded on start of app
})
export class AppModule { }
