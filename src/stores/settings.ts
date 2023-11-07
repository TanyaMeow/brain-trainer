interface SettingInterface {
    duration: number;
    complex: number;
    summing: boolean;
    difference: boolean;
    multi: boolean;
    division: boolean;
    expo: boolean;
}

export class SettingsStore {
    private static setting: SettingInterface | {} = {};
    static getSettings() {
        return this.setting;
    }

    static setSettings (settings: SettingInterface) {
        this.setting = settings;
    }
}