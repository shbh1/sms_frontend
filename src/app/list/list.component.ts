import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../data.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

export interface Data {
  name: string;
  start_date: number;
  end_date: number;
  price: string;
  status: string;
  color: string;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  displayedColumns: string[] = ['city', 'start_date', 'end_date', 'price', 'status', 'color'];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.dataService.getRecords().subscribe(response => {
      const TableData: Data[] = [...response['records']]
      this.dataSource = new MatTableDataSource(TableData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  viewrecords(row) {
    this.router.navigate(['/view', { id: row._id }]);
  }
}
