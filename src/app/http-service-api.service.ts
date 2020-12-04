import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceApiService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    }),
  };
  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public getstudents(): Observable<any> {
    const url = `${this.REST_API_SERVER}/students`;
    return this.httpClient.get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  };
  public addStudent(data): Observable<any> {
    const url = `${this.REST_API_SERVER}/students`;
    return this.httpClient.post<any>(url, data, this.httpOptions);
  }
  public deleteStudent(id: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/students/${id}`;
    return this.httpClient.delete<any>(url, this.httpOptions);
  }
  public getStudentById(id: number): Observable<any> {
    const url = `${this.REST_API_SERVER}/students/${id}`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
  public updataStudent(student, id): Observable<any> {
    const url = `${this.REST_API_SERVER}/students/${id}`;
    return this.httpClient.put<any>(url, student, this.httpOptions);
  }
  public searchStudent(keyword): Observable<any> {
    const url = `${this.REST_API_SERVER}/students/?id=${keyword}`
    return this.httpClient.get<any>(url, this.httpOptions);
  }
  public loadPaging(index, pageSize) {

  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      //// TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  };
}
