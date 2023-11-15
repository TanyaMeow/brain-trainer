import {GameEngine} from "@/core/GameEngine";
import {GameHistory} from "@/core/GameHistory";
import {Timer} from "@/core/Timer";
import type {TaskInterface} from "@/interface/TaskInterface";
import type {SettingInterface} from "@/interface/SettingInterface";

export class Game {
    static currentGame: Game;

    currentTask?: TaskInterface;
    decidedSuccessfullyTasks: number = 0;
    decidedTasks: number = 0;
    presentDay: string = '';
    
    static startGame(settings: SettingInterface): void {
        this.currentGame = new Game(settings, new GameEngine(settings), new GameHistory(), new Timer(settings.duration));
    }

    constructor(
        private settings: SettingInterface,
        private engine: GameEngine,
        private history: GameHistory,
        private timer: Timer
    ) {}

    getTask(): TaskInterface {
        this.currentTask = this.engine.createTask();
        return this.currentTask;
    };

    getDayNow(): void {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;

        this.presentDay = `${day}.${month}`;

        this.history.setNewDay(this.presentDay);
        this.history.setLastDay(this.history.callingDays[this.presentDay]);
    }

    correctAnswer(): string {
        return <string>this.currentTask?.task;
    }

    checkAnswer(solution: string): boolean {
        const answer = this.engine.checkAnswer(solution, this.currentTask);

        if (answer) {
            this.decidedSuccessfullyTasks++;
            this.decidedTasks++;

            return answer;
        }
        this.decidedTasks++;

        return answer;
    };

    updateHistory(): void {
        const days = this.history.callingDays;
        const currentDay = days[this.presentDay];

        if (currentDay.length !== 0) {
            currentDay[0] += this.decidedSuccessfullyTasks;
            currentDay[1] += this.decidedTasks;

            this.history.setDate(days);
            this.history.setLastDay(currentDay);
            this.history.calculatePercent(this.presentDay);
            return
        }

        currentDay.push(this.decidedSuccessfullyTasks);
        currentDay.push(this.decidedTasks);

        this.history.setDate(days);
        this.history.setLastDay(currentDay);
        this.history.calculatePercent(this.presentDay);
    }

    stopGame(): void {
        this.timer.stopTimer();
    }
}