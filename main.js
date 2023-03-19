

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



// import { config } from "dotenv"
// config()

// import { Configuration, OpenAIApi } from "openai"
// import readline from "readline"

// const openAi = new OpenAIApi(
//   new Configuration({
//     apiKey: process.env.API_KEY,
//   })
// )



// const userInterface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// let firstString, secondString;

// userInterface.question('Enter the first string: ', (answer) => {
//   firstString = answer;
  
//   userInterface.question('Enter the second string: ', (answer) => {
//     secondString = answer;
    
//   });
// });

// console.log(generate(firstString, secondString))

// userInterface.prompt()
// userInterface.on("line", async input => {
//   const response = await openAi.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: input }],
//   })
//   console.log(response.data.choices[0].message.content)
//   userInterface.prompt()
// })

// function generate(str1, str2) {
//     return "Write a pickup for " + str1 + " with traits " + str2
//   }


// import { config } from "dotenv"
// config()


// import { Configuration, OpenAIApi } from "openai"

// const openai = new OpenAIApi(new Configuration({apiKey: process.env.API_KEY}))

// const name = prompt('what do u wanna say')

// openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: name}]
// }).then(res => {
//     console.log(res.data.choices[0].message.content)
// })

// console.log(process.env.API_KEY)