import type {SettingInterface} from "@/stores/GameSettings";
import {all, create} from "mathjs";

interface TaskInterface {
    task: string,
    result: number,
    operation: string[]
}

export class GameEngine {
    private currentTask: TaskInterface | {} = {};
    tasks: TaskInterface[] = [
        {
            task: '2 - 2 + 2',
            result: 0,
            operation: ['+', '-']
        },
        {
            task: '2 / 2',
            result: 0,
            operation: ['/']
        },
        {
            task: '2 / 2 * 4',
            result: 4,
            operation: ['/', '*']
        }
        ];
    decidedTasks: TaskInterface[] = [];
    settings = {};

    constructor(settings: SettingInterface) {
        this.settings = settings;
    }

    createTask() {
        const operation: string[] = [];

        if (!this.settings.summing) {
            operation.push('+');
        }
        if (!this.settings.difference) {
            operation.push('-');
        }
        if (!this.settings.multi) {
            operation.push('*');
        }
        if (!this.settings.division) {
            operation.push('/');
        }
        if (!this.settings.expo) {
            operation.push('**');
        }

        const necessaryTasks = this.tasks.filter((task) => {
            for (let operator of operation) {
                if (task.operation.includes(operator)) {
                    return false;
                }
            }
            return true;
        })

        const random = Math.floor(Math.random() * necessaryTasks.length)
        this.currentTask = necessaryTasks[random];
        return this.setComplex();
    };

    setComplex() {
        const operators = ['*', '+', '/', '-', '**'];
        const task = this.currentTask.task.split(' ').map((oper) => {
            if(!operators.includes(oper)) {
                return '_';
            }
            return oper;
        }).join(' ');

        return {task: task, result: this.currentTask.result, operation: this.currentTask.operation};
    }

    checkAnswer(solution: TaskInterface) {
        const math = create(all, {});
        const answer = math.evaluate(solution);

        if (answer === this.currentTask.result) {
            this.decidedTasks.push(this.currentTask);
        }
    };

    giveMeAChance() {
        return this.currentTask.task;
    };
}