export class GameHistory {
    callingDays = {'8.11': [10, 13]};
    countTasks = 25;
    decide = 0;

    setDecideAnswer() {
        this.decide++;
        console.log(this.decide)
    }
}