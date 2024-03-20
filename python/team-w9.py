print("Enter a list of numbers, type 0 when finished.\n")
num_list = []
number = ''
while number != 0:
    number = float(input("Enter a number: "))
    if number != 0:
        num_list.append(number)
sum = 0
avg = 0
for i in num_list:
    sum += i
avg = sum / len(num_list)
max_num = 0
min_num = 99999999
for i in num_list:
    if i > max_num:
        max_num = i
    if i < min_num and i >= 0:
        min_num = i
sorted_list = []
sort_min = 99999999
while num_list != []:
    for i in num_list:
        if i < sort_min:
            sort_min = i
    sorted_list.append(sort_min)
    num_list.remove(sort_min)
    sort_min = 999999999
print(f"The sum of all the numbers is: {sum}\n")
print(f"The average of all the numbers is: {avg}\n")
print(f"The minimum positive number in the list is {min_num} and the maximum number in the list is {max_num}\n")
print(f"The sorted list is: \n{sorted_list}")
