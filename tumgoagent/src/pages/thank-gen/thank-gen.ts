import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the ThankGenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thank-gen',
  templateUrl: 'thank-gen.html',
})
export class ThankGenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankGenPage');
  }

  backHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
