import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  customUrl = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {
  }

  getList() {
    return this.httpClient.get(this.customUrl);
  }

  delete(criteria) {
    return this.httpClient.delete(this.customUrl + '/' + criteria);
  }

  insert(data) {
    return this.httpClient.post(this.customUrl, data);
  }

  getByCriteria(criteria) {
    return this.httpClient.get(this.customUrl + '/' + criteria);
  }

  update(criteria, data) {
    return this.httpClient.put(this.customUrl + '/' + criteria, data);
  }
}
