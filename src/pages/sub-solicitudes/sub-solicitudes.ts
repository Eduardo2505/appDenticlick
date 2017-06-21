import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading, LoadingController } from 'ionic-angular';


import { SolicitudesPendientesPage } from '../solicitudes-pendientes/solicitudes-pendientes';
import { SolicitudesAprobadasPage } from '../solicitudes-aprobadas/solicitudes-aprobadas';

/**
 * Generated class for the SubSolicitudesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sub-solicitudes',
  templateUrl: 'sub-solicitudes.html',
})
export class SubSolicitudesPage {
  
  loading: Loading;
  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  public loadingCtrl: LoadingController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubSolicitudesPage');
  }
  
  pedientes() {
     this.showLoading();
    this.navCtrl.push(SolicitudesPendientesPage);
  }
  aprobados() {
     this.showLoading();
    this.navCtrl.push(SolicitudesAprobadasPage);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando datos...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
