import {all, create} from "mathjs";
import type {TaskInterface} from "@/interface/TaskInterface";
import type {SettingInterface} from "@/interface/SettingInterface";

enum Operation {
    SUMMING = '+',
    DIFFERENCE = '-',
    MULTI = '*',
    DIVISION = '/',
    EXPO = '**'
}

export class GameEngine {
    private currentTask: TaskInterface | {} = {};
    settings = {};

    constructor(settings: SettingInterface) {
        this.settings = settings;
    }

    createTask(tasks) {
        const operation: string[] = [];

        if (!this.settings.summing) {
            operation.push(Operation.SUMMING);
        }
        if (!this.settings.difference) {
            operation.push(Operation.DIFFERENCE);
        }
        if (!this.settings.multi) {
            operation.push(Operation.MULTI);
        }
        if (!this.settings.division) {
            operation.push(Operation.DIVISION);
        }
        if (!this.settings.expo) {
            operation.push(Operation.EXPO);
        }

        const necessaryTasks = tasks.filter((task) => {
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
        const operators = [
            Operation.SUMMING,
            Operation.MULTI,
            Operation.DIFFERENCE,
            Operation.DIVISION,
            Operation.EXPO
        ];
        const task = this.currentTask.task.split(' ').map((oper) => {
            if(!operators.includes(oper)) {
                return '_';
            }
            return oper;
        }).join(' ');

        return {task: task, result: this.currentTask.result, operation: this.currentTask.operation};
    }

    checkAnswer(solution: string, decided) {
        const math = create(all, {});
        solution = solution.replace(' ** ', '^');
        const answer = math.evaluate(solution);

        if (answer === this.currentTask.result) {
            decided.push(this.currentTask);
            return true;
        }

        return false;
    };

    giveMeAChance() {
        return this.currentTask.task;
    };
}