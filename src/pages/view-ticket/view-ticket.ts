import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {LoginPage} from "../login/login";
import {ThanksSubmitPage} from "../thanks-submit/thanks-submit";

/**
 * Generated class for the ViewTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-ticket',
  templateUrl: 'view-ticket.html',
})
export class ViewTicketPage {

  show_left=true;
  show_right=true;

  rejected=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewTicketPage');
    console.log("index:-"+window.localStorage.getItem("index"));
    if(window.localStorage.getItem("index")=="0"){
      this.show_left=false;
    }
    if(window.localStorage.getItem("index")=="6"){
      this.show_right=false;
    }
  }

  logoutUser(){
    this.navCtrl.setRoot(LoginPage);
  }

  submit(){
    if(this.rejected){
      this.presentToast("Ticket Rejected");
    }else{
      this.navCtrl.push(ThanksSubmitPage);
    }
  }


  presentToast(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

}
