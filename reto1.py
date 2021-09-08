from os import system
# Reto 1: Hader Eduardo García

#RF01
print("Bienvenido al sistema de ubicación para zonas públicas WIFI")

#RF02: Usuario y Contraseña
user= input("Ingrese su usuario ")
if user!="51656":
  system("cls")
  print("Error")
  exit() 

password= input("Ingrese su contraseña ")

if password!="65615":
  system("cls")
  print("Error")
  exit() 


#RF03: Captcha

# First term: 656
# Second term: 5
A = ((6+5)*1)-6
B = 51656 % ((51656//1000)*1000)

captcha = int(input(str(B)+"+"+str(A)+"="))
if (captcha != B+A):
    system("cls")
    print("Error")
    exit()
else:
    system("cls")
    print("Sesión iniciada")