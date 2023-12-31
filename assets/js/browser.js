// Selects Month & Year
const calMonth = document.querySelector('.month')
const calYear = document.querySelector('.year')

// Selects all dates in calendar grid
const dates = document.querySelectorAll('.date')

// Selects forward and back buttons on month
const back = document.querySelector('#back')
const forward = document.querySelector('#forward')

// Get Day.js Values
const month = dayjs().format('MMMM');
const monthInteger = dayjs().month()
let year = dayjs().format('YYYY')
const currentDate = dayjs().format('D')

// Set Month & Year
calMonth.innerText = month
calYear.innerText = year

// Index of Array - first day of the month
let firstDayOfMonth 

// Counter for counting up and down when navigating between months
let counter = 0

// Integer of how many days are in the month
let daysInMonth

// The array where we will push all the dates on the month into
let dateArray

// Index in the array of months
let monthIndex

// monthIndex minus counter
let monthBack

// monthIndex plus counter
let monthForward

// Function that pushes the correct dates into the dateArray. The clicked class controls if the current month needs to be modified using the counter variable.
function getDatesInMonth() {
    dateArray = [];

    if (back.classList.contains('clicked')) {
        daysInMonth = dayjs().subtract(counter, 'month').daysInMonth()
    } else if (forward.classList.contains('clicked')) {
        daysInMonth = dayjs().add(counter, 'month').daysInMonth()
    } else {
        daysInMonth = dayjs().daysInMonth()
    }

    for (let i = 1; i <= daysInMonth; i++) {
        dateArray.push(i);
    }

    return dateArray
}

// For months with less than 31 days, some values at index will be undefined, and this function prevents them from appearing on screen
function removeUndefined() {
    for (i = 0; i < dates.length; i++) {
        if (dates[i].innerText == 'undefined') {
            dates[i].innerText = ' '
        }
    }
}

// Checks if current month is displayed and uses this data to determine what the first day of the diplayed month is.
function checkForDisplayedMonth() {
    if (back.classList.contains('clicked')) {
        firstDayOfMonth = dayjs().subtract(counter, 'month').startOf('month').day()
        yearBack()
    } else if (forward.classList.contains('clicked')) {
        firstDayOfMonth = dayjs().add(counter, 'month').startOf('month').day()
        yearForward()
    } else {
        firstDayOfMonth = dayjs().startOf("month").day()
    }
    return firstDayOfMonth
}

// Subtracts Year
function yearBack() {
    if (calMonth.innerText == 'December') {
        year = parseInt(year) - 1
        dayjs().year(year)
        calYear.innerText = year
    }
    return year
}

// Adds Year
function yearForward() {
    if (calMonth.innerText == 'January') {
        year = parseInt(year) + 1
        dayjs().year(year)
        calYear.innerText = year
    }
    return year
}

// Displays monthly calendar data
function loadCalendar() {
    checkForDisplayedMonth()
    getDatesInMonth()

    if (firstDayOfMonth === 0) {
        a1.innerText = dateArray[0]
        a2.innerText = dateArray[1]
        a3.innerText = dateArray[2]
        a4.innerText = dateArray[3]
        a5.innerText = dateArray[4]
        a6.innerText = dateArray[5]
        a7.innerText = dateArray[6]
    
        b1.innerText = dateArray[7]
        b2.innerText = dateArray[8]
        b3.innerText = dateArray[9]
        b4.innerText = dateArray[10]
        b5.innerText = dateArray[11]
        b6.innerText = dateArray[12]
        b7.innerText = dateArray[13]
    
        c1.innerText = dateArray[14]
        c2.innerText = dateArray[15]
        c3.innerText = dateArray[16]
        c4.innerText = dateArray[17]
        c5.innerText = dateArray[18]
        c6.innerText = dateArray[19]
        c7.innerText = dateArray[20]
    
        d1.innerText = dateArray[21]
        d2.innerText = dateArray[22]
        d3.innerText = dateArray[23]
        d4.innerText = dateArray[24]
        d5.innerText = dateArray[25]
        d6.innerText = dateArray[26]
        d7.innerText = dateArray[27]
        
        e1.innerText = dateArray[28]
        e2.innerText = dateArray[29]
        e3.innerText = dateArray[30]
        e4.innerText = dateArray[31]
        e5.innerText = dateArray[32]
    
    } else if (firstDayOfMonth === 1) {
        a2.innerText = dateArray[0]
        a3.innerText = dateArray[1]
        a4.innerText = dateArray[2]
        a5.innerText = dateArray[3]
        a6.innerText = dateArray[4]
        a7.innerText = dateArray[5]
    
        b1.innerText = dateArray[6]
        b2.innerText = dateArray[7]
        b3.innerText = dateArray[8]
        b4.innerText = dateArray[9]
        b5.innerText = dateArray[10]
        b6.innerText = dateArray[10]
        b7.innerText = dateArray[12]
    
        c1.innerText = dateArray[13]
        c2.innerText = dateArray[14]
        c3.innerText = dateArray[15]
        c4.innerText = dateArray[16]
        c5.innerText = dateArray[17]
        c6.innerText = dateArray[18]
        c7.innerText = dateArray[19]
    
        d1.innerText = dateArray[20]
        d2.innerText = dateArray[21]
        d3.innerText = dateArray[22]
        d4.innerText = dateArray[23]
        d5.innerText = dateArray[24]
        d6.innerText = dateArray[25]
        d7.innerText = dateArray[26]
        
        e1.innerText = dateArray[27]
        e2.innerText = dateArray[28]
        e3.innerText = dateArray[29]
        e4.innerText = dateArray[30]
        e5.innerText = dateArray[31]
        e6.innerText = dateArray[32]
    
    } else if (firstDayOfMonth === 2) {
        a3.innerText = dateArray[0]
        a4.innerText = dateArray[1]
        a5.innerText = dateArray[2]
        a6.innerText = dateArray[3]
        a7.innerText = dateArray[4]
    
        b1.innerText = dateArray[5]
        b2.innerText = dateArray[6]
        b3.innerText = dateArray[7]
        b4.innerText = dateArray[8]
        b5.innerText = dateArray[9]
        b6.innerText = dateArray[10]
        b7.innerText = dateArray[11]
    
        c1.innerText = dateArray[12]
        c2.innerText = dateArray[13]
        c3.innerText = dateArray[14]
        c4.innerText = dateArray[15]
        c5.innerText = dateArray[16]
        c6.innerText = dateArray[17]
        c7.innerText = dateArray[18]
    
        d1.innerText = dateArray[19]
        d2.innerText = dateArray[20]
        d3.innerText = dateArray[21]
        d4.innerText = dateArray[22]
        d5.innerText = dateArray[23]
        d6.innerText = dateArray[24]
        d7.innerText = dateArray[25]
        
        e1.innerText = dateArray[26]
        e2.innerText = dateArray[27]
        e3.innerText = dateArray[28]
        e4.innerText = dateArray[29]
        e5.innerText = dateArray[30]
        e6.innerText = dateArray[31]
        e7.innerText = dateArray[32]
    
    } else if (firstDayOfMonth === 3) {
        a4.innerText = dateArray[0]
        a5.innerText = dateArray[1]
        a6.innerText = dateArray[2]
        a7.innerText = dateArray[3]
    
        b1.innerText = dateArray[4]
        b2.innerText = dateArray[5]
        b3.innerText = dateArray[6]
        b4.innerText = dateArray[7]
        b5.innerText = dateArray[8]
        b6.innerText = dateArray[9]
        b7.innerText = dateArray[10]
    
        c1.innerText = dateArray[11]
        c2.innerText = dateArray[12]
        c3.innerText = dateArray[13]
        c4.innerText = dateArray[14]
        c5.innerText = dateArray[15]
        c6.innerText = dateArray[16]
        c7.innerText = dateArray[17]
    
        d1.innerText = dateArray[18]
        d2.innerText = dateArray[19]
        d3.innerText = dateArray[20]
        d4.innerText = dateArray[21]
        d5.innerText = dateArray[22]
        d6.innerText = dateArray[23]
        d7.innerText = dateArray[24]
        
        e1.innerText = dateArray[25]
        e2.innerText = dateArray[26]
        e3.innerText = dateArray[27]
        e4.innerText = dateArray[28]
        e5.innerText = dateArray[29]
        e6.innerText = dateArray[30]
        e7.innerText = dateArray[31]
    
        f1.innerText = dateArray[32]
    
    } else if (firstDayOfMonth === 4) {
        a5.innerText = dateArray[0]
        a6.innerText = dateArray[1]
        a7.innerText = dateArray[2]
    
        b1.innerText = dateArray[3]
        b2.innerText = dateArray[4]
        b3.innerText = dateArray[5]
        b4.innerText = dateArray[6]
        b5.innerText = dateArray[7]
        b6.innerText = dateArray[8]
        b7.innerText = dateArray[9]
    
        c1.innerText = dateArray[10]
        c2.innerText = dateArray[11]
        c3.innerText = dateArray[12]
        c4.innerText = dateArray[13]
        c5.innerText = dateArray[14]
        c6.innerText = dateArray[15]
        c7.innerText = dateArray[16]
    
        d1.innerText = dateArray[17]
        d2.innerText = dateArray[18]
        d3.innerText = dateArray[19]
        d4.innerText = dateArray[20]
        d5.innerText = dateArray[21]
        d6.innerText = dateArray[22]
        d7.innerText = dateArray[23]
        
        e1.innerText = dateArray[24]
        e2.innerText = dateArray[25]
        e3.innerText = dateArray[26]
        e4.innerText = dateArray[27]
        e5.innerText = dateArray[28]
        e6.innerText = dateArray[29]
        e7.innerText = dateArray[30]
    
        f1.innerText = dateArray[31]
        f2.innerText = dateArray[32]
    
    } else if (firstDayOfMonth === 5) {
        a6.innerText = dateArray[0]
        a7.innerText = dateArray[1]
    
        b1.innerText = dateArray[2]
        b2.innerText = dateArray[3]
        b3.innerText = dateArray[4]
        b4.innerText = dateArray[5]
        b5.innerText = dateArray[6]
        b6.innerText = dateArray[7]
        b7.innerText = dateArray[8]
    
        c1.innerText = dateArray[9]
        c2.innerText = dateArray[10]
        c3.innerText = dateArray[11]
        c4.innerText = dateArray[12]
        c5.innerText = dateArray[13]
        c6.innerText = dateArray[14]
        c7.innerText = dateArray[15]
    
        d1.innerText = dateArray[16]
        d2.innerText = dateArray[17]
        d3.innerText = dateArray[18]
        d4.innerText = dateArray[19]
        d5.innerText = dateArray[20]
        d6.innerText = dateArray[21]
        d7.innerText = dateArray[22]
        
        e1.innerText = dateArray[23]
        e2.innerText = dateArray[24]
        e3.innerText = dateArray[25]
        e4.innerText = dateArray[26]
        e5.innerText = dateArray[27]
        e6.innerText = dateArray[28]
        e7.innerText = dateArray[29]
    
        f1.innerText = dateArray[30]
        f2.innerText = dateArray[31]
        f3.innerText = dateArray[32]
    
    } else if (firstDayOfMonth === 6) {
        a7.innerText = dateArray[0]
    
        b1.innerText = dateArray[1]
        b2.innerText = dateArray[2]
        b3.innerText = dateArray[3]
        b4.innerText = dateArray[4]
        b5.innerText = dateArray[5]
        b6.innerText = dateArray[6]
        b7.innerText = dateArray[7]
    
        c1.innerText = dateArray[8]
        c2.innerText = dateArray[9]
        c3.innerText = dateArray[10]
        c4.innerText = dateArray[11]
        c5.innerText = dateArray[12]
        c6.innerText = dateArray[13]
        c7.innerText = dateArray[14]
    
        d1.innerText = dateArray[15]
        d2.innerText = dateArray[16]
        d3.innerText = dateArray[17]
        d4.innerText = dateArray[18]
        d5.innerText = dateArray[19]
        d6.innerText = dateArray[20]
        d7.innerText = dateArray[21]
        
        e1.innerText = dateArray[22]
        e2.innerText = dateArray[23]
        e3.innerText = dateArray[24]
        e4.innerText = dateArray[25]
        e5.innerText = dateArray[26]
        e6.innerText = dateArray[27]
        e7.innerText = dateArray[28]
    
        f1.innerText = dateArray[29]
        f2.innerText = dateArray[30]
        f3.innerText = dateArray[31]
        f4.innerText = dateArray[32]
    } 

    removeUndefined()
    
    return firstDayOfMonth
}

// Identify and highlight today's date
function findToday() {
    if (counter === 0) {
        for (i = 0; i < dates.length; i++) {
            if (dates[i].innerText == currentDate) {
                const calToday = dates[i];
                calToday.classList.add('today')
            }
        } 
    }
    
}

// Unhighlight today when toggling to another month
function removeToday() {
    for (i = 0; i < dates.length; i++) {
        const calRemoveToday = dates[i]
        if (calRemoveToday.classList.contains('today')) {
            calRemoveToday.classList.remove('today')
        }
    }
}

// Controls back arrow on month
function backInTime() {
    back.classList.add('clicked')
    if (forward.classList.contains('clicked')) {
        forward.classList.remove('clicked')
    }

    counter = counter + 1

    monthIndex = dayjs().month()
    monthBack = dayjs().month(monthIndex - counter).format('MMMM')

    for (i = 0; i < dates.length; i++) {
        dates[i].innerText = ''
    }

    calMonth.innerText = monthBack

    removeToday()
    loadCalendar()
    findToday()

    return monthBack, counter
}

// Controls forward arrow on month
function forwardInTime() {
    forward.classList.add('clicked')
    if (back.classList.contains('clicked')) {
        back.classList.remove('clicked')
    }

    counter = counter - 1

    monthIndex = dayjs().month()
    monthForward = dayjs().month(monthIndex - counter).format('MMMM')

    for (i = 0; i < dates.length; i++) {
        dates[i].innerText = ''
    }

    calMonth.innerText = monthForward

    removeToday()
    loadCalendar()
    findToday()

    return monthForward, counter
}

loadCalendar()
findToday()

// Event Listeners
back.addEventListener('click', backInTime)
forward.addEventListener('click', forwardInTime)