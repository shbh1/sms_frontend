import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  profileForm = new FormGroup({
    city: new FormControl(''),
    start_date: new FormControl(''),
    end_date: new FormControl(''),
    status: new FormControl(''),
    price: new FormControl(''),
    color: new FormControl(''),
  });

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.dataService.saveRecord(this.profileForm.value).subscribe(res => {
      alert("Data Added Succesfully")
      this.router.navigate(['/list']);
    })
  }
}
