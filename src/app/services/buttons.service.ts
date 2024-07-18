import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {
  constructor(private http: HttpClient, private router: Router) {}

  saveData(data: any): Observable<any> {
    // Logic to save data
    return this.http.post('/api/save', data);
  }

  clearData(): void {
    // Logic to clear data
    // This would typically reset the form fields
  }

  editData(data: any): Observable<any> {
    // Logic to edit data
    return this.http.put('/api/edit', data);
  }

  exitForm(): void {
    // Logic to exit the form
    this.router.navigate(['/home']);
  }
}
