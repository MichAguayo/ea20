import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Postre, postresService } from '../postres.service';
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage implements OnInit {
  postreText = ''; 
  postres$: Observable<Postre[]> = new Observable(); // Cambiar a Observable para Firestore
  editingPostreId: string | null = null; 

  constructor(private postreService: postresService, private authService: AuthService, private router: Router) {} 

  ngOnInit() {
    this.postres$ = this.postreService.getPostres(); // Obtener tareas desde Firestore
  }

  addPostre() {
    if (this.postreText.trim()) {
      const newPostre: Postre = { title: this.postreText, done: false };

      if (this.editingPostreId) {
        this.postreService.updatePostre(this.editingPostreId, { title: this.postreText }).then(() => {
          this.editingPostreId = null; 
          this.postreText = '';
        });
      } else {
        this.postreService.addPostre(newPostre).then(() => {
          this.postreText = '';
        });
      }
    }
  }

  editPostre(postre: Postre) {
    this.postreText = postre.title;
    this.editingPostreId = postre.id || null;
  }

  deletePostre(postreId: string) {
    this.postreService.deletePostre(postreId);
  }

  async logout() {
    try {
      await this.authService.logout();
      alert('Sesión cerrada exitosamente');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}