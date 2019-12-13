import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ThanksPage} from "../thanks/thanks";

/**
 * Generated class for the FileComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-file-complaint',
  templateUrl: 'file-complaint.html',
})
export class FileComplaintPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileComplaintPage');
  }

  thankPage() {
    this.navCtrl.push(ThanksPage);
  }

}
