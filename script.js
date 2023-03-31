//const topic = ['history', 'geography', 'science', 'arts', 'business'];
const factsOn = {
    historyFacts: ['During World War II, the Soviet Union created an all-female air force unit known as the "Night Witches". These women flew outdated biplanes and would turn off their engines and glide towards their targets to drop bombs, earning them the nickname due to the eerie sound their planes made.',
'The Great Wall of China was not built all at once, but rather over the course of many centuries. The earliest sections date back to the 7th century BC, while the most famous sections were built during the Ming Dynasty (1368-1644).',
'The first recorded Olympic Games were held in ancient Greece in 776 BC. The games were held every four years and consisted of events such as running, wrestling, and chariot racing. Women were not allowed to participate and spectators had to be Greek citizens.',
"The shortest war in history was fought between the countries of Zanzibar and Great Britain in 1896. The war lasted just 38 minutes, with the British army bombarding the Zanzibari palace and forcing the surrender of the sultan's forces.",
'During the French Revolution, the use of the guillotine as a form of execution became widespread. It is estimated that between 1792 and 1794, over 17,000 people were executed by the guillotine, including King Louis XVI and his wife Marie Antoinette.'],
    geographyFacts: ["The Amazon Rainforest is the largest rainforest in the world, spanning over 2.1 million square miles (5.5 million square kilometers) and home to an estimated 10% of the world's species.",
"The Dead Sea, located between Jordan and Israel, is the lowest point on Earth, with its surface lying about 1,407 feet (429 meters) below sea level.",
"The Sahara Desert, located in North Africa, is the largest hot desert in the world, covering over 3.6 million square miles (9.4 million square kilometers) and containing some of the hottest temperatures ever recorded on Earth."],
    scienceFacts: ['The human brain contains about 100 billion neurons, and each neuron can make up to 10,000 connections with other neurons.',
'The largest living organism on Earth is a fungus called Armillaria ostoyae, which covers over 2,200 acres (8.9 square kilometers) in Oregon.',
'The core of Earth is primarily made up of iron and nickel, and it has a temperature of around 9,800 degrees Fahrenheit (5,400 degrees Celsius).'],
    artsFacts: ['The Mona Lisa, painted by Leonardo da Vinci in the 16th century, is one of the most famous paintings in the world and is housed in the Louvre Museum in Paris, France.',
'The famous composer Wolfgang Amadeus Mozart began composing music at the age of five and wrote over 600 pieces of music during his lifetime.',
'The Sistine Chapel, located in Vatican City, is known for its ceiling painted by Michelangelo in the early 16th century, which depicts scenes from the Book of Genesis.'],
    businessFacts: ['The largest company in the world by revenue as of 2021 is Walmart, with annual revenues of over $500 billion USD.',
'The term "unicorn" is often used in the business world to refer to a startup company that has a valuation of over $1 billion USD.',
'The Fortune 500 is an annual list compiled by Fortune magazine of the 500 largest companies in the United States based on their revenues.']
} 

const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
}






const messageOutput = () => {

    const randomFieldName = (object) => {
        const keys = Object.keys(object);
        if (keys.length > 0) {
            const index = Math.floor(keys.length * Math.random());
              return keys[index];
        }
        return null;
    };
    const fieldName = randomFieldName(factsOn);
    console.log(fieldName);

    //for (let fieldName in factsOn) {
        let optionId = randomNumber(factsOn[fieldName].length);
        console.log(optionId);

        switch (fieldName) {
            case 'historyFacts' :
                return factsOn[fieldName][optionId];
                //break;
    
            case 'geographyFacts' :
                return factsOn[fieldName][optionId];
                //break;
            case 'scienceFacts' :
                return factsOn[fieldName][optionId];
                //break;
            case 'artsFacts' :
                return factsOn[fieldName][optionId];
               // break;
            case 'businessFacts' :
                return factsOn[fieldName][optionId];
                //break;
            default:
                return 'Error occured';
        
    
        }
        
//}
}


function factDisplay() {
    document.getElementById("messageDisplay").innerHTML = messageOutput();

}

