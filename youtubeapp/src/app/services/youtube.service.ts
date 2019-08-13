import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { map } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  youtubeUrl:string = "https://www.googleapis.com/youtube/v3"
  apiKey:string = "AIzaSyCZO3-R51FpFUqqqlig2va1DnNw0bpRzfQ"
  playList:string = "UUuaPTYj15JSkETGnEseaFFg"
  nextToken:string = ""

  constructor(public http:Http) { }

  getVideos(){
    let url = `${this.youtubeUrl}/playlistItems`
    let params = new URLSearchParams()
    params.set('part','snippet')
    params.set('maxResults','10')
    params.set('playlistId', this.playList)
    params.set('key', this.apiKey)
    if (this.nextToken) {
      params.set('pageToken', this.nextToken)

    }

    return this.http.get(url,{search:params})
                    .pipe(
                      map((r:any) => {
                        // console.log(r.json());
                        this.nextToken = r.json().nextPageToken
                        let videos:any[] = []
                        for (const video of r.json().items) {
                            let snippet = video.snippet
                            videos.push(snippet)
                        }
                        return videos
                      })
                    )
  }
}
