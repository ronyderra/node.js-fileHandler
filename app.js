const fs = require("fs");

fs.writeFile("./data/first-file.txt", "ronyderra", (err) => {

    if (err) {
        console.log(err)
        return;
    }

    fs.appendFile("./data/first-file.txt", " derrarony@gmail.com ", (err) => {
        if (err) {
            console.log(err)
            return;
        }

        fs.appendFile("./data/first-file.txt", "0524551112", (err) => {
            if (err) {
                console.log(err)
                return;
            }

            fs.readFile("./data/first-file.txt", "utf-8", (err, fileContent) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log(fileContent)
                console.log(fileContent.split(" "))
                const arr = fileContent.split(" ")
                console.log("name: " +  arr[0])
                console.log("email: " +  arr[1])
                console.log("phone number: " +  arr[2])
            })

        })
    })
})



