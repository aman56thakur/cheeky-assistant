const btn = document.getElementById('talkButton')
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.onresult = (event) => {
  const current = event.resultIndex
  const transcript = event.results[current][0].transcript
  readOutLoud(transcript)
  recognition.stop()
}

btn.addEventListener('click', () => {
  recognition.start()
})

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance()
  speech.text = getReply(message)
  speech.volume = 1
  speech.rate = 1
  window.speechSynthesis.speak(speech)
}

function getReply(msg) {
  if (greetingQuestions.some((x) => msg.includes(x)))
    return greetings[Math.floor(Math.random() * greetings.length)]
  else if (weatherQuestions.some((x) => msg.includes(x)))
    return weather[Math.floor(Math.random() * weather.length)]
  else if (aboutQuestions.some((x) => msg.includes(x)))
    return about[Math.floor(Math.random() * about.length)]
  else return misc[Math.floor(Math.random() * misc.length)]
}
