import {GameEngine} from "@/stores/GameEngine";
import {GameHistory} from "@/stores/GameHistory";
import type {SettingInterface} from "@/stores/GameSettings";

interface TaskInterface {
    task: string,
    result: number,
    operation: string
}

export class Game {
    static currentGame;
    private engine = {};
    private history = new GameHistory();
    formattedTask: TaskInterface | {} = {};
    settings = {};

    static startGame(settings) {
        this.currentGame = new Game(settings);
    }

    constructor(settings: SettingInterface | {}) {
        this.engine = new GameEngine(settings)
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

    startTimer() {
        const timer = settings.duration;
        let sec = 0;
        let min = 0;

        const stopTime = new Date().getTime() + (timer * 60000);

        const countdown = setInterval(function () {
            const now = new Date().getTime();
            const remain = stopTime - now;
            min = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
            sec = Math.floor((remain % (1000 * 60)) / 1000);

            sec = sec < 10 ? "0" + sec : sec;

            if (remain < 0) {
                clearInterval(countdown);
            }
        }, 1000);
    }
}