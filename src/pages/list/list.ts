import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public favoriteSongs= [];

  constructor(public musicProvider: MusicProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.favoriteSongs = this.musicProvider.getFavorites();
  }

}
