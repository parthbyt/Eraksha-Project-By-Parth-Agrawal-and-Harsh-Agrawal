import eel
import requests

eel.init('src')

api_file = open("src\\news\\api.txt", "r")
api = api_file.read()
url = "http://newsapi.org/v2/top-headlines?country=in&apiKey=" + api + "&pageSize=10"
news_data = requests.get(url).json()

eel.parseContent(news_data)

eel.start('index.html', port=5010, size=(2500, 2500))
