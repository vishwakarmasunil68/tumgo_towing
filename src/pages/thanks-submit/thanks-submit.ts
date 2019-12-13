import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the ThanksSubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thanks-submit',
  templateUrl: 'thanks-submit.html',
})
export class ThanksSubmitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThanksSubmitPage');
  }

  backHome(){
    this.navCtrl.setRoot(HomePage)
  }

}
