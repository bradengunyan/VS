print("Guess the word!\n")
word = "snowboard"
guess = ""
num = 0
hint = "_________"
while guess != word:
    guess = input(f"Your hint is: {hint}\n")
    guess = guess.lower()
    num += 1
    if len(guess) != len(word):
        print("Please enter a word with the same length as the hint: \n")
    elif guess == word:
        print("Congragulations, you guessed the word!\n")
        print(f"Guesses: {num}\n")
    else: 
        new_hint = ""
        for i in range(len(word)):
            if guess[i] == word[i]:
                new_hint += guess[i].upper()
            elif guess[i] in word:
                new_hint += guess[i].lower()
            else:  
                new_hint += "_"
        hint = new_hint

