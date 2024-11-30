db = {}

while True:
    print(
        """
   Menu
1. Добавление нового контакта:
2. Просмотр всех контактов:
3. Поиск контакта:
4. Изменение контакта:
5. Удаление контакта:
6. Выход из программы:
"""
    )

    user_action = input("\nВыберите действие из списка введя от 1 до 6: ")

#region 1. Добавление нового контакта
    if user_action == "1":
        print("\n##### Добавление нового контакта #####\n")
        
        contact_name =  input("Введите имя пользователя: ")

        if contact_name in db:
            print(f"Такой пользователь уже есть, ошибка!")
            continue

        phone_number =  input("Введите номер телефона пользователя: ")

        db[contact_name] = phone_number;

        print(f"Контакт {contact_name} добавлен!")
#endregion

#region 2. Просмотр всех контактов
    elif user_action == "2":
        print("\n##### Просмотр всех контактов #####\n")

        for name, number in db.items():
            print(f"{name}: {number}")
#endregion

#region 3. Поиск контакта
    elif user_action == "3":
        print("\n##### Поиск контакта #####\n")

        contact_name =  input("Введите имя пользователя для поиска: ")
        
        if contact_name in db:
            print(f"Контакт {contact_name}: {db[f'{contact_name}']}")
        else:
            print("Пользователь не найден.")
#endregion
    
#region 4. Изменение контакта
    elif user_action == "4":
        print("\n##### Изменение контакта #####\n")

        contact_name =  input("Введите имя пользователя для изменения: ")
        
        if contact_name in db:
            phone_number =  input("Введите новый номер телефона для пользователя: ")
            db[contact_name] = phone_number;
            print(f"Контакт {contact_name} изменен на номер {phone_number}!")
        else:
            print("Контакт не найден.")
#endregion

#region 5. Удаление контакта

    elif user_action == "5":
        print("\n##### Удаление пользователя #####\n")

        contact_name =  input("Введите имя пользователя для удаления: ")

        if contact_name in db:
            db.pop(contact_name)
            print(f"Контакт {contact_name} удален!")
        else:
            print("Контакт не найден.")

#endregion

#region 6.Выход из программы

    elif user_action == "6":
        print("Выход из программы")
        break

#endregion

    else:
        print("\nВыберите действие из списка введя от 1 до 6:")