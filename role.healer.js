const Tasks = require("data.tasks");
const TaskRunner = require("global.task_runner");

hlog("Creating healer role...");

/**
 * healer that heals any damaged creeps in the room
 */
Creep.prototype.runHealer = function () {
    if (this.memory.task == null) {
        let creeps = this.room.find(FIND_MY_CREEPS, {
            // that are damaged
            filter: creep => creep.hits < creep.hitsMax,
        });
        // if we found any
        if (creeps.length > 0) {
            // find the closest one
            let target = this.pos.findClosestByPath(creeps);
            if (target != null) {
                // save the creep's id in memory
                this.memory.task = Tasks.heal(target);
            }else{
                // assign a new task
                this.memory.task = Tasks.idle(this.memory.room_name, 10);
            }

        }
    }
    // run the task
    TaskRunner.run(this);
};