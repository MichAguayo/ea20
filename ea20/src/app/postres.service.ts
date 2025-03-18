
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, updateDoc, deleteDoc, doc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Postre {
  id?: string;
  title: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class postresService {
  private postresCollection = collection(this.firestore, 'postres');

  constructor(private firestore: Firestore) {}

  getPostres(): Observable<Postre[]> {
    return collectionData(this.postresCollection, { idField: 'id' }) as Observable<Postre[]>;
  }

  addPostre(postre: Postre) {
    return addDoc(this.postresCollection, postre);
  }

  updatePostre(id: string, data: Partial<Postre>) {
    const postreDoc = doc(this.firestore, `postres/${id}`);
    return updateDoc(postreDoc, data);
  }

  deletePostre(id: string) {
    const postreDoc = doc(this.firestore, `postres/${id}`);
    return deleteDoc(postreDoc);
  }
}