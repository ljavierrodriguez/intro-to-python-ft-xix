# Bucles
""" 
for iterador in arreglo:
    sentencias

while condicion:
    sentencias



"""
# Imprimir los numeros del 1 al 10
for x in range(1, 11): # start = 0, step = 1
    print(x)

nombres = ["Hugo", "Paco", "Luis"]

for i in range(0, 3): # start, stop, step
    print(nombres[i])

for nombre in nombres:
    print(nombre)

indice = 0
while indice < len(nombres):
    print(nombres[indice])
    indice+=1

i = 1
while i <= 10:
    print(i)
    i+=1


datos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for row in datos:
    for col in row:
        print(col)

for j in range(len(datos)):
    for k in range(len(datos[j])):
        print(datos[j][k])


alumnos = [
    { "name": "John", "lastname": "doe"}, 
    { "name": "Jane", "lastname": "doe"}, 
    { "name": "Tommy", "lastname": "Doe"}
]

nombres_alumnos = [ alumno["name"] for alumno in alumnos]
print(nombres_alumnos)