import {Injectable} from '@angular/core';
import {SERVER_URL} from '../objects/global-vals';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Packages} from '../objects/packages';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient) {
  }

  packagesListUrl = `${SERVER_URL}/packagelist/`;
  packagesDetail = `${SERVER_URL}/package/`;

  getPackagesList(): Observable<Packages[]> {
    return this.http.get<Packages[]>(this.packagesListUrl);
  }

  getPackage(id: String) {
    return this.http.get<Packages>(this.packagesDetail + id);
  }

  addPackage(packages: Packages) {
    return this.http.post(this.packagesListUrl, packages);
  }

  updatePackage(id: String, packages: Packages) {
    return this.http.put(this.packagesDetail + id + '/', packages);
  }

  deletePackage(id: String) {
    return this.http.delete(this.packagesDetail + id + '/');
  }
}
