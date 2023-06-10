
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IPizza } from '../interfaces/ipizza';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl:string = environment.urlTodo

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<IPizza[]>(this.apiUrl);
  }

  getById(id:number){
    return this.http.get<IPizza>(`${this.apiUrl}/${id}`);
  }

  post(data:Partial<IPizza>){
    return this.http.post<IPizza>(`${this.apiUrl}`,data);
  }

  put(data:Partial<IPizza>){
    return this.http.put<IPizza>(`${this.apiUrl}/${data.id}`,data);
  }

  delete(id:number){
    return this.http.delete<IPizza>(`${this.apiUrl}/${id}`);
  }

}
