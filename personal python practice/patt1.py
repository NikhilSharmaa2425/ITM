n = int(input("enter value of n : "))
top = n//4
bottom = n//4
mid = n//2

# // top starts here
print("_"*2,end='')
for i in range(top):
    print(" *","_"*4,end='')
# for next line
print()

# mid line starst here 

print("_",end='')
for i in range(mid):
    print("*","_",end='')

print()

# bottom line 
for i in range(bottom):
    print("*","_"*3,end='')