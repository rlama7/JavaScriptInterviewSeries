/**
 * JS Events -->
 * 
 */
class Events {
    constructor() {
        this.events = {};
    }

    /**
     * Register an event handlr
     * @param {*} eventName Name of the event 
     * @param {*} callback  callback
     */
    on(eventName, callback) {
        if(this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
 
    }

    /**
     * Trigger all calbacks associates with a given eventName
     * @param {*} eventName 
     */
    trigger(eventName) {
        if(this.events[eventName]) {
            for (let cb of this.events[eventName]) {
                cb();
            }
        }
    }

    /**
     * Remove all event handlers associated with the given eventName
     * @param {*} eventName 
     */
    off(eventName){
        delete this.events[eventName];
    }
}