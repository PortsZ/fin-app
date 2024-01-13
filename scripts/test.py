import datetime
import pandas_datareader.data as pdr
import yfinance as yf

yf.pdr_override()

assets = ["BBAS3.SA", "KLBN11.SA", "MXRF11.SA"]

start = datetime.datetime(2019, 1, 1)
end = datetime.datetime.now()
df = pdr.get_data_yahoo(assets, start=start, end=end)

print(df)