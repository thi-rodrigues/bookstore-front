import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { environment } from "src/environments/environment";
import { Livro } from "./livro.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LivroService {
  url = environment.baseUrl + "books";

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAllByCategoria(id_cat: String): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.url}?categoria=${id_cat}`);
  }

  findById(id: String): Observable<Livro> {
    return this.http.get<Livro>(`${this.url}/${id}`);
  }

  update(livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${this.url}/${livro.id}`, livro);
  }

  create(livro: Livro, id_cat: String): Observable<Livro> {
    return this.http.post<Livro>(`${this.url}?categoria=${id_cat}`, livro);
  }

  delete(id: String):Observable<void> {
    //const url = `${this.baseUrl}/livros/${id}`
    return this.http.delete<void>(`${this.url}/${id}`)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
    });
  }
}
