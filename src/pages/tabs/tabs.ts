import { Component} from '@angular/core';


import { InicioPage } from '../inicio/inicio';

import { ContactoPage } from '../contacto/contacto';
import { AccionSolicitudPage } from '../accion-solicitud/accion-solicitud';
import { MenuDesplegablePage } from '../menu-desplegable/menu-desplegable';




@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
 
  tab1Root = InicioPage;
  tab2Root = AccionSolicitudPage;
  tab3Root = ContactoPage;
  tab4Root = MenuDesplegablePage;

  constructor() {

  }

 

}
