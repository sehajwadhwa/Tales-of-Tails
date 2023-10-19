# Make sure you have the following installed: pip install googlemaps
import googlemaps
import pprint
import time
import os

# pull and load dotenv file
from dotenv import load_dotenv
load_dotenv(".env")


# define API_KEY
API_KEY=os.getenv('GMAPS_API_KEY')

# define Client to authenticate ourselves
gmaps = googlemaps.Client(key=API_KEY)

# define Search
    # TODO: ADD GEOLOCATION API FOR LAT & LONG COORDINATES (current coordinates are for testing)
    # FIXME: FIX TYPE SEARCH RESULTS (currently)
    
places_result = gmaps.places_nearby(location= '39.729432, -104.831920', radius = 24140, type = 'animal shelter')

# # test print
pprint.pprint(places_result)

# # loop through each place for id and details
for place in places_result['results']:
    
    my_place_id = place['place_id']
    
    #testing some fields
    my_fields = ['name', 'formatted_phone_number', 'type']
    
    place_details = gmaps.place(place_id = my_place_id, fields = my_fields)
    
    print(place_details)

