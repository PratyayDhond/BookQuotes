

function getTime(timeValue){
    var time = new Date(timeValue);

    var seconds = time.getSeconds() < 10 ? "0" : "";
    seconds += time.getSeconds();
    var minute = time.getMinutes() < 10 ? "0" : "";
    minute += time.getMinutes();
    var hour = time.getHours() < 10 ? "0" : "";
    hour += time.getHours();
    var day = time.getDate() < 10 ? "0" : "";
    day +=  time.getDate();
    var month = time.getMonth() < 10 ? "0" : "";
    month += time.getMonth();
    var year = time.getFullYear().toString().substring(2,4);

    var TimeObject = {
        seconds:seconds,
        minute: minute,
        hour: hour,
        day: day,
        month:month,
        year: year
    }

    return TimeObject;
}

export default getTime;