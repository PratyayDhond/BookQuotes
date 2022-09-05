

function getTime(timeValue){
    var time = new Date(timeValue);

    var seconds = time.getSeconds() < 10 ? "0" : "";
    seconds += time.getSeconds();
    var minute = time.getMinutes() < 10 ? "0" : "";
    minute += time.getMinutes();
    var hour = time.getHours() < 10 ? "0" : "";
    hour += time.getHours();
    // var day = time.getDate() < 10 ? "0" : "";
    var day =  time.getDate();
    var month = time.getMonth() < 10 ? "0" : "";
    month += time.getMonth();
    // var year = time.getFullYear().toString().substring(2,4);
    var year = time.getFullYear();
    var monthString = "";
    var ordinals = "";

    switch(day){
        case "01": 
        case "21":
        case "31":
                ordinals = "st";
                break;
        case "2":
        case "22":
                ordinals = "nd";
                break;
        case "3":
        case "23":
                ordinals = "rd"
                break;
        default: 
                ordinals = "th";
                break;
    }


    switch(month){
        case "01":
            monthString = "Jan";
             break;
        case "02":
            monthString = "Feb";
             break;
        case "03":
            monthString = "Mar";
             break;
        case "04":
            monthString = "Apr";
             break;
        case "05":
            monthString = "May";
             break;
        case "06":
            monthString = "Jun";
             break;
        case "07":
            monthString = "July";
             break;
        case "08":
            monthString = "Aug";
             break;
        case "09":
            monthString = "Sept";
             break;
        case "10":
            monthString = "Oct";
             break;
        case "11":
            monthString = "Nov";
             break;
        case "12":
            monthString = "Dec";
             break;
        default:
            monthString = "Error in month";
            break;
    }

    var TimeObject = {
        seconds:seconds,
        minute: minute,
        hour: hour,
        day: day,
        month:month,
        monthString: monthString,
        ordinals: ordinals,
        year: year
    }

    return TimeObject;
}

export default getTime;