import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Subject, Subscription} from "rxjs";
import { takeUntil } from 'rxjs/operators';
import { CardInterface } from '../core/types/card.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public testCardData: CardInterface[] = [
    {
      cardId: '2',
      userLogo: 'assets/img/card/userLogo01.png',
      userName: 'Luisa',
      img: 'https://serhiyantipov.github.io/videoForTest/img/Time-Lapse_02.jpg',
      title: 'Title Card Details 2',
      description: 'Description Card Details/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      video: 'https://serhiyantipov.github.io/videoForTest/video/Time-Lapse_02.mp4',
      likes: 25,
      comments: 35,
      favorites: false,
      detailsInfoVisible: false,
    },{
      cardId: '3',
      userLogo: 'assets/img/card/userLogo02.png',
      userName: 'William',
      img: 'https://serhiyantipov.github.io/videoForTest/img/Time-Lapse_03.jpg',
      title: 'Title Card Details 3',
      description: 'Description Card Details/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      video: 'https://serhiyantipov.github.io/videoForTest/video/Time-Lapse_03.mp4',
      likes: 55,
      comments: 1,
      favorites:true,
      detailsInfoVisible: false,
    },{
      cardId: '4',
      userLogo: 'assets/img/card/userLogo03.png',
      userName: 'Jacob',
      img: 'https://serhiyantipov.github.io/videoForTest/img/Time-Lapse_04.jpg',
      title: 'Title Card Details 4',
      description: 'Description Card Details/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      video: 'https://serhiyantipov.github.io/videoForTest/video/Time-Lapse_04.mp4',
      likes: 69,
      comments: 0,
      favorites: true,
      detailsInfoVisible: false,
    },{
      cardId: '5',
      userLogo: 'assets/img/card/userLogo04.png',
      userName: 'Noah',
      img: 'https://serhiyantipov.github.io/videoForTest/img/Time-Lapse_05.jpg',
      title: 'Title Card Details 5',
      description: 'Description Card Details/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      video: 'https://serhiyantipov.github.io/videoForTest/video/Time-Lapse_05.mp4',
      likes: 152,
      comments: 345,
      favorites: false,
      detailsInfoVisible: false,
    },{
      cardId: '6',
      userLogo: 'assets/img/card/userLogo02.png',
      userName: 'William',
      img: 'https://serhiyantipov.github.io/videoForTest/img/Time-Lapse_06.jpg',
      title: 'Title Card Details 6',
      description: 'Description Card Details/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      video: 'https://serhiyantipov.github.io/videoForTest/video/Time-Lapse_06.mp4',
      likes: 895,
      comments: 920,
      favorites: false,
      detailsInfoVisible: false,
    },{
      cardId: '7',
      userLogo: 'assets/img/card/userLogo01.png',
      userName: 'Luisa',
      img: 'https://serhiyantipov.github.io/videoForTest/img/Time-Lapse_07.jpg',
      title: 'Title Card Details 7',
      description: 'Description Card Details/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      video: 'https://serhiyantipov.github.io/videoForTest/video/Time-Lapse_07.mp4',
      likes: 15,
      comments: 120,
      favorites: true,
      detailsInfoVisible: false,
    },{
      cardId: '8',
      userLogo: 'assets/img/card/userLogo03.png',
      userName: 'Jacob',
      img: 'https://serhiyantipov.github.io/videoForTest/img/Time-Lapse_08.jpg',
      title: 'Title Card Details 8',
      description: 'Description Card Details/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      video: 'https://serhiyantipov.github.io/videoForTest/video/Time-Lapse_08.mp4',
      likes: 562,
      comments: 89,
      favorites: false,
      detailsInfoVisible: false,
    },{
      cardId: '9',
      userLogo: 'assets/img/card/userLogo02.png',
      userName: 'William',
      img: 'https://serhiyantipov.github.io/videoForTest/img/Time-Lapse_09.jpg',
      title: 'Title Card Details 9',
      description: 'Description Card Details/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      video: 'https://serhiyantipov.github.io/videoForTest/video/Time-Lapse_09.mp4',
      likes: 751,
      // comments: 0,
      favorites: true,
      detailsInfoVisible: false,
    },{
      cardId: 10,
      userLogo: 'assets/img/card/userLogo04.png',
      userName: 'Noah',
      img: 'https://serhiyantipov.github.io/videoForTest/img/Time-Lapse_10.jpg',
      title: 'Title Card Details 10',
      description: 'Description Card Details/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      video: 'https://serhiyantipov.github.io/videoForTest/video/Time-Lapse_10.mp4',
      likes: 99,
      comments: 125,
      favorites: false,
      detailsInfoVisible: false,
    },{
      cardId: 11,
      userLogo: 'assets/img/card/userLogo03.png',
      userName: 'Jacob',
      img: 'https://serhiyantipov.github.io/videoForTest/img/Time-Lapse_11.jpg',
      title: 'Title Card Details 11',
      description: 'Description Card Details/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      video: 'https://serhiyantipov.github.io/videoForTest/video/Time-Lapse_11.mp4',
      likes: 12,
      comments: 45,
      favorites: true,
      detailsInfoVisible: false,
    },{
      cardId: 12,
      userLogo: 'assets/img/card/userLogo05.png',
      userName: 'Corey',
      img: 'https://serhiyantipov.github.io/videoForTest/img/Time-Lapse_12.jpg',
      title: 'Title Card Details 12',
      description: 'Description Card Details/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      video: 'https://serhiyantipov.github.io/videoForTest/video/Time-Lapse_12.mp4',
      likes: 56,
      comments: 45,
      favorites: true,
      detailsInfoVisible: false,
    },{
      cardId: 13,
      userLogo: 'assets/img/card/userLogo03.png',
      userName: 'Jacob',
      img: 'https://serhiyantipov.github.io/videoForTest/img/Time-Lapse_13.jpg',
      title: 'Title Card Details 13',
      description: 'Description Card Details/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      video: 'https://serhiyantipov.github.io/videoForTest/video/Time-Lapse_13.mp4',
      likes: 82,
      comments: 73,
      favorites: false,
      detailsInfoVisible: false,
    },{
      cardId: 14,
      userLogo: 'assets/img/card/userLogo02.png',
      userName: 'William',
      img: 'https://serhiyantipov.github.io/videoForTest/img/Time-Lapse_14.jpg',
      title: 'Title Card Details 14',
      description: 'Description Card Details/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      video: 'https://serhiyantipov.github.io/videoForTest/video/Time-Lapse_14.mp4',
      likes: 456,
      comments: 90,
      favorites: false,
      detailsInfoVisible: false,
    },{
      cardId: 15,
      userLogo: 'assets/img/card/userLogo04.png',
      userName: 'Noah',
      img: 'https://serhiyantipov.github.io/videoForTest/img/Time-Lapse_15.jpg',
      title: 'Title Card Details 15',
      description: 'Description Card Details/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      video: 'https://serhiyantipov.github.io/videoForTest/video/Time-Lapse_15.mp4',
      likes: 268,
      comments: 345,
      favorites: false,
      detailsInfoVisible: false,
    },{
      cardId: 16,
      userLogo: 'assets/img/card/userLogo01.png',
      userName: 'Luisa',
      img: 'https://serhiyantipov.github.io/videoForTest/img/Time-Lapse_16.jpg',
      title: 'Title Card Details 16',
      description: 'Description Card Details/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      video: 'https://serhiyantipov.github.io/videoForTest/video/Time-Lapse_16.mp4',
      likes: 255,
      comments: 751,
      favorites: true,
      detailsInfoVisible: false,
    },{
      cardId: 17,
      userLogo: 'assets/img/card/userLogo05.png',
      userName: 'Corey',
      img: 'https://serhiyantipov.github.io/videoForTest/img/Time-Lapse_17.jpg',
      title: 'Title Card Details 17',
      description: 'Description Card Details/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      video: 'https://serhiyantipov.github.io/videoForTest/video/Time-Lapse_17.mp4',
      likes: 192,
      comments: 237,
      favorites: false,
      detailsInfoVisible: false,
    },{
      cardId: 18,
      userLogo: 'assets/img/card/userLogo04.png',
      userName: 'Noah',
      img: 'https://serhiyantipov.github.io/videoForTest/img/Time-Lapse_18.jpg',
      title: 'Title Card Details 18',
      description: 'Description Card Details/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      video: 'https://serhiyantipov.github.io/videoForTest/video/Time-Lapse_18.mp4',
      likes: 201,
      comments: 69,
      favorites: true,
      detailsInfoVisible: false,
    },{
      cardId: 19,
      userLogo: 'assets/img/card/userLogo02.png',
      userName: 'William',
      img: 'https://serhiyantipov.github.io/videoForTest/img/Time-Lapse_19.jpg',
      title: 'Title Card Details 19',
      description: 'Description Card Details/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      video: 'https://serhiyantipov.github.io/videoForTest/video/Time-Lapse_19.mp4',
      likes: 560,
      comments: 123,
      favorites: true,
      detailsInfoVisible: false,
    }
  ]

  public testHeaderData = {
    img: 'assets/img/header/header_logo.png',
    title: 'flowers time lapse',
    description: 'You know that feeling when you see a photo of a plant and you can almost smell its scent?',
  }

  public testCategoryData = {
    img: 'assets/img/categoryName/categoryName_flash.png',
    title: {
      specialMarkup: 'Beautiful',
      defaultMarkup: 'Flowers',
    },
  }

  public cardData$: BehaviorSubject<CardInterface[]> = new BehaviorSubject<CardInterface[]>(this.testCardData)
  public headerData$: BehaviorSubject<any> = new BehaviorSubject<any>(this.testHeaderData)
  public categoryData$: BehaviorSubject<any> = new BehaviorSubject<any>(this.testCategoryData)

  // for test subscribe BehaviorSubject
  public categoryDataSubscribe: any;
  public sub!: Subscription;
  // ----------------------------------


  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }

  ngOnInit() {
     // for test subscribe BehaviorSubject
     this.sub = this.categoryData$.subscribe( value => {
      this.categoryDataSubscribe = value
    })
    // for test unsubscribe BehaviorSubject
    // this.sub.unsubscribe()
    // ----------------------------------
  }

  ngOnDestroy() {
  }

  playClick(cardData:any) {
    console.log('app-component playClick() cardId: ', cardData.cardId);
  }

  soundOnOff(soundState:any) {
    console.log('app-component soundOnOff() soundState: ', soundState);
  }

  toggleFavorites(cardId:any) {
    for (let i = 0; i < this.testCardData.length; i++) {
      if (this.testCardData[i].cardId === cardId) {
        if (this.testCardData[i].favorites || !this.testCardData[i].favorites) {
          this.testCardData[i].favorites = !this.testCardData[i].favorites;
          console.log('app-component toggleFavorites() favorites: ', this.testCardData[i].favorites);
        }
      }
    }
  }

  cardShare(cardData:any) {
    console.log('app-component cardShare() cardData: ', cardData);
  }
}
