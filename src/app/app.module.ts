import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  MsalAngularConfiguration,
  MsalInterceptor,
  MsalModule,
} from '@azure/msal-angular';
import { msalConfiguration } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPageComponent } from './top-page/top-page.component';

const msalAngularConfig: MsalAngularConfiguration = {
  popUp: false,
};

@NgModule({
  declarations: [AppComponent, TopPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule.forRoot(msalConfiguration, msalAngularConfig),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
