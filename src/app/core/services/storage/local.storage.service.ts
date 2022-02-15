import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Storage } from './storage';

export function storageFactory() {
  // eslint-disable-next-line valid-typeof
  return typeof window === undefined || typeof localStorage === undefined
    ? null
    : localStorage;
}

export const LOCAL_STORAGE_TOKEN = new InjectionToken(
  'memland-app-local-storage',
  { factory: storageFactory },
);

@Injectable({
  providedIn: 'root',
})
export class LocalStorage implements Storage {
  public get(name: string): string | null {
    return localStorage.getItem(name);
  }

  public set(name: string, value: string): void {
    localStorage.setItem(name, value);
  }

  public has(name: string): boolean {
    return localStorage.getItem(name) !== null;
  }

  public delete(name: string): void {
    localStorage.removeItem(name);
  }

  constructor(@Inject(LOCAL_STORAGE_TOKEN) private storage: Storage) { }
}
