

import { generateKey } from "crypto"
import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai"
import readline from "readline"

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
)

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let firstInput = ""
userInterface.question("Enter name: ", async input => {
  firstInput = input
  userInterface.question("Enter their characteristics: ", async input => {
    const response = await openAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: generate(firstInput, input) }]
    })
    console.log(response.data.choices[0].message.content)
    userInterface.close()
  })
})

function generate(str1, str2) {
    return "Write a pickup for " + str1 + " with traits " + str2
  }