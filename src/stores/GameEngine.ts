import type {SettingInterface} from "@/stores/GameSettings";

interface TaskInterface {
    task: string,
    result: number,
    operation: string[]
}

export class GameEngine {
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
        }];
    decide: TaskInterface[] = [];
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

        const unsuitableTasks = this.tasks.filter((task) => {
            for (let operator of operation) {
                if (task.operation.includes(operator)) {
                    return false;
                }
            }
            return true;
        })

        const random = Math.floor(Math.random() * unsuitableTasks.length)

        return unsuitableTasks[random];
    };

    checkAnswer(solution: TaskInterface, task: TaskInterface) {
        if (solution === task) {
            this.decide.push(task);
        }
    };

    giveMeAChance(task: TaskInterface) {
        return task;
    };
}