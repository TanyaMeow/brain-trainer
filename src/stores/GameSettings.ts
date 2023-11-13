import type {SettingInterface} from "@/interface/SettingInterface";

export class SettingsStore {
    private static setting: SettingInterface | {} = {};
    static getSettings() {
        return this.setting;
    }

    static setSettings (settings: SettingInterface) {
        this.setting = settings;
    }
}

export class Setting implements SettingInterface{
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