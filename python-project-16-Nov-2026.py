print("Enter rock/paper/scissor")
p1=input()
p2=input()
if p1=="rock" and p2=="scissor":
    print ("p1 won")
elif p1=="rock" and p2=="paper":
    print("p2 won")
elif p1=="paper" and p2=="rock":
    print("p1 won")
elif p1=="paper" and p2=="scissor":
    print("p2 won")
elif p1=="scissor" and p2=="rock":
    print("p2 won")
elif p1=="scissor" and p2=="paper":
    print("p1 won")
elif (p1=="scissor"and p2=="scissor") or (p1=="paper" and p2=="paper") or (p1=="rock" and p2=="rock")  :
    print("Both players are tie")
else:
    "Invalid"