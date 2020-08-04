/**
 * Class StopWatch
 * 
 * properties:
 *      startTime
 *      endTime
 *      running
 *      timeLapse
 * 
 * methods:
 *      start()
 *      stop()
 *      reset()
 *      timeLapse()
 */
class StopWatch {
    // properties
    constructor() {
        this.startTime = 0;
        this.endTime = 0; 
        this.running = false;
        this.timeLapse = 0;
    }
    
    // methods
    start() {
        // validate if stop watch is already running
        if(this.running) {
            throw new Error(`Stopwatch has already started...`);
        } 
        console.log(`StopWatch now starting...`);
        this.running = true;
        this.startTime = new Date().getMilliseconds();
        console.log(`   --> Start time: ${this.startTime}`);
    }
    stop() {
        // validate if stop watch is stopped
        if(!this.running) {
            throw new Error(`Stopwatch has already stopped...`);
        }
        console.log(`StopWatch now stopped.`);
        this.running = false;
        this.endTime = new Date().getMilliseconds();
        console.log(`   --> End time: ${this.endTime}`);

    }
    reset() {
        this.startTime = null;
        this.endTime = null;
        this.running = false;
        this.timeLapse = 0;
        console.log(`StopWatch now reset to original state.`);
        
    }
    duration() {
        let seconds =  (this.endTime - this.startTime)/1000;
        console.log(seconds);
        this.timeLapse += seconds; 
    }
    display() {
    }
}
// const time = new Date().getMilliseconds();
// console.log(time/1000);
const sw = new StopWatch();
sw.start();
// sw.start();
// sw.stop();
console.log(sw.duration());

