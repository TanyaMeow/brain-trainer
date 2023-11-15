import {all, create} from "mathjs";
import type {MathJsInstance} from "mathjs";
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
    private math: MathJsInstance = create(all, {});

    constructor(private settings: SettingInterface) {}

    private getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min)) + min;
    }

    createTask(): TaskInterface {
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

        let task: string = '';

        for (let i = 0; i < this.settings.complex; i++) {
            const leftOperand: string = String(this.getRandomInt(1, 100));
            const random: number = Math.floor(Math.random() * operation.length);
            const operator: string = operation[random];

            let expression: string = leftOperand + ' ' + operator + ' ';

            if (i === this.settings.complex - 1) {
                expression = leftOperand;
            }

            task += expression;
        }

        const result: number = Math.floor(this.math.evaluate(task));

        return {task: task, result: result, formatted: this.setComplex(task)};
    };

    setComplex(expression: string): string {
        const operators: Operation[] = [
            Operation.SUMMING,
            Operation.MULTI,
            Operation.DIFFERENCE,
            Operation.DIVISION,
            Operation.EXPO
        ];
        return expression.split(' ').map((oper: string): string => {
            if (!operators.includes(<Operation>oper)) {
                return '_';
            }

            return oper;
        }).join(' ');
    }

    checkAnswer(solution: string, currentTask: TaskInterface | undefined): boolean {
        solution = solution.replace(' ** ', '^');
        const answer: number = Math.floor(this.math.evaluate(solution));

        return answer === currentTask?.result;
    };
}