from selenium import webdriver
import openpyxl
import datetime
import sys


orig_stdout = sys.stdout


f = open('out.txt', 'w')
sys.stdout = f


now = datetime.datetime.now()
timestamp = now.strftime("%T_%m_%d_%H_%M")


url="https://www.upbit.com/exchange?code=CRIX.UPBIT.BTC-NXT"
driver = webdriver.Chrome('/Users/yangtae-wook/Downloads/chromedriver')
driver.get(url)
driver.implicitly_wait(7)


btcnxt = driver.find_element_by_css_selector('#root > div > div > div.mainB > section.ty01 > article:nth-child(1) > span.marketB > div.down.ty01 > span.first > strong').text
btcraise = driver.find_element_by_css_selector('#root > div > div > div.mainB > section.ty01 > article:nth-child(1) > span.marketB > div.down.ty01 > span.first > p').text
percentage = driver.find_element_by_css_selector('#root > div > div > div.mainB > section.ty01 > article:nth-child(1) > span.marketB > div.down.ty01 > span:nth-child(2) > strong:nth-child(2)').text
wonnxt = driver.find_element_by_css_selector('#root > div > div > div.mainB > section.ty01 > article:nth-child(1) > span.marketB > div.down.ty01 > span:nth-child(2) > strong.upDown').text


print(btcnxt, "BTC/ ",wonnxt,"/ ",percentage,"/ ",btcraise)


sys.stdout = orig_stdout
f.close()


print("complete")


driver.quit()
