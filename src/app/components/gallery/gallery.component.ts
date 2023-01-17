import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @ViewChild('imgAmplificada') imgAmplificada?: ElementRef<HTMLImageElement>;
  imgsProgutos = [{
    url:'../../../assets/images/image-product-1.jpg'
  },
  {
    url:'../../../assets/images/image-product-2.jpg'
  },
  {
    url:'../../../assets/images/image-product-3.jpg'
  },
  {
    url:'../../../assets/images/image-product-4.jpg'
  }]
  constructor(private _chadec: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  selecionarImagem(element:any, url:string){
    if (this.imgAmplificada) {
      let imgUsedName = this.imgAmplificada.nativeElement.src.split('/')[this.imgAmplificada.nativeElement.src.split('/').length - 1];
      let imgToUse = url.split('/')[url.split('/').length - 1];
      if(imgUsedName != imgToUse){
        this.imgAmplificada.nativeElement.src = url
        this.handleSelectedImg();
        element.classList.add('selectedImg')
        element.classList.remove('selectableImg')
        this._chadec.detectChanges()
      }
    }
  }

  handleSelectedImg(){
    let element = document.getElementsByClassName('selectedImg')[0] as HTMLElement;
    element.classList.remove('selectedImg');
    element.classList.add('selectableImg');
  }
}
