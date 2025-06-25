import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SudokuService {
  private apiUrl = 'http://127.0.0.1:5000/solve';

  constructor(private http: HttpClient) {}

  solveSudoku(board: number[][]): Observable<any> {
    return this.http.post<any>(this.apiUrl, { board });
  }
}