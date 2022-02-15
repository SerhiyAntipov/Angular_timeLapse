import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { DataProviderService } from '../data-provider/data-provider.service';
import { MemInterface } from '../../types/mem.interface';

@Injectable({
  providedIn: 'root',
})
export class MemStoreService {
  private memListStore: Array<MemInterface> = [];
  private _mems$: BehaviorSubject<Array<MemInterface>> = new BehaviorSubject<Array<MemInterface>>([]);

  constructor(
    private dataProvider: DataProviderService,
  ) {
    this.loadInitialData();
  }

  public get memList(): Observable<Array<MemInterface>> {
    return this._mems$.asObservable();
  }

  public loadNextMems() {
    const after_meme_id = this.memListStore[this.memListStore.length - 1].meme_id;
    this.dataProvider.getMemList(after_meme_id)
      .subscribe((resp) => {
        if (resp?.success) {
          this.memListStore.push(...resp.data);
          this._mems$.next(this.memListStore);
        }
      }, (err) => console.log('Error retrieving MemList'));
  }

  private loadInitialData() {
    this.dataProvider.getMemList()
      .subscribe((resp) => {
        if (resp?.success) {
          this.memListStore.push(...resp.data);
          this._mems$.next(this.memListStore);
        }
      }, (err) => console.log('Error retrieving MemList'));
  }
}
