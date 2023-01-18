import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-market-cart',
  templateUrl: './market-cart.component.html',
  styleUrls: ['./market-cart.component.scss']
})
export class MarketCartComponent implements OnInit {
  @ViewChild('list') divList?: ElementRef<HTMLDivElement>;
  constructor() { }

  ngOnInit(): void {
  }
  activateList(){
    this.divList?.nativeElement.classList.toggle('activeCart');
  }

  logar(event:any){
    console.log(event)
  }
}
