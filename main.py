import eel
import requests
import speedtest

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

@eel.expose
def get_server():
    global s
    s = speedtest.Speedtest()
    s.get_best_server()

@eel.expose
def test_download():
    d = round((s.download() / 1000000), 2)
    return d

@eel.expose
def test_upload():
    u = round((s.upload() / 1000000), 2)
    return u

eel.start('index.html', port=5010, size=(2500, 2500), allowed_extensions=['.js', '.html', '.css'])

