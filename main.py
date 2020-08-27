import eel
import requests

eel.init('src')

try:
    api_file = open("api.txt", "r")
    api = api_file.read()
    url = "http://newsapi.org/v2/top-headlines?country=in&apiKey=" + api + "&pageSize=10"
    news_data = requests.get(url).json()
    eel.parseContent(news_data)
except:
    print("Newsapi not found. News will not be shown")

@eel.expose
def covid():
    covidData = requests.get("https://api.covid19india.org/v4/data.json").json()
    return covidData

eel.start('index.html', port=5010, size=(2500, 2500), allowed_extensions=['.js', '.html', '.css'])

