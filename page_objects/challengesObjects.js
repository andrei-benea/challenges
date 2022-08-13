export default class ChallengesObjects {
    url = 'www.google.com';
    elements = {

    };
    // Print a String, a number and a Date in miliseconds in the console using parametrized strings
    async challengeOne() {
        let str = 'string';
        let nr = 4;
        let dt = Date.now();
        console.log(`String is ${str}`)
        console.log(`String is ${nr}`)
        console.log(`String is ${dt}`)
    }
    // Print 2 Strings combined and the String 'Test$*&' without the $ sign. Print the result reversed.
    async challengeTwo() {
        let str = 'string';
        let stri = 'stringy';
        let strin = 'Test$*&';
        console.log(`Combined strings are ${stri}` + `${str}`)
        let res = strin.replace('$', '')
        console.log(res)
        let len = strin.length;
        let rev = new String;
        for (let i = len - 1; i >= 0; i--) {
            let d = res.charAt(i)
            console.log(d)
            rev += d;
        }
        console.log(rev)
    }
    // Input from the command line a number, and if it contains 2 as a character, remove it
    async challengeThree() {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.question(`Input any sequence of numbers then press ENTER`, name => {
            let re = /2/
            if (name.match(re)) {
                console.log(name.replace(re, ''))
            }
            else {
                console.log('Try again. GOODBYE!');
            }
            readline.close();
        });
    }
    ////////////////////////////////////
    //From an array of Months, using a switch conditional, print : 
    // for : 'June', print 'strawberries', 
    // for : 'December' print 'snow',
    // for : 'September' print 'colors',
    // for : 'February'  print 'ski',
    // for : 'April' print 'easter',
    // for everything else print 'not to be considered'
    async challengeFour() {
        const year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let len = year.length;
        for (let i = 0; i < len; i++) {
            switch (year[i]) {
                case 'June':
                    console.log('June: strawberries')
                    break;
                case 'December':
                    console.log('December: snow')
                    break;
                case 'September':
                    console.log('September: colors')
                    break;
                case 'February':
                    console.log('February: ski')
                    break;
                case 'April':
                    console.log('April: easter')
                    break;
                default:
                    console.log('Everything else: not to be considered')
                    break;
            }
        }
    }
    async challengeFive() {
        await this.checkreversed(334);
        await this.checkreversed(333);
    }
    async checkreversed(number) {
        var rem, temp, final = 0;
        temp = number;
        while (number > 0) {
            rem = number % 10;
            number = parseInt(number / 10);
            final = final * 10 + rem;
        }
        return console.log(final === temp);
    }
    // Generate an array of Strings that contains numbers from 1 to 100. Display each array element. Replace number 49 with 1313.
    async challengeSix() {
        let arr = Array();
        for (let i = 1; i < 101; i++) {
            arr.push(i.toString())
        }
        console.log(arr)
        arr.splice(48, 1, '1313');
        console.log(arr)
    }
    // Create a list of Cars in a <listOfCars.json> file with the following JSON structure:   
    // Brand(string), Model(string), Color(string), Km(Number), ReleaseDate(Date), NrOfDoors(number).
    // Display all cars before 2015.
    // Display all red cars.
    // Display all cars made by Fiat
    // Display all cars bellow 100.000Km
    async challenge2() {
        const fs = require('fs');
        fs.readFile('tests_input/listOfCars.json', 'utf8', (err, data) => {
            if (err) throw err;
            else {
                const { Console } = require("console");
                const myLogger = new Console({
                    stdout: fs.createWriteStream("/tests_output/normalStdout.txt"), // a write stream,
                    stderr: fs.createWriteStream("/tests_output/errStdErr.txt"), // a write stream
                });
                let myData = JSON.parse(data)
                let len = myData.length
                console.log('parsed json: ' + myData)
                console.log('json length: ' + len)
                for (let i = 0; i <= len - 1; i++) {
                    console.count('Loop: ')
                    let b = myData[i].brand;
                    let m = myData[i].model;
                    let c = myData[i].color;
                    let k = myData[i].km;
                    let r = myData[i].releaseDate;
                    let n = myData[i].nrOfDoors;
                    let car = [b, m, c, k, r, n];
                    if (car[0] == 'Fiat') {
                        console.log('this car is made by Fiat: ' + b)
                    }
                    if (car[2] == 'Red') {
                        console.log('this car is red: ' + b)
                    }
                    if (car[3] < 100000) {
                        console.log('this car has good mileage: ' + b)
                    }
                    if (car[4] < 2015) {
                        console.log('this car is pretty old: ' + b)
                    }
                }
            }
        })
    }
    async challenge3() {
        // const { Console } = require("console");
        // const myLogger = new Console({
        //     stdout: "", // a write stream,
        //     stderr: "", // a write stream
        //   });
    }
}