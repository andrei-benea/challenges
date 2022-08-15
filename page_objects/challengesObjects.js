export default class ChallengesObjects {
    url = 'www.google.com';
    elements = {

    };
    ////////////////////////////////////////////
    //////////////CHALLENGE EASY 1//////////////
    ////////////////////////////////////////////
    // Print a String, a number and a Date in miliseconds in the console using parametrized strings
    async challengeOne() {
        let str = 'string';
        let nr = 4;
        let dt = Date.now();
        console.log(`String is ${str}`)
        console.log(`String is ${nr}`)
        console.log(`String is ${dt}`)
    }
    ////////////////////////////////////////////
    //////////////CHALLENGE EASY 2//////////////
    ////////////////////////////////////////////
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
    ////////////////////////////////////////////
    //////////////CHALLENGE EASY 3//////////////
    ////////////////////////////////////////////
    // Input from the command line a number, and if it contains 2 as a character, remove it
    async challengeThree() {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.question(`Input any sequence of numbers then press ENTER: `, name => {
            let regex = /2/g;
            let str = name.toString();
            console.log('Removing "dirty" numbers: ' + str.replace(regex, ''));
            readline.close();
        });
    }
    ////////////////////////////////////////////
    //////////////CHALLENGE EASY 4//////////////
    ////////////////////////////////////////////
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
    ////////////////////////////////////////////
    //////////////CHALLENGE EASY 5//////////////
    ////////////////////////////////////////////
    // Verify if a number is equal to it in reverse.(return true or false).
    async challengeFive() {
        let check1 = this.checkreversed(334);
        let check2 = this.checkreversed(333);
        console.log(await check1);
        console.log(await check2);
    }
    async checkreversed(number) {
        var rem, temp, final = 0;
        temp = number;
        while (number > 0) {
            rem = number % 10;
            number = parseInt(number / 10);
            final = final * 10 + rem;
        }
        return (final === temp);
    }
    ////////////////////////////////////////////
    //////////////CHALLENGE EASY 6//////////////
    ////////////////////////////////////////////
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
    ////////////////////////////////////////////////
    /////////////CHALLENGE ADVANCED 1///////////////
    ////////////////////////////////////////////////
    // Convert the 6 challenges from Easy_Mode to read the data from a input.txt file in your project. Write the results in a  output.txt file
    async challenge1() {
        const fs = require('fs')
        try {
            const data = fs.readFileSync('tests_input/input.txt', 'utf8');
            console.log(data);
            fs.writeFileSync('tests_output/output.txt', data)
            console.log('Saved to output.txt !')
        } catch (err) {
            console.error(err);
        }
    }
    ////////////////////////////////////////////////
    /////////////CHALLENGE ADVANCED 1.2/////////////
    ////////////////////////////////////////////////
    // Convert the 6 challenges from Easy_Mode to read the data from a input.txt file in your project. Write the results in a  output.txt file
    async challenge1p2() {
        const fs = require('fs')
        try {
            const data = fs.readFileSync('tests_input/input.txt', 'utf8');
            let rep = data.replace('$', '')
            fs.writeFileSync('tests_output/output2.txt', rep)
            console.log('Saved to output2.txt !')
        } catch (err) {
            console.error(err);
        }
    }
    ////////////////////////////////////////////////
    /////////////CHALLENGE ADVANCED 1.3/////////////
    ////////////////////////////////////////////////
    // Convert the 6 challenges from Easy_Mode to read the data from a input.txt file in your project. Write the results in a  output.txt file
    async challenge1p3() {
        const fs = require('fs')
        try {
            const data = fs.readFileSync('tests_input/input.txt', 'utf8');
            let regxp = /2/;
            let len = data.length;
            let r = '';
            for (let i = 0; i <= len - 1; i++) {
                if (data[i].match(regxp)) {
                    r += data[i].replace(regxp, '');
                }
                else {
                    r += data[i]
                }
            }
            fs.writeFileSync('tests_output/output3.txt', r)
            console.log('Saved to output3.txt !')
        } catch (err) {
            console.error(err)
        }
    }
    ////////////////////////////////////////////////
    /////////////CHALLENGE ADVANCED 1.4/////////////
    ////////////////////////////////////////////////
    // Convert the 6 challenges from Easy_Mode to read the data from a input.txt file in your project. Write the results in a  output.txt file
    async challenge1p4() {
        const fs = require('fs');
        const { Console } = require('console');
        const myLogger = new Console({
            stdout: fs.createWriteStream('./tests_output/output4.txt'),
            stderr: fs.createWriteStream('./tests_output/output4err.txt')
        });
        try {
            let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            let len = months.length;
            const data = fs.readFileSync('tests_input/input.txt', 'utf8');
            for (let i = 0; i <= len - 1; i++) {
                if (data.includes(months[i])) {
                    myLogger.log('Txt file contains: ' + months[i])
                    switch (months[i]) {
                        case 'June':
                            myLogger.log('June: strawberries')
                            break;
                        case 'December':
                            myLogger.log('December: snow')
                            break;
                        default:
                            myLogger.log('Everything else: not to be considered')
                            break;
                    }
                }
            }
            console.log('Saved to output4.txt !')
        } catch (err) {
            console.error(err);
        }
    }
    ////////////////////////////////////////////////
    /////////////CHALLENGE ADVANCED 1.5/////////////
    ////////////////////////////////////////////////
    // Convert the 6 challenges from Easy_Mode to read the data from a input.txt file in your project. Write the results in a  output.txt file
    async challenge1p5() {
        const fs = require('fs');
        const { Console } = require('console');
        const myLogger = new Console({
            stdout: fs.createWriteStream('./tests_output/output5.txt'),
            stderr: fs.createWriteStream('./tests_output/output5err.txt')
        });
        try {
            let data = fs.readFileSync('tests_input/input.txt', 'utf8');
            let regxp = /(\d{1,10})/g;
            if (regxp.test(data)) {
                let numbers = data.match(regxp);
                let len = numbers.length;
                myLogger.log('The following numbers were identified: ' + numbers);
                for (let i = 0; i <= len - 1; i++) {
                    let check = this.checkreversed(parseInt(numbers[i]));
                    myLogger.log(numbers[i])
                    myLogger.log(await check)
                }
            }
            else console.log('File does not contain numbers. Try again!')
        } catch (err) {
            console.error(err);
        }
    }
    ////////////////////////////////////////////////
    /////////////CHALLENGE ADVANCED 1.6/////////////
    ////////////////////////////////////////////////
    // Generate an array of Strings that contains numbers from 1 to 100. Display each array element. Replace number 49 with 1313.
    async challenge1p6() {
        const fs = require('fs');
        const { Console } = require('console');
        const myLogger = new Console({
            stdout: fs.createWriteStream('./tests_output/output6.txt'),
            stderr: fs.createWriteStream('./tests_output/output6err.txt')
        });
        try {
            let arr = [];
            for (let i = 1; i < 101; i++) {
                arr.push(i.toString())
            }
            myLogger.log(arr)
            arr.splice(48, 1, '1313')
            myLogger.log(arr)
        } catch (err) {
            console.error(err);
        }
    }
    ////////////////////////////////////////////////
    /////////////CHALLENGE ADVANCED 2///////////////
    ////////////////////////////////////////////////
    // Create a list of Cars in a <listOfCars.json> file with the following JSON structure:   
    // Brand(string), Model(string), Color(string), Km(Number), ReleaseDate(Date), NrOfDoors(number).
    // Display all cars before 2015.
    // Display all red cars.
    // Display all cars made by Fiat
    // Display all cars bellow 100.000Km
    async challenge2() {
        const fs = require('fs')
        try {
            const data = fs.readFileSync('tests_input/listOfCars.json', 'utf8');
            let myData = JSON.parse(data)
            let len = myData.length
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
        } catch (err) {
            console.error(err);
        }
    }
    ////////////////////////////////////////////////
    /////////////CHALLENGE ADVANCED 3///////////////
    ////////////////////////////////////////////////
    // Using Advanced Challenge 2, write to a CSV file all the displayed data.
    async challenge3() {
        const fs = require('fs');
        const { Console } = require("console");
        const myLogger = new Console({
            stdout: fs.createWriteStream("./tests_output/normalStdOut.csv"),
            stderr: fs.createWriteStream("./tests_output/errStdErr.csv")
        });
        try {
            const data = fs.readFileSync('tests_input/listOfCars.json', 'utf8')
            let myData = JSON.parse(data)
            let len = myData.length
            for (let i = 0; i <= len - 1; i++) {
                let b = myData[i].brand;
                let m = myData[i].model;
                let c = myData[i].color;
                let k = myData[i].km;
                let r = myData[i].releaseDate;
                let n = myData[i].nrOfDoors;
                let car = [b, m, c, k, r, n];
                if (car[0] == 'Fiat') {
                    myLogger.log('car is made by "Fiat": ' + m)
                }
                if (car[2] == 'Red') {
                    myLogger.log('car is red: ' + b)
                }
                if (car[3] < 100000) {
                    myLogger.log('car has only a few km: ' + b)
                }
                if (car[4] < 2015) {
                    myLogger.log('car is too old: ' + b)
                }
            }
            console.log('Console output saved to file!')
        } catch (err) {
            console.error(err);
        }
    }
}