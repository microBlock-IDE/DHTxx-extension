import machine
import dht

DHT11 = 11
DHT22 = 22

def read(model, pin):
    try:
        d = None
        if model == DHT11:
            d = dht.DHT11(machine.Pin(pin))
        elif model == DHT22:
            d = dht.DHT22(machine.Pin(pin))
        else:
            return [ -999, -999 ]
        d.measure()
        return [ d.temperature(), d.humidity() ]
    except:
        print("DHT read error")
        return [ -999, -999 ]
