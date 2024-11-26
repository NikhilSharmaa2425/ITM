d = int(input("enter the diameter of the bottel :"))
strr = input("enter the string :")


n = len(strr)
res = ''
j = 0
for i in range(d):

    
    if j >= n:
        j = 0
    res += strr[j]
    j+= 1
print(res)
