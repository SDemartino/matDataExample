import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PackageDataSource } from './package-datasource';
import {PackageService} from '../services/package.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss'],
})
export class PackageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PackageDataSource;

  constructor(private packagesService: PackageService) {}
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['packageTitel', 'packageBemerkungen', 'packageCreateDatum', 'packageUpdateDatum'];

  ngOnInit() {
    this.dataSource = new PackageDataSource(this.paginator, this.sort);
  }

  getPackages() {

  }
}
