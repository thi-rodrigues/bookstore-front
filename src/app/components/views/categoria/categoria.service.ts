import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Categoria } from "./categoria.model";

@Injectable({
  providedIn: "root",
})
export class CategoriaService {
  baseUrl: string = environment.baseUrl + "/categorias"; // back-end

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}`);
  }

  findById(id: String): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.baseUrl}/${id}`);
  }

  create(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${this.baseUrl}`, categoria);
  }

  delete(id: String): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  messagem(str: string): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
    });
  }
}
