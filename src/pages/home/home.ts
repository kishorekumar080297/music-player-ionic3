import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public allMusic = [];

  constructor(private loadindController: LoadingController, public musicProvider: MusicProvider, public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    let allMusicLoadingController = this.loadindController.create({
      content: "Getting your music from server",
    });
    allMusicLoadingController.present();

    this.musicProvider.getMusic()
      .subscribe((musicList) => {
        allMusicLoadingController.dismiss();
        this.allMusic = musicList
      });
  }

  addOneSong(refresher){
    // this.musicProvider.getOneSong()
    this.musicProvider.getMusic()
      .subscribe((oneSong) => {
        this.allMusic.unshift(oneSong[0])
        refresher.complete();
      });
  }

}
