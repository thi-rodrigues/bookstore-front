import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Livro } from "./livro.model";
import { Categoria } from "./../categoria/categoria.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LivroService {
  url = environment.baseUrl + "books";

  constructor(private http: HttpClient) {}

  findAllByCategoria(id_cat: String): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.url}?categoria=${id_cat}`);
  }
}
