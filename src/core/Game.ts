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
    tasks: TaskInterface[] = [
        {
            task: '8 + 2 - 5 * 2',
            result: 0,
            operation: ['+', '-', '*']
        },
        {
            task: '40 / 5 + 2',
            result: 10,
            operation: ['/', '+']
        },
        {
            task: '8 * 8',
            result: 64,
            operation: ['*']
        },
        {
            task: '50 + 410',
            result: 460,
            operation: ['+']
        },
        {
            task: '24 / 8 * 8',
            result: 24,
            operation: ['/', '*']
        },
        {
            task: '8 * 8 * 8',
            result: 512,
            operation: ['*']
        },
        {
            task: '5 ** 2',
            result: 25,
            operation: ['**']
        },
        {
            task: '36 / 2 ** 2',
            result: 9,
            operation: ['/', '**']
        },
        {
            task: '120 + 60 - 4 / 2',
            result: 178,
            operation: ['/', '+', '-']
        },
        {
            task: '2 + 2',
            result: 4,
            operation: ['+']
        },
        {
            task: '5 - 4',
            result: 1,
            operation: ['-']
        }
    ];
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
        this.formattedTask = this.engine.createTask(this.tasks);
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