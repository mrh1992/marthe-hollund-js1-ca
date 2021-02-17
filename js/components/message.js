function message(messageType = "success", message = "") {
    return `<div class="warning ${messageType}">${message}</div>`;
}