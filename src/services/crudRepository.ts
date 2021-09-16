import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { switchMap } from "rxjs/operators"
import { airline } from "src/models/airline";

@Injectable({
  providedIn: 'root'
})
export class crudRepo {
  private url = 'api/AirLines'
  static magicNumber: number = 3
  
  constructor(private http: HttpClient) {}

  getAllFlights(): Observable<airline[]> {
    return this.http.get<airline[]>(this.url)
  }

  addFlight(data: airline): Observable<airline> | Observable<never> {
    return this.http.get<airline[]>(this.url).pipe(
      switchMap(resp => {
        const isPresent = resp.find(obj => obj.providerCode === data.providerCode)
        if (isPresent) {
          return throwError("Provider code already exists")
        }
        data.id = crudRepo.magicNumber++
        return this.http.post<airline>(this.url, data)
      })
    )
  }

  deleteFlight(data: any) {
    // pass
  }

  modifyFlight(data: any) {
    // pass
  }
}