import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
@Pipe({
  name: 'video'
})
export class VideoPipe implements PipeTransform {
  constructor(private DomSanitizer:DomSanitizer){

  }
  transform(value: string): any {
    let url = "https://www.youtube.com/embed/"
    return this.DomSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
