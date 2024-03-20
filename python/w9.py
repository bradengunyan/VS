class Item:
    def __init__(self, type, price):
        self.type = type
        self.price = price
item_list = []
def add(item, price):
    item_list.append(Item(item, price))
    print(f"'{item}' has been added to the cart.")
def show():
    for i in item_list:
        print(f"\nIndex: {item_list.index(i) + 1}, Item: {i.type}, Item price: $    {i.price}\n")
def rem(ind):
    if ind <= len(item_list) - 1 and ind >= 0:
        item_list.pop(ind - 1)
        print("Item removed.")
    else:
        print("Not a valid index, Operation failed.")
def total():
    sum = 0
    for i in item_list:
        sum += i.price
    print(f"\nTotal Price: ${sum}\n")
num = 0
def menu():
    num = int(input("What would you like to do?\nAdd an item to your cart: (type 1)\nDisplay the contents of the cart: (type 2)\nRemove an Item from the cart: (type 3)\nShow the total price of the cart: (type 4)\nEnd program: (type 5)\n"))
    return num
while True:
    num = menu()
    if num == 1:
        object = str(input("What item would you like to add?"))
        price = float(input("What is the item price?"))
        add(object, price)
        num = 0
    elif num == 2:
        show()
        num = 0
    elif num == 3:
        ind = int(input("What is the index of the Item you want to remove: "))
        rem(ind)
        num = 0
    elif num == 4:
        total()
        num = 0
    elif num == 5:
        quit()
    else:
        break