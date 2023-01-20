import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}

  log(message: string, obj: any): void {
    console.log(message, obj);
  }
}
