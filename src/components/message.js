export let endMessage

export function createMessage(initialText) {
    endMessage = document.createElement('h2')
    endMessage.textContent = initialText
    endMessage.style.marginTop = '30px'
    endMessage.style.textAlign = 'center'
    document.getElementById('board').after(endMessage)
}

export function updateMessage(text) {
    endMessage.textContent = text
}
