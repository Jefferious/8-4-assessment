module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A gambler not only will lose what he has, but also will lose what he doesn't have.", "A hunch is creativity trying to tell you something.", "A small donation is call for. It's the right thing to do.", "Advice, when most needed, is least heeded.", "All will go well with your new project."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    getInspiration: (req, res) => {
        const inspiration = {
            happy: "Choose to be happy today and spread positivity!",
            motivated: "Believe in yourself, and you can achieve anything!",
            stressed: "Take a deep breath and focus on one thing at a time.",
            sad: "It's okay to have bad days; tomorrow will be better."
        };

        const selectedMood = req.body.mood;
        
        if (selectedMood === 'happy') {
            res.status(200).send(inspiration.happy);
        }
        else if (selectedMood === 'motivated') {
                res.status(200).send(inspiration.motivated);
        } 
        else if (selectedMood === 'stressed') {
            res.status(200).send(inspiration.stressed);
        }
        else if (selectedMood === 'sad') {
            res.status(200).send(inspiration.sad);
            
        }
        else if (selectedMood === 'sad') {
            res.status(200).send(inspiration.sad);
        }
        else {
            res.status(400).send("Content unavailable");
        }
    },
    getUserPost: (req, res) => {
        const userContent = req.body.userContent
        res.status(200).send(`Received user input: ${userContent}`)
    }
    
}