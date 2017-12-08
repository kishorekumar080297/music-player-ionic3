import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';
import { SocialSharing } from '@ionic-native/social-sharing';
import { MusicPlayerPage } from '../music-player/music-player';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public allMusic = [];

  constructor(private actionSheetController: ActionSheetController,
              private loadindController: LoadingController,
              public musicProvider: MusicProvider,
              public navCtrl: NavController,
              private socialSharing: SocialSharing) {

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

  shareSong(music) {
    let shareSongActionSheet = this.actionSheetController.create({
      title: "Share songs with friends",
      buttons: [
        {
          text: "Share On Facebook",
          icon: "logo-facebook",
          handler: () => {
            this.socialSharing.shareViaFacebook(music.name, music.image, music.music_url);
          }
        },
        {
          text: "Share On Twitter",
          icon: "logo-twitter",
          handler: () => {
            this.socialSharing.shareViaTwitter(music.name, music.image, music.music_url);
          }
        },
        {
          text: "Share",
          icon: "share",
          handler: () => {
            this.socialSharing.share(music.name, "", music.image, music.music_url);
          }
        },
        {
          text: "Cancel",
          role: "destructive",
        },
      ],
    });
    shareSongActionSheet.present();
  }

  goToMusicPlayer() {
    this.navCtrl.push(MusicPlayerPage);
  }

}
