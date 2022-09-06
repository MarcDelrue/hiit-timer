import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PickerController } from '@ionic/angular';
import { PickerColumnOption } from '@ionic/core/dist/types/components/picker/picker-interface';
import { DecimalPipe } from '@angular/common';
import { HiitDataService } from '../services/hiit-data.service';

@Component({
  selector: 'app-hiit',
  templateUrl: './hiit.page.html',
  styleUrls: ['./hiit.page.scss'],
  providers: [DecimalPipe],
})
export class HiitPage implements OnInit {
  exerciseName: FormControl = new FormControl<string>('');

  constructor(
    private pickerCtrl: PickerController,
    private decimalPipe: DecimalPipe,
    public hiit: HiitDataService
  ) {}

  ngOnInit() {}

  async openTimer(type: 'exercise' | 'rest') {
    const picker = await this.pickerCtrl.create({
      columns: [
        {
          name: 'minutes',
          options: this.createStepper(3),
          selectedIndex:
            type === 'exercise'
              ? this.hiit.hiitForm.get('workTime').value.minutes
              : this.hiit.hiitForm.get('restTime').value.minutes,
        },
        {
          name: 'seconds',
          options: this.createStepper(59),
          selectedIndex:
            type === 'exercise'
              ? this.hiit.hiitForm.get('workTime').value.seconds
              : this.hiit.hiitForm.get('restTime').value.seconds,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: (value) => {
            if (type === 'exercise') {
              this.hiit.hiitForm.get('workTime').setValue({
                minutes: value.minutes.value,
                seconds: value.seconds.value,
              });
            } else {
              this.hiit.hiitForm.get('restTime').setValue({
                minutes: value.minutes.value,
                seconds: value.seconds.value,
              });
            }
          },
        },
      ],
    });
    await picker.present();
  }

  changeNbrRound(change) {
    const tempNbrRounds = this.hiit.hiitForm.get('nbrRounds').value;
    if (tempNbrRounds + change > 0) {
      this.hiit.hiitForm.get('nbrRounds').setValue(tempNbrRounds + change);
    }
  }

  addToExerciseArray() {
    const exerciseArray = this.hiit.hiitForm.get('exercisesName').value;
    if (!this.exerciseName.value) {
      return;
    }
    this.hiit.hiitForm
      .get('exercisesName')
      .setValue([this.exerciseName.value, ...exerciseArray]);
    this.exerciseName.setValue('');
  }

  removeExerciseAt(index: number) {
    const exerciseArray = this.hiit.hiitForm.get('exercisesName').value;
    exerciseArray.splice(index, 1);
    this.hiit.hiitForm.get('exercisesName').setValue(exerciseArray);
  }

  private createStepper(max: number): PickerColumnOption[] {
    const res: PickerColumnOption[] = [];
    for (let i = 0; i <= max; i++) {
      res.push({
        value: i,
        text: this.decimalPipe.transform(i.toString(), '2.'),
      });
    }
    return res;
  }
}
