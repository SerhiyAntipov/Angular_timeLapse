import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CardInterface } from '../../core/types/card.interface';
import {animate, state, style, transition, trigger} from "@angular/animations";
// videogular
import {VgApiService} from "@videogular/ngx-videogular/core";

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
  animations:[
    trigger('animation90deg',[
      state('start', style({
        transform: 'rotate(0deg)',
      })),
      state('end', style({
        transform: 'rotate(90deg)',
      })),
      transition('start => end', animate(300)),
      transition('end => start', animate(300))
    ]),
    trigger('animationIncrease',[
      state('start', style({
        height: 0,
        opacity: 0
      })),
      state('end', style({
        height: 'auto',
        opacity: 1
      })),
      transition('start => end', animate('.15s ease-in-out')),
      transition('end => start', animate('.15s ease-in-out'))
    ])
  ]
})
export class CardProductComponent implements OnInit {

  @Input() cardData:CardInterface | undefined;
  @Output() playClickEvent: EventEmitter<any> = new EventEmitter<any>()
  @Output() soundOnOffEvent: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() toggleFavoritesEvent: EventEmitter<any> = new EventEmitter<any>()
  @Output() cardShareEvent: EventEmitter<any> = new EventEmitter<any>()

  // videogular
  public vgApi!: VgApiService;
  public soundState: boolean = true;
  public videoOnPause: boolean = false;

  // animations State
  public animation90degState = 'start'
  public animationIncreaseState = 'start'

  constructor() { }

  ngOnInit(): void {
  }

  public async onPlayerReady(api: VgApiService): Promise<void> {
    console.log('READY');
    this.vgApi = api;

    this.vgApi.getDefaultMedia().subscriptions.canPlay
      .subscribe(async () => {

      });

    this.vgApi.getDefaultMedia().subscriptions.play
      .subscribe(
        () => {
          this.videoOnPause = false;
        },
      );

    this.vgApi.getDefaultMedia().subscriptions.pause
      .subscribe(
        () => {
          this.videoOnPause = true;
        },
      );

    this.vgApi.getDefaultMedia().subscriptions.error
      .subscribe(
        (error) => {
          console.log('VG ERROR', error);
        },
      );
  }

  playClick() {
    this.vgApi.play();
  }

  pauseClick(){
    this.vgApi.pause()
  }

  playPause(event:any){
    console.log(event)
    if (event.srcElement.classList[0] == 'controls' ){
      this.vgApi.state == 'playing' ? this.vgApi.pause() : this.vgApi.play()
    }
  }

  soundOnOff() {
    if (this.vgApi.volume) {
      this.vgApi.volume = 0;
    } else {
      this.vgApi.volume = 1;
    }
    this.soundState = !this.soundState;
  }

  toggleFavorites(cardData:any) {
    this.toggleFavoritesEvent.emit(cardData.cardId);
  }

  cardShare(cardData:any) {
    this.cardShareEvent.emit(cardData);
  }

  showDetails(cardData:any){
    // if (cardData.detailsInfoVisible != null){
    //   cardData.detailsInfoVisible =! cardData.detailsInfoVisible
    // }else{
    //   cardData.detailsInfoVisible = true
    // }
    cardData.detailsInfoVisible = cardData.detailsInfoVisible === true ? false : true
    console.log('showDetails visible:', cardData.detailsInfoVisible)
  }

  onAnimation90deg(){
    this.animation90degState = this.animation90degState === 'end' ? 'start' : 'end'
  }

  onAnimationIncrease(){
    this.animationIncreaseState = this.animationIncreaseState === 'end' ? 'start' : 'end'
  }
}
