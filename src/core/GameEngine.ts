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
    // FIXME исправь типизацию
    // FIXME
    private currentTask: TaskInterface | {} = {};
    private math = create(all, {});
    // FIXME remove
    settings = {};

    constructor(settings: SettingInterface) {
        // FIXME если в конструкторе прописать модификатор доступа, то присвоение можно удалить
        //  private settings: SettingInterface
        this.settings = settings;
    }

    // FIXME private
    getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min)) + min;
    }

    createTask() {
        const operation: string[] = [];

        if (this.settings.summing) {
            operation.push(Operation.SUMMING);
        }
        if (this.settings.difference) {
            operation.push(Operation.DIFFERENCE);
        }
        if (this.settings.multi) {
            operation.push(Operation.MULTI);
        }
        if (this.settings.division) {
            operation.push(Operation.DIVISION);
        }
        if (this.settings.expo) {
            operation.push(Operation.EXPO);
        }

        let task = '';

        for (let i = 0; i < this.settings.complex; i++) {
            const leftOperand = String(this.getRandomInt(1, 100));
            const random = Math.floor(Math.random() * operation.length);
            const operator = operation[random];

            let expression = leftOperand + ' ' + operator + ' ';

            if (i === this.settings.complex - 1) {
                expression = leftOperand;
            }

            task += expression;
        }

        const result = Math.floor(this.math.evaluate(task));

        this.currentTask = {task: task, result: result};
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

        return {task: task, result: this.currentTask.result};
    }

    checkAnswer(solution: string) {
        solution = solution.replace(' ** ', '^');
        const answer = Math.floor(this.math.evaluate(solution));

        return answer === this.currentTask.result;
    };

    giveMeAChance() {
        return this.currentTask.task;
    };
}