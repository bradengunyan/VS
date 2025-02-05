def choseOption(option):
    print(option)
    if option == 'w':
        return True
    else: 
        return False

def writeFile():
    with open("urmom.JSON", 'w') as file:
        response = input("SSN now plese:")
        file.write(response)

def readFile():
    with open("urmom.JSON", 'r') as file:
        print(file.read())

while True:
    choice = input("read or write (w/r)")
    if choseOption(choice):
        writeFile()
    else:
        readFile()