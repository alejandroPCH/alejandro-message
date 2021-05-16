
console.log("Your random message: ")

const awesomeMessages=[

    "Never give up",
    "Things take time... but you have to work hard anyways",
    "Human beings are momentum animals, even if you don't want to keep going, but you do it anyways, it will be easier next time you feel in that way","You can't stop technology",
    "Terraform Mars!","This is the Alejandro-message package :D"
]

const messageSelector=()=>{

    //this will calculate a random number according with the lenght of the array 
    let messageSelect=awesomeMessages[Math.floor(Math.random()*awesomeMessages.length)]

    console.log(messageSelect)
}

module.exports={messageSelector}
