def greet():
    print("welcome")
greet()

def greet(message):
    print(message)
greet("WELCOME...")

def calc(a,b):
    return a+b,a*b
total,product=calc(10,20)
print(total)
print(product)

#Default argument
def greeting(name="Guest"):
    print("Welcome",name)
greeting("Jyothi")
greeting()

 #Keyword Argument
def student_info(name,age,city):
    print(name,age,city)
student_info(age=25,name="Jyothi",city="Bangalore")