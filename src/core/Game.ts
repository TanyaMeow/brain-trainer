import {GameEngine} from "@/core/GameEngine";
import {GameHistory} from "@/core/GameHistory";
import {Timer} from "@/core/Timer";
import type {TaskInterface} from "@/interface/TaskInterface";
import type {SettingInterface} from "@/interface/SettingInterface";

export class Game {
    static currentGame;
    private settings: SettingInterface | {} = {};
    private engine = {};
    private history = new GameHistory();
    private timer = {};
    formattedTask: TaskInterface | {} = {};
    decidedSuccessfullyTasks: number = 0;
    decidedTasks: number = 0;
    presentDay: string = '';
    
    static startGame(settings: SettingInterface) {
        this.currentGame = new Game(settings);
    }

    constructor(settings: SettingInterface | {}) {
        this.engine = new GameEngine(settings)
        this.timer = new Timer(settings.duration);
        this.settings = settings;
    }

    getTask() {
        this.formattedTask = this.engine.createTask();
        return this.formattedTask;
    };

    getDayNow() {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;

        this.presentDay = `${day}.${month}`;

        this.history.setNewDay(this.presentDay);
        this.history.setDay(this.history.callingDays[this.presentDay]);
    }

    correctAnswer() {
        return this.engine.currentTask;
    }

    getAccuracy() {

    };

    checkAnswer(solution: string) {
        const answer = this.engine.checkAnswer(solution, this.decidedSuccessfullyTasks, this.decidedTasks);

        if (answer) {
            this.decidedSuccessfullyTasks++;
            this.decidedTasks++;

            return answer;
        }
        this.decidedTasks++;

        return answer;
    };

    updateHistory() {
        const days = this.history.callingDays;
        const currentDay = days[this.presentDay];

        if (currentDay.length !== 0) {
            currentDay[0] += this.decidedSuccessfullyTasks;
            currentDay[1] += this.decidedTasks;

            this.history.setDate(days);
            this.history.setDay(currentDay);
            this.history.calculatePercent(this.presentDay);
            return
        }

        currentDay.push(this.decidedSuccessfullyTasks);
        currentDay.push(this.decidedTasks);

        this.history.setDate(days);
        this.history.setDay(currentDay);
        this.history.calculatePercent(this.presentDay);
    }
}