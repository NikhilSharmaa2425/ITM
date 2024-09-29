def decToBin(n):
    binDigit = ''
    print("This is bindigit outside the function ",binDigit)
    print("This is n outside the function ",n)

    while n > 0:
        print("this is starting n ",n)
        if n == 1:
            binDigit += '1'
            n = 0
        else:
            r = n % 2
            print("this is r",r)
            binDigit += str(r)
            print("this is before divisio",n)
            n = n // 2
            print("this is after divisio",n)
            
            
    binDigit = binDigit[::-1]
    return int(binDigit)
        
print(decToBin(121))