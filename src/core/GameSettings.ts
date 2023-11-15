import type {SettingInterface} from "@/interface/SettingInterface";

export class Setting implements SettingInterface{
    static initialState: SettingInterface = {
        duration: 1,
        complex: 1,
        summing: false,
        difference: false,
        multi: false,
        division: false,
        expo: false
    }

    duration: number;
    complex: number;
    summing: boolean;
    difference: boolean;
    multi: boolean;
    division: boolean;
    expo: boolean;

    constructor({duration, complex, summing, difference, multi, division, expo}: SettingInterface) {
        this.duration = duration;
        this.complex = complex;
        this.summing = summing;
        this.difference = difference;
        this.multi = multi;
        this.division = division;
        this.expo = expo;
    }
}