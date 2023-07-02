import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WriterService {
  
  writerUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getWritersById = (writerId: number) => {
    console.log(writerId);
    return this.http.get(`${this.writerUrl}/${writerId}`);
  };

}
