import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

export interface TimeDisplay {
  minutes: number;
  seconds: number;
}

@Injectable({
  providedIn: 'root',
})
export class HiitDataService {
  constructor(private formBuilder: FormBuilder) {}

  startsImmediately = false;

  hiitForm = this.formBuilder.group({
    exercisesName: [['Burpees', 'Jumping Jack', 'Push up']],
    workTime: [{ minutes: 0, seconds: 10 }],
    restTime: [{ minutes: 0, seconds: 10 }],
    nbrRounds: [1],
  });
}
