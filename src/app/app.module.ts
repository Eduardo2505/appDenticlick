import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { LoginServicioProvider } from '../providers/login-servicio/login-servicio';
import { VarGlobalesProvider } from '../providers/var-globales/var-globales';
import { SolicitudesSevicioProvider } from '../providers/solicitudes-sevicio/solicitudes-sevicio';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DetallesPage } from '../pages/detalles/detalles';
import { InicioPage } from '../pages/inicio/inicio';
import { ContactoPage } from '../pages/contacto/contacto';
import { AccionSolicitudPage } from '../pages/accion-solicitud/accion-solicitud';
import { AjustesPage } from '../pages/ajustes/ajustes';
import { PerfilPage } from '../pages/perfil/perfil';
import { MenuDesplegablePage } from '../pages/menu-desplegable/menu-desplegable';


import { LoginPage } from '../pages/login/login';



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    DetallesPage,
    InicioPage,
    ContactoPage,
    AccionSolicitudPage,
    AjustesPage,
    PerfilPage,
    MenuDesplegablePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DetallesPage,
    InicioPage,
    ContactoPage,
    AccionSolicitudPage,
    AjustesPage,
    PerfilPage,
    TabsPage,
    MenuDesplegablePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginServicioProvider, SolicitudesSevicioProvider,
    VarGlobalesProvider
  ]
})
export class AppModule { }
