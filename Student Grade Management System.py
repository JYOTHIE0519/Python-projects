print("************************************************")
print("***Welcome To Student Grade Management System***")
print("************************************************")
print("\n1. Add Student Details \n2. Enter Subject Marks and Calculate Total Marks \n3. Calculate Percentage \n4. Display Student Subject-wise Grades \n0. Exit")

while True:
    choice=int(input("\nEnter your choice:"))

    if choice==1:
        name=input("\nEnter Student name:")
        usn=input("\nEnter USN or Roll Number:")
        branch=input("\nEnter branch name:")

    elif choice==2:
        python=int(input("\nEnter marks of the subject Python:"))
        java=int(input("\nEnter marks of the subject Java:"))
        Data_structure=int(input("\nEnter marks of the subject Data Structure:"))
        Math=int(input("\nEnter marks of the subject Mathematics:"))
        C=int(input("\nEnter marks of the subject C programming:"))
        sum=(python+java+Data_structure+Math+C)
        print("\nTotal_Marks is:",sum)

    elif choice==3:
        percentage=float((sum/500)*100)
        print("\nPercentage:",percentage)

    elif choice==4:
        print("\n$$$Student Subject-wise Grades:$$$")
        print("Student Name :", name)
        print("Branch       :", branch)
        print("USN          :", usn)

        subjects=["python","java","Data_structure","Math","C"]
        marks=[python, java, Data_structure, Math, C]

        for i in range(5):
            mark=marks[i]

            if mark>=85:
                grade="A"
            elif mark>=70:
                grade="B"
            elif mark>=50:
                grade="C"
            elif mark>=40:
                grade="D"
            else:
                grade="Fail"

            print(subjects[i], ":", mark, "| Grade:", grade)

        total = sum
        percentage = (total / 500) * 100

        print("----------------------------------------------")
        print("Total Marks :", total, "/ 500")
        print("Percentage  :", round(percentage, 2), "%")
        print("==============================================")

    elif choice==0:
        break

    else:
        print("Invalid Choice")