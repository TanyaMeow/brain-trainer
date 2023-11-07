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
    public setting: SettingInterface | {} = {};

    static setSettings (settings: SettingInterface) {
        this.setting = settings;
    }
}