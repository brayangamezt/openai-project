import { Injectable } from '@angular/core';
import { ortographyUseCase } from '../../core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  constructor() { }

  checkOrtography( prompt:string ){
    return from( ortographyUseCase( prompt ) )
  }

}
