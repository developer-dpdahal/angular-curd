import {Component, OnInit} from '@angular/core';
import {GeneralService} from '../../service/general.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  usersList: any = [];

  constructor(private generalService: GeneralService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.generalService.getList().subscribe((res) => {
      this.usersList = res;
    });
  }

  deleteUser(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.generalService.delete(id).subscribe((res) => {
          this.getUsers();
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });

  }

}
