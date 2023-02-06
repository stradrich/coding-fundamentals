function possibleBonus(position1, position2) {
    const distance = position2 - position1;
    if (position1 > position2) {
        return false
    } else if (distance < 7) {
        return true
    } else {
        return false 
    }
}
