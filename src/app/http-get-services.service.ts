import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpGetServicesService {
  private httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    }),
  };
  private REST_API_SERVER='http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public getProfile():Observable<any>{
    const url=`${this.REST_API_SERVER}/profile`;
    return this.httpClient.get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse){
    console.log("lalalalalalalala");
    return throwError(error);
    }
}
