import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  MsalAngularConfiguration,
  MsalInterceptor,
  MsalModule,
} from '@azure/msal-angular';
import { Configuration } from 'msal';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const msalConfig: Configuration = {
  auth: {
    clientId: environment.msalClientId,
    authority: environment.msalAuthority,
    redirectUri: environment.msalRedirectUri,
  },
  cache: {
    cacheLocation: 'localStorage',
  },
};
const msalAngularConfig: MsalAngularConfiguration = {
  popUp: false,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule.forRoot(msalConfig, msalAngularConfig),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
