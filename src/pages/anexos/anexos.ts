import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';

import { SolicitudesSevicioProvider } from '../../providers/solicitudes-sevicio/solicitudes-sevicio';
//import { InAppBrowser } from 'ionic-native';

//import { InAppBrowser } from 'ionic-native';
/**
 * Generated class for the AnexosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-anexos',
  templateUrl: 'anexos.html',
})
export class AnexosPage {

  public IDregistro: number;
  public tipo: number;
  public offset: number = 0;
  public registros: any = [];
  public buscar: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    public solicitudes: SolicitudesSevicioProvider,
    public platform: Platform) {

    this.IDregistro = this.navParams.get('IDregistro');
    this.tipo = this.navParams.get('tipo');
    console.log("tipo: " + this.tipo);
    console.log("IdRegistro: " + this.IDregistro);
    this.platform = platform;
    this.getAnexos("");
  }

  ionViewDidLoad() {
    this.viewCtrl.showBackButton(false);

  }
  verURL() {
    this.platform.ready().then(() => {
      open("https://db.tt/ontieTp5tx", "_blank", "location=no");
    });

  }
  launchUrl(url) {
    //console.log(url);
    this.platform.ready().then(() => {
      open(url, "_blank", "location=no");
    });
  }



  getAnexos(buscaraux) {



    return new Promise(resolve => {

      this.solicitudes.getAnexos(this.IDregistro, buscaraux, this.tipo, this.offset)
        .then(data => {
          this.registros = data;
          console.log(data);

          resolve(true);

        });

    });

  }


  doInfinite(infiniteScroll) {

    this.offset += 5;
    setTimeout(() => {
      this.getAnexos(this.buscar).then(() => {
        infiniteScroll.complete();
      });
    }, 500);
  }

  initializeItems(): void {

    this.registros = [];
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    this.getAnexos(val);
  }

}
