const fs = require('fs')

class FileItem {
    constructor(filePath) {
        this.filePath = filePath
    }

    read() {
        fs.readFile(this.filePath, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log(data.toString())
        })
    }

    write(data) {
        fs.writeFile(this.filePath, data, (error) => {
            if (error) {
                console.log(error.message)
            }
        })


    }
}

const notesFile = new FileItem ('./notes.txt') 

// notesFile.read()

notesFile.write('Hello World, I am writting with OOP')

