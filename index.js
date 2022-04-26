// Code your solution in this file!
const scuberHq = 42

function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - scuberHq)
}

function distanceFromHqInFeet(distance) {
   return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, destination) {
    let blocks = Math.abs(start - destination)
    return blocks * 264
}

function calculatesFarePrice(start, destination) {
    let blocks = Math.abs(start - destination)
    let distance = blocks * 264
    let freeComp = distance - 400
    let flatFee = 25
    if (distance < 400) {
        return 0
    }
    else if (distance > 400 && distance < 2000) {
        return freeComp * 0.02
    }
    else if (distance > 2000 && distance < 2500) {
        return flatFee
    }
    else if (distance > 2500) {
        return 'cannot travel that far'
    }
}
