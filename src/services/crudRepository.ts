import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, pipe, throwError } from "rxjs";
import { switchMap, tap } from "rxjs/operators"
import { airline } from "src/models/airline";

@Injectable({
  providedIn: 'root'
})
export class crudRepo {
  private url = 'api/airLines'
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
        } else {
          data.id = crudRepo.magicNumber
          crudRepo.magicNumber += 1
          return this.http.post<airline>(this.url, data)
        }
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