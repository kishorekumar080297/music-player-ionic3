import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public musicProvider: MusicProvider, public navCtrl: NavController) {
    this.musicProvider.getMusic()
      .subscribe(musicList => console.log(musicList))
  }

}
