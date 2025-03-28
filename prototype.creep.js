require('role.attacker');
require('role.builder');
require('role.claimer');
require('role.driller');
require('role.healer');
require('role.queen');
require('role.repairer');
require('role.scout');
require('role.transporter');
require('role.upgrader');

hlog("Creating base creep prototypes...");

/**
 * get a building target
 * @return {ConstructionSite} The dot's width, in pixels.
 */
Creep.prototype.getBuildTarget = function () {
    // find and return the closest construction site
    return this.pos.findClosestByPath(FIND_MY_CONSTRUCTION_SITES);
};
/**
 * gets a general dumping target
 * @return {Structure} The dot's width, in pixels.
 */
Creep.prototype.getDumpTarget = function () {
    // find any extensions that are not full
    let targets = this.room.findLowExtensions();

    // if no extensions are found
    if (targets.length == 0) {
        // find all the spawns that are not full
        targets = this.room.findLowSpawns();
    }

    // if no spawns are found
    if (targets.length == 0 &&
        // and there is a terminal in the room
        this.room.terminal != undefined &&
        // and the terminal is not full
        this.room.terminal.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
        // return the terminal
        return this.room.terminal;
    }

    // return the closest one by path
    return this.pos.findClosestByPath(targets);
};
/**
 * gets a general filling target
 * @return {Structure|Resource} The dot's width, in pixels.
 */
Creep.prototype.getFillTarget = function () {
    // find any dropped energy
    let targets = this.room.find(FIND_DROPPED_RESOURCES, {filter: {resourceType: RESOURCE_ENERGY}});

    // if no dropped energy is found
    if (targets.length == 0) {
        // find any non-empty containers
        targets = this.room.findFilledContainers();
    }

    // if no spawns are found
    if (targets.length == 0 &&
        // and there is a terminal in the room
        this.room.terminal != undefined &&
        // and the terminal is not empty
        this.room.storage.store[RESOURCE_ENERGY] > 0) {
        // return the terminal
        return this.room.terminal;
    }

    // return the closest one by path
    return this.pos.findClosestByPath(targets);
};
/**
 * get a repairing target
 * @return {Structure} The dot's width, in pixels.
 */
Creep.prototype.getRepairTarget = function () {
    // return the closest damaged structure
    return this.pos.findClosestByPath(FIND_STRUCTURES, {
        // declare the filter function to use
        filter: structure => structure.hits < structure.hitsMax,
    });
};
/**
 * gets a dumping target for a queen
 * @return {Structure} The dot's width, in pixels.
 */
Creep.prototype.getQueenDumpTarget = function () {
    // find all the towers that are not full
    let targets = this.room.findLowTowers();

    // if no towers are found
    if (targets.length == 0) {
        // find any extensions that are not full
        targets = this.room.findLowExtensions();
    }

    // if no extensions are found
    if (targets.length == 0) {
        // find all the spawns that are not full
        targets = this.room.findLowSpawns();
    }

    // if no spawns are found
    if (targets.length == 0 &&
        // and there is a terminal in the room
        this.room.terminal != undefined &&
        // and the terminal is not full
        this.room.terminal.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
        // return the terminal
        return this.room.terminal;
    }

    // return the closest one by path
    return this.pos.findClosestByPath(targets);
};
/**
 * move toward the idle location for the current room to get out of the way
 */
Creep.prototype.idle = function () {
    // grab the room data
    let room_data = Memory.room_log[this.room.name];

    // if we are more than 3 tiles away
    if (!this.pos.inRangeTo(room_data.idle_x, room_data.idle_y, 3)) {
        // move toward the idle location
        this.moveTo(room_data.idle_x, room_data.idle_y);
    }
};
/**
 * run the relevant function for the role that this creep has
 */
Creep.prototype.run = function () {
    // switch based on the creep's role
    switch (this.memory.role) {
        // if the role matches
        case ATTACKER.NAME:
            // call the function for this role
            this.runAttacker();
            // break the switch
            break;
        case BUILDER.NAME:
            this.runBuilder();
            break;
        case CLAIMER.NAME:
            this.runClaimer();
            break;
        case DRILLER.NAME:
            this.runDriller();
            break;
        case HEALER.NAME:
            this.runHealer();
            break;
        case QUEEN.NAME:
            this.runQueen();
            break;
        case REPAIRER.NAME:
            this.runRepairer();
            break;
        case SCOUT.NAME:
            this.runScout();
            break;
        case TRANSPORTER.NAME:
            this.runTransporter();
            break;
        case UPGRADER.NAME:
            this.runUpgrader();
            break;
    }
};
