import {GameEngine} from "@/stores/GameEngine";
import {GameHistory} from "@/stores/GameHistory";
import {Timer} from "@/stores/Timer";
import type {TaskInterface} from "@/interface/TaskInterface";
import type {SettingInterface} from "@/interface/SettingInterface";

export class Game {
    static currentGame;
    private settings: SettingInterface | {} = {};
    private engine = {};
    private history = new GameHistory();
    private timer = {};
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
    decidedTasks: TaskInterface[] = [];
    formattedTask: TaskInterface | {} = {};
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
    };

    correctAnswer() {
        return this.engine.currentTask;
    }

    getAccuracy() {
    };

    checkAnswer(solution: string) {
        return this.engine.checkAnswer(solution, this.decidedTasks);
    };
}