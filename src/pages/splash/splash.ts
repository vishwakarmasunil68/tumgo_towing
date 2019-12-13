import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {SplashScreen} from "@ionic-native/splash-screen";
import {LoginPage} from "../login/login";

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private  splashScreen:SplashScreen,
              private viewCtrl:ViewController,private events:Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
    this.splashScreen.hide();

    setTimeout(() => {
      // this.viewCtrl.dismiss();
      // this.events.publish('start_application','start');
      this.navCtrl.setRoot(LoginPage);
    }, 4000);
  }

}
