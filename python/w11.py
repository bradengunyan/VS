class Member:
    def __init__(self, name, id_number, job_title, salary):
        self.name = name
        self.id_number = id_number
        self.job_title = job_title
        self.salary = salary
member_list = []
with open("hr_system.txt") as system_file:
    for line in system_file:
        lines = line.split()
        values = []
        for value in lines:
            values.append(value)
        member_list.append(Member(values[0], values[1], values[2], float(values[3])))
    for member in member_list:
        member.salary = member.salary/24
        if member.job_title == "Engineer":
            member.salary += 1000
        new_salary = round(member.salary, 2)
        print(f"{member.name} (ID: {member.id_number}), {member.job_title} - ${new_salary}")