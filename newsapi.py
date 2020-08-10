api = input("Enter api key: ")

f = open("api.txt", "w")
f.write(api)
f.close()

print("Generated api.txt. Exiting...")
