# region Task 1

# Задайте словарь с курсами обмена валют относительно базовой валюты — Сом (KGS).

# Ключами словаря будут коды валют (например, USD, EUR, RUB).
# Значениями — курсы обмена этих валют относительно KGS. Например, если 1 USD = 84.8 KGS, то курс для USD будет 84.8.
# Запросите у пользователя:

# Код исходной валюты (например, USD);
# Код целевой валюты (например, EUR);
# Сумму для конвертации.
# Проверьте, присутствуют ли введённые коды валют в словаре курсов обмена.

# Если обе валюты есть в словаре:

# Сначала преобразуйте сумму из исходной валюты в базовую валюту (KGS).
# Затем преобразуйте сумму из KGS в целевую валюту.
# Если одна из валют отсутствует в словаре, выведите сообщение об ошибке.

# Выведите результат конвертации с округлением до 2 знаков после запятой.

# exchange_rates = {"USD": 84.8, "EUR": 94.5, "RUB": 1.24, "KZT": 5.89}

# key1 = input("Введите код исходной валюты (USD, EUR, RUB, KZT ): ")
# key2 = input("Введите код исходной валюты (USD, EUR, RUB, KZT ): ")
# amount = int(input("Введите сумму для конвертации: "))

# if key1 in exchange_rates and key2 in exchange_rates:
#     result = (amount * exchange_rates[key1]) / exchange_rates[key2]
#     print(f"{amount} {key1} = {result} {key2}")
# else:
#     print(f"Не удалось найти курс обмена для одной из валют.")

# endregion

# region Task 2

# Цель задания: Создать словарь студентов и вывести информацию о них.

# Инструкции:

# Создайте новый Python-скрипт.
# Создайте словарь students с информацией о нескольких студентах.
# Каждый студент должен иметь следующие ключи: name (имя студента), age (возраст), major (специализация).
# Выведите информацию о каждом студенте, используя цикл по словарю.

# students = {
#     "student1": {"name": "Иван", "age": 20, "major": "Информатика"},
#     "student2": {"name": "Мария", "age": 21, "major": "Математика"},
#     "student3": {"name": "Алексей", "age": 19, "major": "Физика"},
# }

# for student_id, student_info in students.items():
#     print("------------------------------")
#     print(f"Имя: {student_info['name']}")
#     print(f"Возраст: {student_info['age']}")
#     print(f"Специальность: {student_info['major']}")
#     print("------------------------------")

# endregion


# region Task3

# Цель задания: Подсчитать количество студентов по каждой специализации.

# Инструкции:

# Используя словарь students из предыдущего задания, подсчитайте количество студентов для каждой специализации (major).
# Выведите количество студентов для каждой специализации.

# students = {
#     "student1": {"name": "Иван", "age": 20, "major": "Информатика"},
#     "student2": {"name": "Мария", "age": 21, "major": "Математика"},
#     "student3": {"name": "Алексей", "age": 19, "major": "Физика"},
#     "student4": {"name": "Елена", "age": 22, "major": "Химия"},
#     "student5": {"name": "Сергей", "age": 20, "major": "Информатика"},
# }

# i = 0

# major_list = {}

# while i < len(students):
#     major_item = students[f"student{i+1}"]["major"]

#     if major_item not in major_list:
#         major_list[major_item] = 1
#     else:
#         major_list[major_item] += 1
#     i += 1

# for major, count in major_list.items():
#     print("------------------------------")
#     print(f"Специализация: {major} - Количество студентов: {count}")
#     print("------------------------------")

# endregion

# region Task 4

# Цель задания: Добавить и обновить информацию в словаре.

# Инструкции:

# Используя словарь students, добавьте нового студента в словарь.
# Обновите информацию о существующем студенте (измените возраст или специализацию).
# Выведите обновленную информацию о каждом студенте.

# students = {
#     "student1": {"name": "Иван", "age": 20, "major": "Информатика"},
#     "student2": {"name": "Мария", "age": 21, "major": "Математика"},
#     "student3": {"name": "Алексей", "age": 19, "major": "Физика"},
#     "student4": {"name": "Елена", "age": 22, "major": "Химия"},
# }

# students["student5"] = {"name": "Змей Горыныч", "age": 666, "major": "Relaxation"}


# for student_id, student_info in students.items():
#     print("------------------------------")
#     print(f"Имя: {student_info['name']}")
#     print(f"Возраст: {student_info['age']}")
#     print(f"Специальность: {student_info['major']}")
#     print("------------------------------")

# endregion

#region Task 5

# Цель задания: Написать программу, которая принимает от пользователя строку и выводит количество вхождений каждого символа в этой строке.

# Инструкции:

# Создайте новый Python-скрипт.
# Используйте функцию input() для запроса у пользователя строки.
# Сохраните введенную строку в переменной.
# Создайте словарь, в котором ключи будут символы, а значения - количество вхождений каждого символа в строке.
# Используя цикл, пройдитесь по строке, заполняя словарь.
# Выведите количество вхождений каждого символа на экран.
# Запустите программу и введите строку при запросе.

# user_input = input("Введите строку: ")
# char_count = {}

# for char in user_input:
#     if char in char_count:
#         char_count[char] += 1
#     else:
#         char_count[char] = 1
        
# for char, count in char_count.items():
#     print(f"Символ: {char} - {count}")


#endregion