const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

const formatDialogDate = (timestamp) => {
    var date = new Date(timestamp);
    return `Was online ${date.getDate()} ${months[date.getMonth()]} at ${date.getHours()}:${date.getMinutes()}`
}

export default formatDialogDate;