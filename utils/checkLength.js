const checkLength = (noteObject) => {
  
    for (const [key, value] of Object.entries(noteObject)) {

        if (key === 'title' && value.length > 30) {

            return false
        }

        if (key === 'content' && value.length > 100) {

            return false
        }
    }

    return true
}

module.exports = checkLength