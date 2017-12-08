import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public allMusic = [];

  constructor(public musicProvider: MusicProvider, public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.musicProvider.getMusic()
      .subscribe(musicList => this.allMusic = musicList);
  }

}
