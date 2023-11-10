import {GameEngine} from "@/stores/GameEngine";
import {GameHistory} from "@/stores/GameHistory";
import type {SettingInterface} from "@/stores/GameSettings";
import {Timer} from "@/stores/Timer";

interface TaskInterface {
    task: string,
    result: number,
    operation: string
}

export class Game {
    formattedTask: TaskInterface | {} = {};
    settings = {};
    static currentGame;
    private engine = {};
    private history = new GameHistory();
    private timer = {};

    static startGame(settings) {
        this.currentGame = new Game(settings);
    }

    constructor(settings: SettingInterface | {}) {
        this.engine = new GameEngine(settings)
        this.timer = new Timer(settings.duration);
        this.settings = settings;
    }

    getTask() {
        this.formattedTask = this.engine.createTask();
    };

    getAccuracy() {
    };

    checkAnswer(solution) {
        this.engine.checkAnswer(solution);
    };
}