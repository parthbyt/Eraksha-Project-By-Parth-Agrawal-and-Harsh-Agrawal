import sys

api = sys.argv[1]

f = open("api.txt", "w")
f.write(api)
f.close()
