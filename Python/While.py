#region Task 1

# Краткое описание: Найти и вывести минимальный элемент в заданном списке.

# Инструкция: Напишите программу с помощью while, которая принимает список чисел и возвращает максимальное значение в этом списке. Без использования функции max

# user_input = input("Введите числа через запятую: ")
# numbers = [int(item.strip()) for item in user_input.split(",")]

# max_number = numbers[0]
# i = 0

# while i < len(numbers):
#     if numbers[i] > max_number:  
#         max_number = numbers[i]
#         print(i)
#     i += 1

# print(f"Максимальный  число: {max_number}")

#endregion

#region Task 2

# value1 = int(input("Введите первое число: "))
# typeList = ['+','-','*','/']
# operationType = input("Выберите тип операции введя один из следующих символов ( + - * / ) : ")
# value2 = int(input("Введите первое число: "))
# i = 0

# if operationType not in typeList:
#     print(f"Мы не поддерживаем {operationType}")
# else:
#     while i < len(typeList):
#         if operationType == typeList[i]:
#             result = eval(f"{value1} {typeList[i]} {value2}")
#             print(f"{value1} {typeList[i]} {value2} = {result}")
#         i +=1;

#endregion

#region Task 3

# Цель задачи: Применить цикл while и операции с числами для вычисления суммы чисел в списке.

# Инструкция:

# Введите числа через запятую с клавиатуры (input() и split()).
# Используйте цикл while, конструкцию sum() и операции с числами для вычисления суммы чисел.
# Выведите результат.

# user_input = input("Введите числа через запятую: ")
# numbers = [int(item.strip()) for item in user_input.split(",")]
# i = 0
# result = 0;
# while i < len(numbers):
#     result += numbers[i]
#     i += 1

# print(f"Сумма чисел:  {result}")

#endregion

#region Task 4

# Цель задачи: Применить цикл while и методы строк для проверки, является ли введенное слово палиндромом.

# Инструкция:

# Введите слово с клавиатуры (input()).
# Используйте цикл while и методы строк для проверки, является ли слово палиндромом.
# Выведите результат.

# user_input = input("Введите слово: ")
# result = True
# i = 0
# j = len(user_input) - 1

# if len(user_input) % 2 == 0:
#     while i < j:
#         if user_input[i] != user_input[j]:
#             result = False
#         i += 1;
#         j -= 1;
# else:
#     while i != j:
#         if user_input[i] != user_input[j]:
#             result = False
#         i += 1;
#         j -= 1;

# if result == True:
#     print(f"Результат: {user_input} палиндром!")
# else:
#     print(f"Результат: {user_input} не является палиндромом!")

#endregion

#region Task 5

# Цель задачи: Применить цикл while, условный оператор и случайные числа для создания игры "Угадай число".

# Инструкция:

# Создайте переменную и присвойте случайное число от 1 до 100.
# Затем попросите пользователя угадать число.
# Используйте цикл while, условные операторы, угадал ли пользователь число.
# Выведите результат.

# import random
# random_number = random.choice(range(1, 100))

# while True:
#     user_input = int(input("Введите число от 1 до 100: "))
#     if user_input < 1 or user_input > 100:
#         print("( ◡‿◡ *) Просто да, может еще раз ?")
#     else:
#         if random_number == user_input:
#             print("(◕‿◕) Вы угадали (◕‿◕)")
#             break
#         else:
#             print("Давай еще раз.")

#endregion

#region 6

# Цель задачи: Применить цикл while, методы строк и список для удаления дубликатов из строки.
# Инструкция:

# Введите строку с клавиатуры (input()).
# Используя цикл while.
# Выведите результат.

# user_input = input("Введите текст: ")
# unique_string = ""
# i = 0

# while i < len(user_input):
#     char = user_input[i]
#     if char not in unique_string:
#         unique_string += char
#     i += 1

# print(f"Список без дубликатов: {unique_string }")

#endregion