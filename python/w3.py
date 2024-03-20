child_price = 0
adult_price = 0
children = 0
adults = 0
sales_tax = 0
child_price = float(input("What is the price of the childs meal?\n"))
adult_price = float(input("What is the price of the adults meal?\n"))
children = float(input("How many children are there?\n"))
adults = float(input("How many adults are there?\n"))
sales_tax = float(input("What is the sales tax rate?\n"))
subtotal = child_price * children + adult_price * adults
print(f"Here is your subtotal: {subtotal}\n")
tax = subtotal * sales_tax/100
print(f"Sales tax: {tax}\n")
total = subtotal + tax
print(f"Total: {total}\n\n")
payment = float(input("What is the amount payed? \n"))
change = payment - total
print(f"Change: {change}")