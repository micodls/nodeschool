function getShortMessages(messages) {
    return messages.filter(function(messages) {
        return messages.message.length < 50;
    }).map(function(messages) {
        return messages.message;
    });
}

module.exports = getShortMessages