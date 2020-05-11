import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {GeneralService} from '../../service/general.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private generalService: GeneralService) {
  }

  ngOnInit(): void {

  }

  createUser() {
    this.generalService.insert(this.registerForm.value).subscribe((res) => {
      Swal.fire({
        icon: 'success',
        title: 'Data was successfully inserted',
        showConfirmButton: false,
        timer: 2000
      });

      this.registerForm.reset({});
    });
  }

}
