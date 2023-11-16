export class GameHistory {
    callingDays = this.getDate();
    dayPercent: number = this.getPercent();

    public setNewDay(date: string): void {
        if (date in this.callingDays) {
            return;
        }

        this.callingDays[date] = [0, 0];
        this.setDate(this.callingDays);
    }

    public calculatePercent(day: string) {
        const now = this.callingDays[day];
        this.dayPercent = Math.round((now[0] / now[1]) * 100);
        this.setPercent(Math.round((now[0] / now[1]) * 100) || 0);
    }

    public getDate() {
        return (localStorage.getItem('days') === null) ? {} : JSON.parse(localStorage.getItem('days') as string);
    }

    public getPercent() {
        return (localStorage.getItem('percent') === null) ? 0 : JSON.parse(localStorage.getItem('percent') as string);
    }

    public setDate(date: {}): void {
        localStorage.setItem('days', JSON.stringify(date));
    }

    public setLastDay(day: number[]): void {
        localStorage.setItem('lastDay', JSON.stringify(day));
    }

    public setPercent(percent: number): void {
        localStorage.setItem('percent', JSON.stringify(percent));
    }
}