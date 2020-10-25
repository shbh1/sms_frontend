import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  profileForm
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { };
  id;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params._id;
      this.profileForm = new FormGroup({
        city: new FormControl(params.city),
        start_date: new FormControl(params.start_date),
        end_date: new FormControl(params.end_date),
        status: new FormControl(params.status),
        price: new FormControl(params.price),
        color: new FormControl(params.color),
      });
    })
  }
  onSubmit() {
    this.dataService.updateRecord(this.id, this.profileForm.value).subscribe(res => {
      alert("Data Updated Succesfully")
      this.router.navigate(['/list']);
    });
  }
}
