const natural = require('natural');

// Simple text summarizer function
function summarize(text, numSentences) {
    const tokenizer = new natural.SentenceTokenizer();
    const sentences = tokenizer.tokenize(text);
    
    const wordFrequency = {};
    sentences.forEach(sentence => {
        const words = sentence.split(' ');
        words.forEach(word => {
            word = word.toLowerCase();
            if (wordFrequency[word]) {
                // console.log(wordFrequency[word]);
                wordFrequency[word]++;
            } else {
                wordFrequency[word] = 1;
            }
        });
    });

    const sentenceScores = sentences.map(sentence => {
        const words = sentence.split(' ');
        let score = 0;
        words.forEach(word => {
            word = word.toLowerCase();
            score += wordFrequency[word] || 0;gi
        });
        return { sentence, score };
    });
console.log(sentenceScores);

    sentenceScores.sort((a, b) => b.score - a.score);

    const summary = sentenceScores.slice(0, numSentences).map(item => item.sentence).join(' ');
    
    return summary;
}

// Example usage
const  text = "Hellos. I am Ivy. Ivy is a programmer.Programmer work hellos is good.";
const summarizedText = summarize(text, 3); // Summarizes to 3 sentences
console.log(summarizedText);
