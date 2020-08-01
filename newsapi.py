import sys

api = sys.argv[1]

f = open("src\\news\\api.txt", "w")
f.write(api)
f.close()
