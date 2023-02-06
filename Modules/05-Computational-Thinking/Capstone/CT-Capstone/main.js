function getDays(earlierDate,laterDate) {
return Math.round(laterDate - earlierDate)
}


getDays(new Date ("June 14, 2019"), new Date ("June 20, 2019")) // 6 days
getDays(new Date ("December 29, 2018"), new Date ("January 1, 2019")) // 3 days
getDays(new Date ("July 20, 2019"), new Date ("July 30, 2019")) // 10 days 