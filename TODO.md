# v0.2

## `room_data.road_plans`

add in road plans to expansions and colonies
add road anchor points to base plans
create roads between source containers and the anchor points
put the roads in a separate list to not count them in collisions

## `Room.prototype.myFind()`
custom "find" wrapper that extends the constant set
- FIND_MY_DAMAGED_STRUCTURES
- FIND_CONTAINERS
- FIND_MY_DAMAGED_CREEPS

## `global.cmd.js`
new module for running arbitrary commands


# v0.3

## new roles

### power attacker
attacks power bank

### power healer
heals the attacker

### power transporter
picks up power and takes it back to capitol

### mineral driller
drills the mineral in the room if it exists

### mineral transporter
transports the mined minerals to the capitol

### operator power creep
able to operate factory to enable it
transports reagents to labs and results back to storage
transports commodities into/from factory

### commodity collector
goes out to find commodities and returns them to the capitol

## Capital Room
new type of room that is unique
has powerspawn/lab/factory area
all collected power/minerals/commodities go to this room's storage
spawns power creeplab tech to setup reactions and store result
lab tech also feeds factories and sends output to be sold

## Room manager
add in logic to check for a capitol when adding rooms
add in check for if a room can be a capitol

## new prototypes
- `Room.prototype.findPlantLocation()`
- `Room.prototype.getMineralPlans()`
- `Room.prototype.getPlantPlans()`
