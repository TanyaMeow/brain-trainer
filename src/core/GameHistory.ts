export class GameHistory {
    callingDays = this.getDate();
    dayPercent: number = this.getPercent();

    setNewDay(date: string): void {
        if (date in this.callingDays) {
            return;
        }

        this.callingDays[date] = [0, 0];
        this.setDate(this.callingDays);
    }

    calculatePercent(day: string) {
        const now = this.callingDays[day];
        this.dayPercent = Math.round((now[0] / now[1]) * 100);
        this.setPercent(Math.round((now[0] / now[1]) * 100));
    }

    getDate() {
        return (localStorage.getItem('days') === null) ? {} : JSON.parse(localStorage.getItem('days') as string);
    }

    getPercent() {
        return (localStorage.getItem('percent') === null) ? 0 : JSON.parse(localStorage.getItem('percent') as string);
    }

    setDate(date: {}): void {
        localStorage.setItem('days', JSON.stringify(date));
    }

    setLastDay(day: number[]): void {
        localStorage.setItem('lastDay', JSON.stringify(day));
    }

    setPercent(percent: number): void {
        localStorage.setItem('percent', JSON.stringify(percent));
    }
}