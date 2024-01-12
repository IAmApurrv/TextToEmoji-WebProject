var clutter = ""

function encryption() {
    document.querySelector("#encrypt-btn").addEventListener("click", function () {

        // getting input
        var input = document.getElementById("txtmsg").value
        console.log(input)

        // getting password
        var password = document.getElementById("password").value
        console.log(password)

        // spliting the input
        const str = input.split("")
        // console.log(str)

        // converting input into emoji
        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()} `
        });
        console.log(clutter)

        // storying input in #result div
        document.querySelector("#result").innerHTML = clutter


        var dataArr = []
        if (JSON.parse(localStorage.getItem('data1'))) {
            dataArr = JSON.parse(localStorage.getItem('data1'))
            dataArr.push({ "pass": password, "input": input, "clutter": clutter })
            console.log(dataArr)
        } else {
            dataArr = [{ "pass": password, "input": input, "clutter": clutter }]
            console.log(dataArr)
        }

        localStorage.setItem("data1", JSON.stringify(dataArr))

    })
}
encryption()


function decryption() {
    document.querySelector("#decrypt-btn").addEventListener("click", function () {
        var clutter2 = ""

        // getting an emoji msg
        var input2 = document.querySelector("#emojimsg").value
        
        // getting an password
        var password2 = document.querySelector("#finalpassword").value

        var user = JSON.parse(localStorage.getItem('data1'))
        console.log(user)

        var str2 = input2.split(" ")
        str2.forEach(element => {
            clutter2 += `&#${(element.codePointAt(0))} `
        });
        console.log(clutter2)

        var found;
        for(let i of user){
            if(i.clutter == clutter2){
                found = i;
                console.log(i)
            }
        }
        if (found.clutter === clutter2) {
            console.log("jay ho")
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `#eee`

            document.querySelector("#result").innerHTML = found.input
        } else {
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `red`
            document.querySelector("#result").innerHTML = "Wrong password!"
        }

    })
}
decryption()





function btnClicking() {
    document.querySelector("#dec-btn").addEventListener("click", function () {
        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#encryption").style.display = "none"
        document.querySelector("#dec-btn").style.backgroundColor = "#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span img").style.rotate = "-90deg"
        document.querySelector("#result").style.display = "none"
    })
    document.querySelector("#enc-btn").addEventListener("click", function () {
        document.querySelector("#encryption").style.display = "block"
        document.querySelector("#decryption").style.display = "none"
        document.querySelector("#enc-btn").style.backgroundColor = "#333"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span img").style.rotate = "90deg"
        document.querySelector("#result").style.display = "none"
    })

    document.querySelector("#encrypt-btn").addEventListener("click", function () {
        document.querySelector("#result").style.display = "block"
    })
    document.querySelector("#decrypt-btn").addEventListener("click", function () {
        document.querySelector("#result").style.display = "block"
    })
}
btnClicking()


// localStorage.setItem('username', 'Apurrv')
// localStorage.setItem('age', 23)
// var a = localStorage.getItem('username')
// var age = localStorage.getItem('age')
// console.log(a + age)

// var arr = ["A", 11, true]
// // localStorage.setItem("array", arr)  // in string form
// localStorage.setItem("array", JSON.stringify(arr))  // to convert into array form
// // console.log(localStorage.getItem('array'))   // it will print as a string
// console.log(JSON.parse(localStorage.getItem('array')))  // JSON.parse --> to print as a array

// localStorage.clear()


