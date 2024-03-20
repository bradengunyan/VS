print("Welcome to the adventure game!\n")
a = input("You are lost deep in the alaskan mountains and forests. \nAround you you see a lake to the North, and tall mountain to the East, and an old gravel road to the West. \nDo you choose to go to the LAKE, climb the MOUNTAIN, or head towards the ROAD? (please type your answer:)\n")
a = a.lower()
if a == "lake":
    b = input("You start heading to the lake. As you get closer you see some smoke rising from one end of the lake. On the other side however you see a small shack that might have food and supplies. Do you go towards the SMOKE or to the SHACK?")
    b = b.lower()
    if b == "smoke":
        c = input("As you approach the fire you see a man sitting by it. You wonder if the man can help you. Do you approach the MAN or LEAVE.")
        c = c.lower()
        if c == "man":
            print("You go to the man and ask him for help. He tells you he'll give you a ride to town and you can get help from there. You are saved!")
        elif c == "leave":
            print("Why would you leave? It gets dark and you are freezing and lost forever.")
        else :
            print("invalid response, please restart \n")
    elif b == "shack":
        c = input("You go to the shack and look inside. Its a small hunting shack and theres some tools and other items. As youre looking around however you hear footsteps coming up to the shack outside. Do you RUN or CALL out for help?")
        c = c.lower()
        if c == "run":
            print("You run and a man behind you starts yelling at you. You get out of his sight but it starts to get dark and you are lost.")
        elif c == "call":
            print("You call for the help. The man opens the door to the shack and looks angry. However when you explain your situation he decides to help you. You are saved!")
        else :
            print("invalid response, please restart \n")
    else :
            print("invalid response, please restart \n")
elif a == "mountain":
    b = input("You start climbing a mountain for a better view of the area. As youre climbing up you slip on a rock and hurt your ankle. Do you keep trying to climb UP or do you try to head back DOWN?")
    b = b.lower()
    if b == "up":
        c = input("You keep going up the mountain and eventually you make it even though your ankle hurts. On the other side pretty far away it looks like you see a small town but it seems pretty far and your ankle is hurting pretty bad. Down to the left of the mountain you see the road again heading towards the town. Do you go straight towards the TOWN or to the ROAD?")
        c = c.lower()
        if c == "town":
            print("You start walking towards the town. It starts to get dark but you follow the lights from the town and eventually you make it. You are saved!")
        elif c == "road":
            print("You head to the road and right when you get there you hear a car driving down the road. You run out yelling for help and the truck stops for you. You are saved!")
        else :
            print("invalid response, please restart \n")
    elif b == "down":
        c = input("You head back down the mountain and see the road and the lake again. Do you head towards the LAKE or the the ROAD?")
        c = c.lower()
        if c == "lake":
            print("You go to the lake but theres nothing there and now youre really lost and its getting dark. You lose!")
        elif c == "road":
            print("You head to the road and right when you get there you hear a car driving down the road. You run out yelling for help and the truck stops for you. You are saved!")
        else :
            print("invalid response, please restart \n")
    else :
            print("invalid response, please restart \n")
elif a == "road":
    b = input("You head towards the road and when you finally reach it you look both ways but see nothing. Do you go LEFT down the road or RIGHT?")
    b = b.lower()
    if b == "left":
        c = input("You head down the road to the left and realize its taking you closer to the lake. As you keep walking you notice a small pickup truck parked on the side of the road and a trail you assume heads to the lake. Do you try to take the TRUCK or look down the TRAIL to try and find someone?")
        c = c.lower()
        if c == "truck":
            print("You go to the truck and notice the keys are still in it. You take the truck and drive back down the road. You are saved!")
        elif c == "trail":
            print("You go down the train and it heads towards the lake. You see a man by the lake and you ask him for help. He says he will take you to town. You are saved!")
        else :
            print("invalid response, please restart \n")
    elif b == "right":
        c = input("You head down the road to the right and are walking for a long time but see nothing. Do you keep heading down the ROAD or turn BACK?")
        c = c.lower()
        if c == "road":
            print("You keep heading down the road and after a really long walk you see lights of a town. You are saved!")
        elif c == "back":
            print("You turn back but theres no one there and nowhere to stay. You are lost.")
        else :
            print("invalid response, please restart \n")
    else :
        print("invalid response, please restart \n")
else :
    print("invalid response, please restart \n")