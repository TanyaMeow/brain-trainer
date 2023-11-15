export class Timer {
    minute: number = 0;
    second: string | number = 0;
    timer: number;
    // FIXME таймер не должен знат об игре ничего. Он может знать, что закончилось время, но не в игре, а в таймере (DONE)
    isFinished: boolean = false;

    constructor(time: number) {
        const stopTime: number = new Date().getTime() + (time * 60000)
        this.timer = setInterval((): void => {
            const now: number = new Date().getTime();
            const remain: number = stopTime - now;
            this.minute = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
            this.second = Math.floor((remain % (1000 * 60)) / 1000);

            this.second = this.second < 10 ? "0" + this.second : this.second;

            if (remain <= 0) {
                this.isFinished = true;
                this.stopTimer();
            }
        }, 1000);
    }

    stopTimer(): void {
        clearInterval(this.timer);
    }
}