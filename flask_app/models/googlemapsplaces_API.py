import googlemaps
import pprint
import time
import os

# define API_KEY
API_KEY = os.environ.get("GMAPS_API_KEY")

# define Client to authenticate ourselves
    # FIXME: getting the following error:
    # raise ValueError("Must provide API key or enterprise credentials " 
    # ValueError: Must provide API key or enterprise credentials when creating client.
gmaps = googlemaps.Client(key = API_KEY)

# define Search
    # TODO: ADD GEOLOCATION API FOR LAT & LONG COORDINATES (current coordinates are for testing)
    # TODO: REVIEW & CUSTOMIZE RADIUS
places_result = gmaps.places_nearby(location= '39.729432, -104.831920', radius = 24140, type = 'animal shelter')

# test print
pprint.pprint(places_result)

# loop through each place for id and details
for place in places_result['results']:
    
    my_place_id = place['place_id']
    
    #testing some fields
    my_fields = ['name', 'formatted_phone_number', 'type']
    
    place_details = gmaps.place(place_id = my_place_id, fields = my_fields)
    
    print(place_details)

