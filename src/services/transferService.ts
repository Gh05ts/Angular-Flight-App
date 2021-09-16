import { Injectable } from "@angular/core";
import { airline } from "src/models/airline";

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  
  private cachedList: airline[] | undefined;
  constructor() {}
  
  setCache(data: airline[]) {
    this.cachedList = data
  }

  getCache() {
    let temp = this.cachedList
    this.clearCache()
    return temp
  }

  clearCache() {
    this.cachedList = undefined
  }

}