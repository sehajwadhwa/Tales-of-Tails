import googlemaps
import pprint
import time
import os

# define API_KEY
API_KEY = os.environ.get("GMAPS_API_KEY")

# define Client to authenticate ourselves
gmaps = googlemaps.Client(key = API_KEY)

# define Search
    # TODO: ADD GEOLOCATION API FOR LAT & LONG COORDINATES 
    # TODO: REVIEW & CUSTOMIZE RADIUS
places_result = gmaps.places_nearby(location= '', radius = 40000, type = 'animal shelter')

# test print
pprint.pprint(places_result)



