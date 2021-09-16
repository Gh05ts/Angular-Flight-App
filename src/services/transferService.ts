import { Injectable } from "@angular/core";
import { airline } from "src/models/airline";
import { crudRepo } from "./crudRepository";

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  
  private cachedList: airline[] | undefined;
  private isValid: boolean = false
  constructor(private repo: crudRepo) {}
  
  setCache(data: airline[]) {
    if (typeof data != undefined) {
      this.cachedList = data
      this.isValid = true
    } else {
      this.update()
    }
  }

  getCache() {
    const temp = this.cachedList
    // this.clearCache()
    // this.isValid = false
    return temp
  }

  clearCache() {
    this.cachedList = undefined
  }

  update() {
    if(!this.isValid || typeof this.cachedList == undefined) {
      this.repo.getAllFlights().subscribe({
        next: resp => {
          console.info('Cache set...')
          this.cachedList = resp
          this.isValid = true
        },
        error: err => {
          console.warn('Cache down...')
          // alert('Cache down, please refresh')
          this.isValid = false
        }
      })
    }
  }

  invalidateCache() {
    this.cachedList = undefined
    this.isValid = false
  }

}