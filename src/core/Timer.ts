export class Timer {
    minute: number = 0;
    second: string | number = 0;
    timer;
    gameOver: boolean = false;

    constructor(time: number) {
        const stopTime = new Date().getTime() + (time * 60000)
        this.timer = setInterval(()=> {
            const now = new Date().getTime();
            const remain = stopTime - now;
            this.minute = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
            this.second = Math.floor((remain % (1000 * 60)) / 1000);

            this.second = this.second < 10 ? "0" + this.second : this.second;

            if (remain <= 0) {
                this.gameOver = true;
                this.stopTimer();
            }
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timer);
    }
}