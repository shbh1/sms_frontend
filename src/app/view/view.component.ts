import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  record;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dataService.getRecord(params.id).subscribe(response => {
        this.record = response['record'];
      })
    })
  }
  updateRecord(record) {
    this.router.navigate(['/update', record]);
  }
  deleteRecord(record) {
    this.dataService.deleteRecord(record._id).subscribe(res => {
      alert(`Record Removed for City: ${record.city}`)
      this.router.navigate(['/list']);
    })
  }
}
