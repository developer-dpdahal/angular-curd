import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {GeneralService} from '../../service/general.service';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });


  constructor(private generalService: GeneralService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getSingleData();
  }

  getSingleData() {
    this.generalService.getByCriteria(this.activeRoute.snapshot.params.id).subscribe((res) => {
      this.updateForm = new FormGroup({
        name: new FormControl(res['name']),
        email: new FormControl(res['email']),
        address: new FormControl(res['address'])
      });
    });

  }

  updateUser() {
    this.generalService.update(this.activeRoute.snapshot.params.id, this.updateForm.value).subscribe((res) => {
      Swal.fire({
        icon: 'success',
        title: 'Data was successfully updated',
        showConfirmButton: false,
        timer: 2000
      });
    });
  }

}
