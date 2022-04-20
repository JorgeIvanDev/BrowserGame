function newPlayableCharacter(x, y) {
    const element = newImage('assets/HOMIETAQUITO.png')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/HOMIETAQUITO.png`
        }
        if (direction === 'west') {
            element.src = `assets/HOMIETAQUITO.png`
        }
        if (direction === 'north') {
            element.src = `assets/HOMIETAQUITO.png`
        }
        if (direction === 'east') {
            element.src = `assets/HOMIETAQUITO.png`
        }
        if (direction === 'south') {
            element.src = `assets/HOMIETAQUITO.png`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}