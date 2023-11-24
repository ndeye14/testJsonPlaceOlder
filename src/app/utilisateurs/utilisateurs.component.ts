import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  users: any;
  albums: any;
  constructor(private dataService: UsersService) { }

  ngOnInit() {
    // Utilisation du service pour récupérer des utilisateurs
    this.users = this.dataService.getUsers();
   
  }

}
