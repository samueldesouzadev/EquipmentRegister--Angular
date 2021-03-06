import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClienteModel} from './clientes/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {
  }

  listarClientes(): Observable<any> {
    return this.http.get('http://localhost:8080/cliente/findAll');
  }

  cadastrarCliete(cliente: ClienteModel): Observable<any> {
    return this.http.post('http://localhost:8080/cliente/save', cliente);
  }

  removerCliente(id: any): Observable<any> {
    return this.http.delete('http://localhost:8080/cliente/delete'.concat(id));
  }


}
