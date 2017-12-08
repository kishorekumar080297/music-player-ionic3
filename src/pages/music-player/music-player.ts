import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-music-player',
  templateUrl: 'music-player.html',
})
export class MusicPlayerPage {

  public music={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.music = this.navParams.get("music");

  }

  ionViewDidLoad() {

  }

}
