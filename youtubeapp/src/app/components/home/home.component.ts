import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos:any[] = []
  videoSel:any
  constructor(private youtubeservice:YoutubeService) { }

  ngOnInit() {
    this.youtubeservice.getVideos().subscribe(videos => {
      // console.log(videos);
      this.videos = videos
      
    })
  }
  verVideo(video:any){
    this.videoSel = video
    $("#myModal").modal()
  }
  cerrarModal(){
    this.videoSel = null
    $("#myModal").modal("hide")
  }
  load(){
    this.youtubeservice.getVideos().subscribe(videos => {
      // console.log(videos);
      this.videos.push.apply(this.videos, videos)
    })
  }


}
