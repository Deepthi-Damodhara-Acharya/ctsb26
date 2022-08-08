import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private data:any = {
    isValid: false,
    name: ""
  }

  constructor() { }

  set valid(flag:boolean){
    this.data.isValid = flag;
  }
  set name(n:string){
    this.data.name=n;
  }

  get user(){
    return {...this.data};
  }
}
