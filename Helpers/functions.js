var Groq = require("groq-sdk");
const groq= new Groq({apikey:process.env.GROQ_API_KEY})

const generateMessage =(Message)=>{

    const groqPromise = groq.chat.completions.create({
        model: "openai/gpt-oss-20b",
        messages: [
            { role: "system", "content": "You are a zoologist and a helpful agent who always replies with two lines of text." }, 
            { role: "user", "content": Message }
        ]
    })

    return groqPromise;

}

module.exports = { generateMessage };