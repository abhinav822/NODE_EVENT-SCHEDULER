

const schedule = require('node-schedule');
const events = [
    {
        "text": "textOne",
        "dateTime": "2023-02-11 11:42:00.000"
    },
    {
        "text": "textTwo",
        "dateTime": "2023-02-11 11:42:00.000"
    },
    {
        "text": "textThree",
        "dateTime": "2023-02-11 11:42:00.000"
    },
    {
        "text": "textFour",
        "dateTime": "2023-02-11 11:42:00.000"
    },
    {
        "text": "textFive",
        "dateTime": "2023-02-11 11:42:00.000"
    },
    {
        "text": "textSix",
        "dateTime": "2023-02-11 11:42:00.000"
    },
    {
        "text": "textSeven",
        "dateTime": "2023-02-11 11:42:00.000"
    },
    {
        "text": "textEight",
        "dateTime":"2023-02-11 18:11:00.000"
    },
    {
        "text": "textNine",
        "dateTime": "2023-02-11 18:11:00.000"
    },
    {
        "text": "textTen",
        "dateTime": "2023-02-11 18:11:00.000"
    },

    {
        "text": "textFinal",
        "dateTime": "2023-02-11 18:11:00.000"
    }
]


const triggerFunction = async (text) => {
    try {
        await setTimeout(() => {
            console.log(text.split("").reverse().join(""));
        }, text.length * 1000);  
    } catch (error) {
        console.log(error);
    }
}

//purpose of above triggerFunction is to accept the text as input, sleep for the duration of text length and return text backwards.


events.map(event => {
    const date = new Date(event.dateTime);  
    schedule.scheduleJob(date, () => {
        triggerFunction(event.text);
    })
})

//purpose of above code is to schedule the event to trigger a function at the date time mentioned in the event body.




