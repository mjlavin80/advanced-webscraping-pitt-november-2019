## snippet 1

>>> import time, requests
>>> from bs4 import BeautifulSoup
>>> r = requests.get('https://mjlavin80.github.io/pseudonyms/')

>>> index = r.text
>>> bs = BeautifulSoup(index)
>>> bs.title
<title>Author Pseudonyms</title>
>>> list_of_subpages = bs.find_all('a', {'target':'Mainp'})
>>> len(list_of_subpages)
26
>>> urls = [i['href'] for i in list_of_subpages]
>>> print(urls)

## snippet 2

>>> import time, requests
>>> from bs4 import BeautifulSoup
>>> url = 'https://mjlavin80.github.io/advanced-webscraping-pitt-november-2019/oed/index.html'
>>> r = requests.get(url)


## Snippet 3

>>> wordlist = r.text
>>> bs = BeautifulSoup(wordlist)
>>> bs.find('div', {'id':'resultItem16'}).find('span', {'class':'display'})

>>> import time, requests
>>> from bs4 import BeautifulSoup
>>> r = requests.get('https://memory-alpha.fandom.com/wiki/Starfleet_casualties_(22nd_century)')

>>> early_deaths = r.text
>>> bs = BeautifulSoup(early_deaths)
>>> bs.find_all("td")

## snippet 4

>>> import time, requests
>>> from bs4 import BeautifulSoup
>>> url = 'https://mjlavin80.github.io/advanced-webscraping-pitt-november-2019/oed/index.html'
>>> r = requests.get(url)

>>> wordlist = r.text
>>> bs = BeautifulSoup(wordlist)
