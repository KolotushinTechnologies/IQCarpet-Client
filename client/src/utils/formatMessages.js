const MessageTimeTypes = ["Today", "Yestarday"]

const formatMessages = (messages = [], lastMessage) => {
    const newArray = [];

    for(var mes of messages){
        const mesDate = new Date(mes.time);
        const lastMessageDate = lastMessage && new Date(lastMessage.time);
        if(lastMessage && lastMessageDate.getDate() != mesDate.getDate()){
            newArray.push([
                {
                    text: MessageTimeTypes[Math.floor((lastMessage.time - mes.time)/86400000) - 1] || new Intl.DateTimeFormat().format(mesDate),
                    timeText: true
                }
            ])
            if(lastMessage.fromUser == mes.fromUser) newArray.push([]);
        }
        var messageBlock = !lastMessage || lastMessage.fromUser != mes.fromUser ? newArray[newArray.length] = [] : newArray[newArray.length - 1];
        messageBlock.push({...mes, time: `${mesDate.getHours()}:${mesDate.getMinutes()}`});
        lastMessage = mes;
    }

    return newArray;
}

export default formatMessages;