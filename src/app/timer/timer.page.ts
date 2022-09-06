import { Component, OnInit } from '@angular/core';
import { HiitDataService, TimeDisplay } from '../services/hiit-data.service';
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements ViewWillEnter, ViewWillLeave {
  firstCountDown: TimeDisplay = { minutes: 0, seconds: 5 };
  currentExercise: string;
  currentRound: number = 1;
  timeToShow: TimeDisplay = { ...this.firstCountDown };
  timer: NodeJS.Timeout;
  status: 'waiting' | 'working' | 'rest' | 'finished';
  killAll: boolean = false;

  constructor(private hiit: HiitDataService) {}

  async ionViewWillEnter() {
    this.killAll = false;
    this.currentRound = 1;
    this.firstCountDown = { minutes: 0, seconds: 5 };
    this.timeToShow = { ...this.firstCountDown };
    this.status = 'waiting';
    this.currentExercise = 'Starting in: ';
    await this.intervalSetter();
    await this.startWorkout();
  }

  ionViewWillLeave() {
    this.killAll = true;
  }

  async startWorkout() {
    for (
      let i = 0;
      i < this.hiit.hiitForm.get('nbrRounds').value && !this.killAll;
      i++
    ) {
      this.currentRound = i + 1;
      if (i > 0) {
        this.status = 'waiting';
        this.currentExercise = 'New Round ! Get prepared !';
        this.timeToShow = { ...this.firstCountDown };
        await this.intervalSetter();
      }
      for (
        let j = 0;
        j < this.hiit.hiitForm.get('exercisesName').value.length &&
        !this.killAll;
        j++
      ) {
        this.status = 'working';
        this.currentExercise = this.hiit.hiitForm.get('exercisesName').value[j];
        this.timeToShow = { ...this.hiit.hiitForm.get('workTime').value };
        await this.intervalSetter();
        if (j + 1 < this.hiit.hiitForm.get('exercisesName').value.length) {
          this.status = 'rest';
          this.currentExercise = 'REST';
          this.timeToShow = { ...this.hiit.hiitForm.get('restTime').value };
          await this.intervalSetter();
        }
      }
    }
    this.currentExercise = 'Well done ! you finished your exercises';
    this.status = 'finished';
  }

  intervalSetter(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.timer = setInterval(() => {
        this.timeToShow = this.countdown(this.timeToShow);
        if (this.countdownIsDone(this.timeToShow) || this.killAll) {
          clearInterval(this.timer);
          resolve();
        }
      }, 1000);
    });
  }

  countdownIsDone(current: TimeDisplay): boolean {
    return current.minutes === 0 && current.seconds === 0;
  }

  countdown(current: TimeDisplay): TimeDisplay {
    if (current.seconds > 0) {
      current.seconds--;
    } else {
      if (current.minutes > 0) {
        current.seconds = 60;
        current.minutes--;
      }
    }
    return current;
  }
}
